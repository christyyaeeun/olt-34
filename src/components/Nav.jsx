import * as React from "react";
import { ReactNode } from 'react';
import {
  Box,
  Center,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { AmplifySignOut } from '@aws-amplify/ui-react'

const Links = ["Home", "Tasks", "Journal", "Themes"];

const NavLink = ({ children, href }: { children: ReactNode; href: string; }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#f8f8f8', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bg={'#f8f8f8'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box id="nav-header">OLT</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} href={`${link}`}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/avatar-sm.png?alt=media&token=7843d4ae-bee0-47f4-9a3c-f964e463d03c'
                  }
                />
              </MenuButton>

              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/avatar.png?alt=media&token=05150580-bc8a-4211-b00f-f9addb36b26f'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem as="a" href="profile">Profile</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>                <AmplifySignOut />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={`${link}`}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}