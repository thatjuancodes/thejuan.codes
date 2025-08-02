import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Intelligent Customer Support Agent',
      description: 'An AI-powered customer service agent that handles 90% of inquiries automatically while maintaining human-like conversations.',
      imageUrl: 'https://readdy.ai/api/search-image?query=Modern%20AI%20chatbot%20interface%20with%20clean%20design%20showing%20conversation%20bubbles%20and%20smart%20responses%2C%20professional%20dashboard%20with%20blue%20and%20green%20accents%20on%20white%20background%2C%20user-friendly%20AI%20assistant%20application&width=400&height=300&seq=project1&orientation=landscape',
      technologies: ['Python', 'OpenAI', 'FastAPI']
    },
    {
      id: 2,
      title: 'Predictive Analytics Platform',
      description: 'A machine learning platform that predicts market trends and customer behavior with 95% accuracy for enterprise clients.',
      imageUrl: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20charts%20graphs%20and%20AI%20insights%20visualization%2C%20modern%20business%20intelligence%20interface%20with%20dark%20theme%20and%20colorful%20data%20representations%2C%20professional%20analytics%20platform&width=400&height=300&seq=project2&orientation=landscape',
      technologies: ['TensorFlow', 'React', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Autonomous Workflow Orchestrator',
      description: 'An AI agent system that automates complex business processes, reducing manual work by 80% across multiple departments.',
      imageUrl: 'https://readdy.ai/api/search-image?query=Automated%20workflow%20diagram%20with%20AI%20agents%20and%20process%20optimization%2C%20robotic%20process%20automation%20interface%20showing%20connected%20tasks%20and%20smart%20decision%20trees%2C%20enterprise%20automation%20platform&width=400&height=300&seq=project3&orientation=landscape',
      technologies: ['LangChain', 'Docker', 'Redis']
    }
  ];

  const handleViewDetails = (projectId: number): void => {
    // Handle project details view - could open modal or navigate to detail page
    console.log(`Viewing details for project ${projectId}`);
  };

  return (
    <Box
      as="section"
      id="projects"
      py={24}
      px={12}
      bg="gray.50"
    >
      <Container maxW="6xl">
        <VStack gap={16}>
          <Heading
            as="h2"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
            letterSpacing="tight"
            color="gray.800"
          >
            Featured Projects
          </Heading>
          
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            width="100%"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                onViewDetails={() => handleViewDetails(project.id)}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects; 