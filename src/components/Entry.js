import React, { useState } from "react";
import { Input, Container, Box, Stack, Textarea, Button, ButtonGroup, Icon, Image } from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { v4 as uuid } from "uuid";

const initialState = {
    title: "",
    content: "",
    image: {},
    file: "",
    saving: false,
};

export default function Entry({
    updateOverlayVisibility,
    updatePosts,
    posts
}) {

    const [formState, updateFormState] = useState(initialState);

    function onChangeText(e) {
        e.persist();
        updateFormState((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value,
        }));
    }
    function onChangeFile(e) {
        e.persist();
        if (!e.target.files[0]) return;
        const fileExtPosition = e.target.files[0].name.search(/.png|.jpg|.gif/i);
        const firstHalf = e.target.files[0].name.slice(0, fileExtPosition);
        const secondHalf = e.target.files[0].name.slice(fileExtPosition);
        const fileName = firstHalf + "_" + uuid() + secondHalf;
        console.log(fileName);
        const image = { fileInfo: e.target.files[0], name: fileName };
        updateFormState((currentState) => ({
            ...currentState,
            file: URL.createObjectURL(e.target.files[0]),
            image,
        }));
    }

    return (
        <div>Entry
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
                            <Button color='#7599bf'>Save</Button>
                            <Button color='#53555a'>Cancel</Button>


                        </ButtonGroup>
                        {/* <Box mb='3'>
                        <IconButton variant='ghost' color='#c2d6e9' type="cancel" aria-label='cancel' icon={<CloseIcon />} onClick={() => updateOverlayVisibility(false)} />
                    </Box> */}
                    </Stack>
                </Box>
            </Container>
        </div>
    )
}

