import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  Button,
  VStack,
} from '@chakra-ui/react';
import { ProjectCardProps } from '../../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  technologies, 
  onViewDetails 
}) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'lg',
      }}
      shadow="sm"
    >
      <Box
        h="40"
        bgImage={`url(${imageUrl})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        role="img"
        aria-label={`Screenshot of ${title} project`}
      />
      
      <VStack p={4} align="stretch" gap={3}>
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="semibold"
          color="gray.800"
        >
          {title}
        </Heading>
        
        <Text
          fontSize="sm"
          color="gray.600"
          lineHeight="short"
          noOfLines={2}
        >
          {description}
        </Text>
        
        <HStack flexWrap="wrap" gap={1.5}>
          {technologies.map((tech, index) => (
            <Tag
              key={index}
              size="sm"
              bg="gray.200"
              color="gray.700"
              borderRadius="full"
              fontSize="xs"
            >
              {tech}
            </Tag>
          ))}
        </HStack>
        
        <Button
          variant="ghost"
          color="orange.500"
          size="sm"
          onClick={onViewDetails}
          aria-label={`View details for ${title} project`}
          alignSelf="flex-start"
          p={0}
          h="auto"
          minH="auto"
          _hover={{ color: 'orange.600' }}
        >
          View Details →
        </Button>
      </VStack>
    </Box>
  );
};

export default ProjectCard; 