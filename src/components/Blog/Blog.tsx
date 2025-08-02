import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Tag,
  Image,
} from '@chakra-ui/react';
import { BlogPost } from '../../types';
import BlogCard from './BlogCard';

const Blog: React.FC = () => {
  const featuredPost: BlogPost = {
    id: 'featured',
    title: 'The Future of Agentic AI: Beyond Simple Automation',
    description: 'Exploring how autonomous AI agents are revolutionizing business processes by making intelligent decisions, adapting to changing conditions, and collaborating with human teams in unprecedented ways.',
    imageUrl: 'https://readdy.ai/api/search-image?query=Future%20of%20AI%20agents%20and%20autonomous%20systems%20concept%20illustration%20with%20robotic%20hands%20typing%20on%20futuristic%20keyboard%2C%20advanced%20artificial%20intelligence%20technology%20visualization%20with%20blue%20and%20green%20digital%20elements&width=600&height=400&seq=blog-featured&orientation=landscape',
    readTime: '8 min read',
    date: 'December 15, 2024',
    tags: ['AI Agents', 'Automation', 'Future Tech']
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Robust ML Pipelines for Production',
      description: 'Best practices for deploying machine learning models that scale, maintain accuracy, and handle real-world data challenges.',
      imageUrl: 'https://readdy.ai/api/search-image?query=Machine%20learning%20model%20training%20visualization%20with%20neural%20network%20diagrams%20and%20data%20flow%20charts%2C%20professional%20AI%20development%20environment%20with%20code%20and%20algorithms%20displayed%20on%20modern%20screens&width=400&height=300&seq=blog1&orientation=landscape',
      readTime: '6 min read',
      date: 'December 8, 2024',
      tags: ['Machine Learning', 'Production', 'Best Practices']
    },
    {
      id: 2,
      title: 'The Evolution of Conversational AI',
      description: 'How modern language models are creating more natural, context-aware interactions between humans and AI systems.',
      imageUrl: 'https://readdy.ai/api/search-image?query=Natural%20language%20processing%20and%20conversational%20AI%20interface%20showing%20chat%20bubbles%20and%20language%20understanding%20algorithms%2C%20modern%20NLP%20technology%20with%20text%20analysis%20and%20semantic%20processing%20visualization&width=400&height=300&seq=blog2&orientation=landscape',
      readTime: '5 min read',
      date: 'November 28, 2024',
      tags: ['NLP', 'Conversational AI', 'Language Models']
    },
    {
      id: 3,
      title: 'Ethical AI Development: A Practical Guide',
      description: 'Implementing responsible AI practices that ensure fairness, transparency, and accountability in automated systems.',
      imageUrl: 'https://readdy.ai/api/search-image?query=AI%20ethics%20and%20responsible%20artificial%20intelligence%20concept%20with%20balanced%20scales%20and%20human-AI%20collaboration%20symbols%2C%20professional%20illustration%20showing%20ethical%20considerations%20in%20AI%20development&width=400&height=300&seq=blog3&orientation=landscape',
      readTime: '7 min read',
      date: 'November 15, 2024',
      tags: ['AI Ethics', 'Responsible AI', 'Transparency']
    }
  ];

  const handleReadMore = (postId: number | string): void => {
    // Handle blog post navigation - could open modal or navigate to detail page
    console.log(`Reading blog post ${postId}`);
  };

  return (
    <Box
      as="section"
      id="blog"
      py={24}
      px={12}
      bg="white"
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
            Latest Blog Posts
          </Heading>
          
          {/* Featured Post */}
          <Box
            bg="gray.50"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            width="100%"
          >
            <Box
              display={{ base: 'block', lg: 'flex' }}
              alignItems="stretch"
            >
              <Box
                flex="1"
                h={{ base: '48', lg: 'auto' }}
                bgImage={`url(${featuredPost.imageUrl})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                role="img"
                aria-label={`Featured image for blog post: ${featuredPost.title}`}
              />
              
              <Box
                flex="1"
                p={8}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <VStack align="stretch" gap={4}>
                  <Heading
                    as="h3"
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="gray.800"
                    lineHeight="tight"
                  >
                    {featuredPost.title}
                  </Heading>
                  
                  <Text
                    fontSize="md"
                    color="gray.600"
                    lineHeight="relaxed"
                  >
                    {featuredPost.description}
                  </Text>
                  
                  <HStack gap={4} color="gray.500" fontSize="sm">
                    <Text>{featuredPost.readTime}</Text>
                    <Text>{featuredPost.date}</Text>
                  </HStack>
                  
                  <HStack flexWrap="wrap" gap={2}>
                    {featuredPost.tags.map((tag, index) => (
                      <Tag
                        key={index}
                        size="sm"
                        bg="orange.100"
                        color="orange.700"
                        borderRadius="full"
                      >
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                </VStack>
                
                <Button
                  variant="ghost"
                  color="orange.500"
                  alignSelf="flex-start"
                  mt={4}
                  onClick={() => handleReadMore(featuredPost.id)}
                  aria-label={`Read more about ${featuredPost.title}`}
                  _hover={{ color: 'orange.600' }}
                >
                  Read More →
                </Button>
              </Box>
            </Box>
          </Box>
          
          {/* Blog Posts Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            width="100%"
          >
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                readTime={post.readTime}
                date={post.date}
                tags={post.tags}
                onReadMore={() => handleReadMore(post.id)}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog; 