import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Height of the landing section
      
      // Show navbar when scrolled past the landing section
      setIsVisible(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      as="nav"
      bg="gray.800"
      color="white"
      py={6}
      px={12}
      position="fixed"
      width="100%"
      top={0}
      zIndex={50}
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease-in-out"
      opacity={isVisible ? 1 : 0}
    >
      <Container maxW="6xl">
        <Flex justify="space-between" align="center">
          <Text
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="tight"
          >
            JM Alvarez
          </Text>
          
          <Flex gap={4}>
            <Button
              variant="ghost"
              color="white"
              textTransform="uppercase"
              _hover={{ color: 'orange.400' }}
              onClick={() => scrollToSection('projects')}
              aria-label="Navigate to Projects section"
            >
              Projects
            </Button>
            
            <Button
              variant="ghost"
              color="white"
              textTransform="uppercase"
              _hover={{ color: 'orange.400' }}
              onClick={() => scrollToSection('testimonials')}
              aria-label="Navigate to Testimonials section"
            >
              Testimonials
            </Button>
            
            <Button
              variant="ghost"
              color="white"
              textTransform="uppercase"
              _hover={{ color: 'orange.400' }}
              onClick={() => scrollToSection('blog')}
              aria-label="Navigate to Blog section"
            >
              Blog
            </Button>
            
            <Button
              variant="ghost"
              color="white"
              textTransform="uppercase"
              _hover={{ color: 'orange.400' }}
              onClick={() => scrollToSection('contact')}
              aria-label="Navigate to Contact section"
            >
              Contact
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation; 