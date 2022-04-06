import React from 'react'
import { Flex, Spacer, Box, Avatar, Text, Image, IconButton } from '@chakra-ui/react'
import { ChatIcon, AddIcon, EmailIcon } from '@chakra-ui/icons'

export function Card ({ post, children }) {
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='md' overflow='hidden' m={5}>
      {children}
    </Box>
  )
}

Card.Header = function ({ owner }) {
  return (
    <Box p={2}>
      <Flex>
        <Box d='flex' alignItems='baseline'>
          <Avatar name={owner.alias} />
          <Box ml={2}>
            <Text fontWeight='bold' fontSize='sm'>{owner.alias}</Text>
          </Box>
        </Box>
        <Spacer />
        <Box p={2}>
          &hellip;
        </Box>
      </Flex>
    </Box>
  )
}

Card.Main = function ({ content }) {
  return (
    <Box>
      {content.type === 'VIDEO'
        ? (
          <video controls autoPlay>
            <source src={content.source} type='video/mp4' />
          </video>
        ) : <Image src={content.source} />}
    </Box>
  )
}

Card.Footer = function ({ owner, content, timelineItemId, children }) {
  return (
    <Box ml={3}>
      <Box>
        <IconButton icon={<AddIcon />} variant='ghost' />
        <IconButton icon={<ChatIcon />} variant='ghost' />
        <IconButton icon={<EmailIcon />} variant='ghost' />
      </Box>
      <Box mt={3}>
        <Text>
          <Text as='b'>{owner.alias}</Text>
          &nbsp;
          {content}
        </Text>
      </Box>
      <Box>
        {children}
      </Box>
      <Box mt={1} mb={2}>
        <Text fontSize='xs' color='gray.500'>2 HOURS AGO</Text>
      </Box>
    </Box>
  )
}