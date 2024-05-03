import { Box, Flex, Text, VStack, Link, Button, Heading, Spacer } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" bg="gray.100" p={4} align="center">
        <Heading size="md">John Doe</Heading>
        <Spacer />
        <Link href="#about" p={2}>About</Link>
        <Link href="#portfolio" p={2}>Portfolio</Link>
        <Link href="#contact" p={2}>Contact</Link>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="lg">About Me</Heading>
        <Text mt={2}>
          Passionate software developer with a knack for building responsive and scalable web applications.
        </Text>
      </Box>
      <Box id="portfolio" p={4}>
        <Heading size="lg">Portfolio</Heading>
        <VStack spacing={4} mt={2}>
          <Text>Project 1 - E-commerce Platform</Text>
          <Text>Project 2 - Real-time Chat Application</Text>
          <Text>Project 3 - Personal Finance Tracker</Text>
        </VStack>
      </Box>
      <Box id="contact" p={4}>
        <Heading size="lg">Contact</Heading>
        <Flex mt={2} align="center">
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            Email Me
          </Button>
          <Link href="https://github.com" isExternal ml={2}>
            <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com" isExternal ml={2}>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="outline">
              LinkedIn
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;