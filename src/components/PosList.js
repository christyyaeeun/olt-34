import React from 'react'
import {useState, useEffect } from 'react-dom'
import { API, Storage, Auth } from "aws-amplify";


function PosList() {
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

const [darkMode, setDarkMode] = useState(false);

return (
  <>
    <div className="container">
        <div className={`${darkMode && "dark-mode"}`}>
            <p className="hello">Welcome {user.username} </p>
            <div className="divider">
            <hr className={dividerStyle} />
            </div>
            <div className="new-post">
            <Button id="new-post"
              title="New Post"
              onClick={() => updateOverlayVisibility(true)}
            /></div>
              <Route exact path="/">
                <Posts posts={posts} />
              </Route>
              <Route exact path="/userposts">
                <Posts posts={userPosts} />
              </Route>
              <Route path="/post/:id">
                <Post />
              </Route>
              <Route component={UserProfile} />
          </div>
          <div className="signout-wrapper">
            <button className="signout-btn" onClick={signOut}>Sign out</button>
          </div>
        </div>
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

