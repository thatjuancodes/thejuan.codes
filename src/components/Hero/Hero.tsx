import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';

const Hero: React.FC = () => {
  const handleExploreClick = (): void => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
    >
      <Container maxW="2xl">
        <VStack gap={1} textAlign="center" color="white">
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="semibold"
            letterSpacing="tight"
          >
            JM Alvarez
          </Heading>
          
          <Text
            mt={1}
            mb={2}
            fontSize={{ base: 'lg', md: 'lg' }}
            color="white"
            opacity={0.8}
            fontWeight="light"
          >
            AI/Agentic Engineer
          </Text>
          
          <Heading
            as="h2"
            mt={5}
            mb={5}
            fontSize={{ base: 'lg', md: 'xl' }}
            color="orange.400"
            fontWeight="normal"
            lineHeight="relaxed"
          >
            Designing AI tools so humans can do more human things
          </Heading>
          
          <Button
            size="lg"
            mt={5}
            onClick={handleExploreClick}
            aria-label="Explore my work and projects"
            bg="orange.500"
            color="white"
            _hover={{ bg: 'orange.600' }}
            px={8}
            py={3}
            borderRadius="md"
            fontWeight="medium"
            fontSize="md"
          >
            Explore My Work
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero; 