import React, { useEffect, useReducer, useState } from "react";
import { listPosts } from "../graphql/queries";
import { onCreatePost } from "../graphql/subscriptions";
import API, { graphqlOperation } from "@aws-amplify/api";
import { Container } from '@chakra-ui/react'
import { Auth } from "aws-amplify";

const initialState = { posts: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "QUERY":
      return { ...state, posts: action.posts };
    case "SUBSCRIPTION":
      return { ...state, posts: [...state.posts, action.post] };
    default:
      return state;
  }
};

const PostList = () => {
  const [user, setUser] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchUser().then(user => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    getData();
    if (user) {
      const subscription = API.graphql(
        graphqlOperation(onCreatePost, { owner: user.username })
      ).subscribe({
        next: eventData => {
          const post = eventData.value.data.onCreatePost;
          dispatch({ type: "SUBSCRIPTION", post });
        }
      });
      return () => subscription.unsubscribe();
    }
  }, [user]);

  async function getData() {
    const postData = await API.graphql(graphqlOperation(listPosts));
    dispatch({ type: "QUERY", posts: postData.data.listPosts.items });
  }

  async function fetchUser() {
    return await Auth.currentAuthenticatedUser();
  }

  return (
    <Container>
        Your Tasks:
      {state.posts.map((post, i) => (
        <p key={post.id}>
          {post.title} : {post.content}
        </p>
      ))}
    </Container>
  );
};

export default PostList;