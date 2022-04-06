import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { Auth } from "aws-amplify";
import { Container, Box, VStack, StackDivider } from '@chakra-ui/react'
// import Posts from "../components/Posts";

const Home = () => {

  // useEffect(() => {
  //   checkUser(); // new function call

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // async function checkUser() {
  //   let user = await Auth.currentAuthenticatedUser();
  //   console.log("user:", user);
  //   console.log("user attributes: ", user.attributes);
  // }



    return (
        <section>
          <Container maxW='2xl' h='100vh' bg='#e0e6ff' p='2' centerContent>
            <h1>Home</h1>
            <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch' width='100%' mt='4' p='5' 
>
  <Box h='300px' borderRadius='lg' boxShadow='md' bg='white'>
    
  </Box>

  <Box h='150px' borderRadius='lg' boxShadow='md' bg='#ffe5f3'>
    
  </Box>
</VStack>
            </Container>
        </section>
    )
}

export default Home

// #fff5cf