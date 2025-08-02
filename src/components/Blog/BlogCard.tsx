import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Tag,
} from '@chakra-ui/react';
import { BlogCardProps } from '../../types';

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  readTime, 
  date, 
  tags, 
  onReadMore 
}) => {
  return (
    <Box
      as="article"
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
        aria-label={`Featured image for blog post: ${title}`}
      />
      
      <VStack p={4} align="stretch" gap={3}>
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="semibold"
          color="gray.800"
          lineHeight="tight"
        >
          {title}
        </Heading>
        
        <Text
          fontSize="sm"
          color="gray.600"
          lineHeight="short"
          noOfLines={3}
        >
          {description}
        </Text>
        
        <HStack gap={4} color="gray.500" fontSize="xs">
          <Text>{readTime}</Text>
          <Text>{date}</Text>
        </HStack>
        
        <HStack flexWrap="wrap" gap={1.5}>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              size="sm"
              bg="gray.200"
              color="gray.700"
              borderRadius="full"
              fontSize="xs"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
        
        <Button
          variant="ghost"
          color="orange.500"
          size="sm"
          onClick={onReadMore}
          aria-label={`Read more about ${title}`}
          alignSelf="flex-start"
          p={0}
          h="auto"
          minH="auto"
          _hover={{ color: 'orange.600' }}
        >
          Read More →
        </Button>
      </VStack>
    </Box>
  );
};

export default BlogCard; 