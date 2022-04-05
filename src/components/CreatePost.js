import React, { useState } from 'react';
// import Buttons from './Buttons';
import { v4 as uuid } from 'uuid';
import { Storage, API } from 'aws-amplify';
import { createPost } from '../graphql/mutations';
import { Input, Container, Box, Stack, Textarea, Button, ButtonGroup, Icon, Image } from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { graphqlOperation } from 'aws-amplify';
/* Initial state to hold form input, saving state */
const initialState = {
  name: '',
  content: '',
  image: {},
  file: '',
  saving: false,
};

export default function CreatePost({
  updateOverlayVisibility,
  updatePosts,
  posts,
}) {
  /* 1. Create local state with useState hook */
  const [formState, updateFormState] = useState(initialState);

  /* 2. onChangeText handler updates the form state when a user types int a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  /* 3. onChangeFile handler will be fired when a user uploads a file  */
  function onChangeFile(e) {
    e.persist();
    if (!e.target.files[0]) return;
    const image = {
      fileInfo: e.target.files[0],
      name: `${e.target.files[0].name}_${uuid()}`,
    };
    updateFormState((currentState) => ({
      ...currentState,
      file: URL.createObjectURL(e.target.files[0]),
      image,
    }));
  }

  /* 4. Save the post  */
  async function save() {
    try {
      const { name, content, image } = formState;
      if (!name || !content || !image.name) return;
      updateFormState((currentState) => ({ ...currentState, saving: true }));
      const postId = uuid();
      const postInfo = {
        name,
        content,
        image: formState.image.name,
        id: postId,
      };

      await Storage.put(formState.image.name, formState.image.fileInfo);
      await API.graphql({
        query: createPost,
        variables: { input: postInfo },
      });
      updatePosts([...posts, { ...postInfo, image: formState.file }]);
      updateFormState((currentState) => ({ ...currentState, saving: false }));
      updateOverlayVisibility(false);
    } catch (err) {
      console.log('error: ', err);
    }
  }
  function onClickCreatePost() {
    addPost();
  }
const addPost = async () => {
  // const addGameDay = async () => {
  //   const d = selectedDate;
  //   const gameDayDateString = [
  //     d.getFullYear(),
  //     "-",
  //     ("0" + (d.getMonth() + 1)).slice(-2),
  //     "-",
  //     ("0" + d.getDate()).slice(-2)
  //   ].join("");

    await API.graphql(
      graphqlOperation(createPost, {
        input: {}
      })
    );}



  return (
    <div>
        <Container maxW='container.sm' p={6}>
            <Box boxShadow='lg' borderRadius='lg' borderWidth="1px" p={3} my={5}>
                <Stack spacing={3} p={4}>
                    <Input placeholder='title' size='sm' onChange={onChangeText} />
                    <Textarea onChange={onChangeText} placeholder='content' size='sm' />

                    <Box className="image-upload" w='100%'>
                        <label for="file-input">
                            <Icon className="img" color='#8dbae8' w={6} h={6} as={BiImageAdd} />
                        </label>
                        <input id="file-input" type="file" onChange={onChangeFile} />
                    </Box>

          {formState.file && (

            <Image
              boxSize='150px'
              objectFit='cover'
              src={formState.file}
              alt='Preview'
            />)}
      <ButtonGroup pb={3} variant='outline' spacing='6'>
      <Button color='#7599bf' onClick={save}>Save</Button>
      <Button color='#7599bf' onClick={onClickCreatePost}>Save</Button>

        <Button color='#53555a' type="cancel" title="Cancel" onClick={() => updateOverlayVisibility(false)} >cancel</Button>
 </ButtonGroup>
      {/* <Button title="Create New Post" onClick={save} />
      <Button type="cancel" title="Cancel" onClick={() => updateOverlayVisibility(false)}
      /> */}
      {formState.saving && <p>Saving post...</p>}
      </Stack>
            </Box>
            </Container>
    </div>
  );
}

