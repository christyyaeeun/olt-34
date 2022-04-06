//App.js

import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { css } from "@emotion/css";
import { API, Storage, Auth } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import { listPosts } from "./graphql/queries";
import "./styles/App.css";
import Postt from "./PostList";
import { onCreatePost } from './graphql/subscriptions';
import UserProfile from './UserProfile';
import CreatePost from "./CreatePost";
import Button from "./Btn";



function Router() {

  /* create a couple of pieces of initial state */
  const [showOverlay, updateOverlayVisibility] = useState(false);
  const [posts, updatePosts] = useState([]);
  const [userPosts, updateUserPosts] = useState([]);

  /* fetch posts when component loads */
  useEffect(() => {
    fetchPosts();
    checkUser(); // new function call

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
  }

  async function fetchPosts() {
    /* query the API, ask for 100 items */
    let postData = await API.graphql({query: listPosts, variables: { limit: 100 },
    });
    let postsArray = postData.data.listPosts.items;
    
    /* map over the image keys in the posts array, get signed image URLs for each image */
    postsArray = await Promise.all(
      
      postsArray.map(async (post) => {
        const imageKey = await Storage.get(post.image);
        
        post.image = imageKey;
        return post;
      })
    );
    /* update the posts array in the local state */
    
    setPostState(postsArray);
  }
 

  async function setPostState(postsArray) {
    const user = await Auth.currentAuthenticatedUser();
    const userPostData = postsArray.filter((p) => p.owner === user.username);
    updateUserPosts(userPostData);
    updatePosts(postsArray);
  }


  function subscribe() {
    API.graphql({
        query: onCreatePost
    })
    .subscribe(() => fetchPosts())
}

useEffect(() => {
  fetchPosts();
  const subscription = subscribe();
  return () => subscription();
        // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <>
      <div className="container">
        <HashRouter>
            <div className={contentStyle}>
              {/* <p className="hello">Welcome {username} </p> */}
              <div className="divider">
              <hr className={dividerStyle} />
              </div>
              <div className="new-post">
              <Button id="new-post"
                title="New Post"
                onClick={() => updateOverlayVisibility(true)}
              /></div>
              <Switch>
                <Route exact path="/">
                  <Postt posts={posts} />
                </Route>
                <Route exact path="/userposts">
                  <Postt posts={userPosts} />
                </Route>
                <Route path="/post/:id">
                  <Postt />
                </Route>
                <Route component={UserProfile} />
              </Switch>
            </div>
        </HashRouter>
        {showOverlay && (
          <CreatePost
            updateOverlayVisibility={updateOverlayVisibility}
            updatePosts={setPostState}
            posts={posts}
          />
        )}
      
      </div>
    </>
  );
}


const dividerStyle = css`
  margin-top: 5px;
`;

const contentStyle = css`
  min-height: calc(100vh - 45px);
`;

export default withAuthenticator(Router);