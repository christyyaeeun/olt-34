import React, { useState } from "react";

import API, { graphqlOperation } from "@aws-amplify/api";
import { createPost } from "../graphql/mutations";

import { Button, Textarea, Container } from "@chakra-ui/react";

async function createNewPost(data) {
  const post = {
    ...data,
    complete: false
  };
  await API.graphql(graphqlOperation(createPost, { input: post }));
}

const defaultForm = {
  title: "",
  content: ""
};

const CreatePost = () => {
  const [data, updateData] = useState(defaultForm);

  function handleChange(e) {
    const target = e.target;
    e.persist();

    return updateData(values => ({
      ...values,
      [target.name]: target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createNewPost(data).then(() => {
      updateData(defaultForm);
    });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
          <Textarea
            type='text'
            name='name'
            label='Task Name'
            value={data.name}
            onChange={handleChange}
            variant='outlined'
            margin='normal'
          />
          <Textarea
            type='text'
            name='description'
            label='Task Description'
            value={data.description}
            onChange={handleChange}
            variant='outlined'
            margin='normal'
            multiline
          />

        <Button type='submit' color='primary' variant='contained'>
          Create New Post
        </Button>
      </form>
    </Container>
  );
};

export default CreatePost;