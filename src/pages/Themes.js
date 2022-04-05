import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid
} from '@chakra-ui/react';


const Themes = () => {
    return (
        <>
        <SimpleGrid minChildWidth='200px' spacing='30px'>

            <Center py={6}>
                <Box maxW={'280px'} w={'full'} bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                    <Box h={'150px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                       <Image rounded={'lg'}
                            height={180} width={282} objectFit={'contain'}
                            src={'https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/chat.png?alt=media&token=cd164a1e-1da7-46f0-92eb-8687760799f0'}
                           
                        />
                    </Box>
                    <Stack>
                        <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                            Theme
                        </Text>
                        <Heading color={useColorModeValue('#738dbb', 'white')}
                            fontSize={'2xl'} fontFamily={'body'}> Focus</Heading>
                        <Text color={'gray.500'}>
                        Communication
                        </Text>
                    </Stack>
                </Box>
            </Center>


            <Center py={6}>
                <Box maxW={'280px'}  w={'full'} bg={useColorModeValue('white', '#f2e6f0')}  boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                    <Box h={'150px'} bg={'#f2e6f0'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                       <Image id="talking" rounded={'lg'} height={170} width={282} objectFit={'contain'}
                            src={'https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/talking.png?alt=media&token=a64c2fcb-50b7-44d9-ab7a-4984502bcd42'}
                           
                        />
                    </Box>
                    <Stack>
                        <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                            Theme
                        </Text>
                        <Heading color={useColorModeValue('#d7b3d1', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                            Quality Time
                        </Heading>
                        <Text color={'gray.500'}>
                       Here's some tips
                        </Text>
                    </Stack>
                </Box>
            </Center>
            
            </SimpleGrid>
        </>
    )
}

export default Themes