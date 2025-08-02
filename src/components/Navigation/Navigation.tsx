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
      bg="black"
      color="green.400"
      py={3}
      px={12}
      position="fixed"
      width="100%"
      top={0}
      zIndex={50}
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease-in-out"
      opacity={isVisible ? 1 : 0}
      borderBottom="1px solid"
      borderColor="green.400"
      fontFamily="mono"
    >
      <Container maxW="6xl">
        <Flex justify="space-between" align="center">
          <Text
            fontSize="lg"
            fontWeight="semibold"
            letterSpacing="tight"
            color="green.400"
          >
            $ jm_alvarez
          </Text>
          
          <Flex gap={6}>
            <Button
              variant="ghost"
              color="green.400"
              fontSize="sm"
              fontFamily="mono"
              _hover={{ 
                color: 'white'
              }}
              _active={{
                color: 'white'
              }}
              onClick={() => scrollToSection('projects')}
              aria-label="Navigate to Projects section"
            >
              ./projects
            </Button>
            
            <Button
              variant="ghost"
              color="green.400"
              fontSize="sm"
              fontFamily="mono"
              _hover={{ 
                color: 'white'
              }}
              _active={{
                color: 'white'
              }}
              onClick={() => scrollToSection('testimonials')}
              aria-label="Navigate to Testimonials section"
            >
              ./testimonials
            </Button>
            
            {/* <Button
              variant="ghost"
              color="green.400"
              fontSize="sm"
              fontFamily="mono"
              _hover={{ 
                color: 'white'
              }}
              _active={{
                color: 'white'
              }}
              onClick={() => scrollToSection('blog')}
              aria-label="Navigate to Blog section"
            >
              ./blog
            </Button>
            
            <Button
              variant="ghost"
              color="green.400"
              fontSize="sm"
              fontFamily="mono"
              _hover={{ 
                color: 'white'
              }}
              _active={{
                color: 'white'
              }}
              onClick={() => scrollToSection('contact')}
              aria-label="Navigate to Contact section"
            >
              ./contact
            </Button> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation; 