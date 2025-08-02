import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Homemaker',
      description: 'A home system to automate home management with smart controls and monitoring capabilities.',
      imageUrl: '',
      technologies: ['React', 'TypeScript']
    },
    {
      id: 2,
      title: 'Finance Simulator',
      description: 'A simple webtool to model personal investments and financial planning scenarios.',
      imageUrl: '',
      technologies: ['Ruby on Rails', 'Next.js', 'Hasura']
    },
    {
      id: 3,
      title: 'Qout.R',
      description: 'A simple webtool to generate business quotes more efficiently with customizable templates.',
      imageUrl: '',
      technologies: ['React', 'TypeScript']
    },
    {
      id: 4,
      title: 'Hasura JSON to ERD Tool',
      description: 'A Python tool to generate an Entity Relationship Diagram from a Hasura JSON export.',
      imageUrl: '',
      technologies: ['Python', 'Hasura', 'GraphQL', 'JSON']
    },
    {
      id: 5,
      title: 'DocKeepr',
      description: 'Convert document formats into editable and printable PDF documents with format preservation.',
      imageUrl: '',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <Box
      as="section"
      id="projects"
      py={24}
      px={12}
      bg="gray.50"
    >
      <Container maxW="4xl">
        <VStack gap={12}>
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="semibold"
            textAlign="center"
            letterSpacing="tight"
            color="gray.800"
            mb={8}
            fontFamily="mono"
          >
            $ ls projects/
          </Heading>
          
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            width="100%"
          >
            {projects.map((project, index) => (
              <Box
                key={project.id}
                bg="white"
                borderRadius="md"
                border="1px solid"
                borderColor="gray.200"
                p={6}
                fontFamily="mono"
                transition="all 0.2s ease"
                _hover={{
                  borderColor: "green.400",
                  shadow: "md",
                }}
              >
                <VStack align="stretch" spacing={3}>
                  <HStack justify="space-between" align="center">
                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      color="green.600"
                    >
                      $ {project.title}
                    </Text>
                    <Tag
                      size="sm"
                      bg="gray.100"
                      color="gray.700"
                      borderRadius="full"
                      fontSize="xs"
                      fontFamily="mono"
                    >
                      {index + 1}
                    </Tag>
                  </HStack>
                  
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    lineHeight="tall"
                    pl={4}
                    borderLeft="2px solid"
                    borderColor="gray.200"
                  >
                    {project.description}
                  </Text>
                  
                  <HStack flexWrap="wrap" gap={2} pl={4}>
                    {project.technologies.map((tech, techIndex) => (
                      <Tag
                        key={techIndex}
                        size="sm"
                        bg="blue.50"
                        color="blue.700"
                        borderRadius="full"
                        fontSize="xs"
                        fontFamily="mono"
                        border="1px solid"
                        borderColor="blue.200"
                      >
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </VStack>
              </Box>
            ))}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects; 