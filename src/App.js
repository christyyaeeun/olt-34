import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Journal from "./pages/Journal";
import Profile from "./pages/Profile"
import Themes from './pages/Themes';
import Tasks from "./pages/Tasks";
import "./styles/style.css";
import Layout from './components/Layout';
import LinkPage from './pages/LinkPage';
import Missing from './pages/Missing';
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { listPosts } from "./graphql/queries";
import { API, Storage, Auth } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'
import { onCreatePost } from './graphql/subscriptions';
import CreatePost from './components/CreatePost';
import Btn from './components/Btn';
// import Posts from './components/Post';
// import Post from './components/Posts';
// import Header from './components/Header';
// import AuthContext from '../context/AuthContext';
// import { DataStore, Predicates } from "@aws-amplify/datastore";

function App({ user, signOut }) {
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
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="/linkpage" element={<LinkPage />} />
              <Route path='/journal' element={<Journal />} />
              <Route path='/home' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/themes' element={<Themes />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path="*" element={<Missing />} />
            </Route>
          </Routes>


{/* <Posts posts={posts} />
    <Route exact path="/userposts">
      <Posts posts={userPosts} />
    </Route>
    <Route path="/post/:id">
      <Post />
    </Route>
    >
    Button
  </Button>
          <Button id="new-post"
    <Route component={Profile} /> */}

<Button colorScheme='teal' variant='outline'
            title="Post"
            onClick={() => updateOverlayVisibility(true)}
          >Post</Button>
          {showOverlay && (
            <CreatePost
              updateOverlayVisibility={updateOverlayVisibility}
              updatePosts={setPostState}
              posts={posts}
            />
          )}

        </ChakraProvider>
      </>
    );
  }


export default withAuthenticator(App)
