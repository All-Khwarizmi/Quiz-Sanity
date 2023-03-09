'use client';
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => (
  <footer className='bg-gray-200 text-black flex flex-col items-center space-x-3 space-y-3  h-full w-screen'>
    <ButtonGroup variant='ghost '>
      <IconButton
        as='a'
        href='#'
        aria-label='LinkedIn'
        icon={<FaLinkedin fontSize='1.25rem' />}
      />
      <IconButton
        as='a'
        href='#'
        aria-label='GitHub'
        icon={<FaGithub fontSize='1.25rem' />}
      />
      <IconButton
        as='a'
        href='#'
        aria-label='Twitter'
        icon={<FaTwitter fontSize='1.25rem' />}
      />
    </ButtonGroup>
    <Text fontSize='sm' color='subtle'>
      &copy; {new Date().getFullYear()} All rights reserved.
    </Text>
  </footer>
);
