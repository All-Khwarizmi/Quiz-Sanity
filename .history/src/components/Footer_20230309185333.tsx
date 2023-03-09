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
  <footer className='bg-gray-200 text-black  h-full w-screen'>
    <Container as='footer' role='contentinfo'>
      <Stack
        spacing='8'
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align='start'>
          <Text color='muted'>Create beautiful websites remarkably fast.</Text>
        </Stack>
        <Stack
          className='pr-20 py-3'
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction='row' spacing='8'>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Product
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>How it works</Button>
                <Button variant='link'>Pricing</Button>
                <Button variant='link'>Use Cases</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt='8'
        pb='12'
        pr={'5'}
        justify='center'
        direction={{ base: 'column-reverse', md: 'row' }}
        align='center'
      >
        
      </Stack>
      <Stack
        pt='8'
        pb='12'
        pr={'5'}
        justify='center'
        direction={{ base: 'column-reverse', md: 'row' }}
        align='center'
      ></Stack>
    </Container>
    <Text fontSize='sm' color='subtle'>
      &copy; {new Date().getFullYear()} All rights reserved.
    </Text>
  </footer>
);
