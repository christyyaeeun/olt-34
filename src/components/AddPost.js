// import { API } from 'aws-amplify'
// import * as mutations from '../graphql/mutations'

// const postDetails = {
//     title: 'title',
//     content: 'body',
//     image: {},
// };

// const newPost = await API.graphql({ query: mutations.createPost, variables: {input: postDetails}});
// import React, { useState } from "react";
import { Button } from '@chakra-ui/react'
// import { DataStore } from 'aws-amplify';
const AddPost = ({ id, title, content, image, postDate, handleDeletePost }) => {
    async function onChange(e) {
        const file = e.target.files[0];
        try {
          await Storage.put(file.name, file, {
            contentType: "image/png", // contentType is optional
          });
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
      }
      
      <input type="file" onChange={onChange} />;
    
    return (
		<div className='note'>
			<span>{title}</span>
			<div className='note-footer'>
				<small>{content}</small>
                {image}  
                {postDate}
				<Button	onClick={() => handleDeletePost(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default AddPost;