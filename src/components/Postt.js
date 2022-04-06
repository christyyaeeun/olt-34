// import { API, Storage } from 'aws-amplify';
// import React, { useState, useEffect } from 'react';
// import { listPosts } from './graphql/queries';
// import { createPost as createPostMutation, deletePost as deletePostMutation } from './graphql/mutations';


// export default function PostAp() {
//     const [posts, setPosts] = useState([]);
//     const [formData, setFormData] = useState(initialFormState);

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     async function fetchPosts() {
//         const { data } = await API.graphql({ query: listPosts });
//         const postsFromAPI = data.listPosts.items;

//         async function createPost() {
//             if (!formData.name || !formData.description) return;
//             await API.graphql({ query: createPostMutation, variables: { input: formData } });
//             setPosts([...posts, formData]);
//             setFormData(initialFormState);
//         }

//         const postsWithImages = await Promise.all(postsFromAPI.map(async post => {
//             let image = null
//             if (post.image) {
//                 image = await Storage.get(post.image);
//             }

//             // Make a shallow copy of the post, and add the image to the new object.
//             // The original objects in `postsFromAPI` are not modified
//             return { ...post, image };
//         }))

//         async function deletePost({ id }) {
//             const newPostsArray = posts.filter(post => post.id !== id);
//             setPosts(newPostsArray);
//             await API.graphql({ query: deletePostMutation, variables: { input: { id } } });
//         }

//         // Now we can set the posts to the new array, along with the new objects.
//         setPosts(postsWithImages);
//     }

//     return (
//         <input
//         onChange={e => setFormData({ ...formData, 'name': e.target.value})}
//         placeholder="Note name"
//         value={formData.name}
//       />
//       <input
//         onChange={e => setFormData({ ...formData, 'description': e.target.value})}
//         placeholder="Note description"
//         value={formData.description}
//       />
//       <button onClick={createNote}>Create Note</button>
//       <div style={{marginBottom: 30}}>
//         {
//           notes.map(note => (
//             <div key={note.id || note.name}>
//               <h2>{note.name}</h2>
//               <p>{note.description}</p>
//               <button onClick={() => deleteNote(note)}>Delete note</button>
//     )