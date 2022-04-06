/* First import the API category from Amplify */
import { API } from 'aws-amplify';
/* Next, import the createContact mutation */
import { createPost } from './graphql/mutations';
import AuthContext from '../context/AuthContext';

const { user } = useUser();

function OnPost() {

  /* For a dynamic form, create some local state to hold form input. This is pseudocode and will differ based on your JavaScript framework. */
  const formState = { title: '', content: '', image: {} };

  /* Create a function to update the form state. This is pseudocode and will differ based on your JavaScript framework.  */
  function updateFormState(key, value) {
    formState[key] = value;
  }

  /* Create a function that will create a new contact */
  async function submitNewPost() {
    try {
      await API.graphql({
        query: createPost,
        variables: {
          input: {
            title: formState.title,
            content: formState.content,
            image: formState.image
          }
        }
      })
      console.log('New post created!');
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <>
      <input placeholder="title" onChange={e => updateFormState('title', e.target.value)} />
      <input placeholder="content" onChange={e => updateFormState('content', e.target.value)} />
      <button onClick={submitNewPost}>Create New Contact</button>
    </>
  )

}