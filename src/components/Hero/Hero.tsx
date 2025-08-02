import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  VStack,
} from '@chakra-ui/react';

const Hero: React.FC = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [lastCompletedSlogan, setLastCompletedSlogan] = useState<string>('');

  const slogans = useMemo(() => [
    "Designing AI so that humans can do more human things",
    "Nomadically moving baby to different parts of the world...",
    "Mining public data to train Machines...",
    "Doing sketchy stuff on weekends...",
    "Parsing secret love letters online"
  ], []);

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

  // Keyboard event listener for Enter key
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleExploreClick();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      const currentSlogan = slogans[currentSloganIndex];
      if (displayedText.length < currentSlogan.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSlogan.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setLastCompletedSlogan(currentSlogan);
        }, 2000); // Pause at end of typing
      }
    } else {
      // Instead of deleting, just move to next slogan
      timeout = setTimeout(() => {
        // Add the last completed slogan to history when starting new line
        if (lastCompletedSlogan) {
          setCompletedLines(prev => {
            const newLines = [...prev, lastCompletedSlogan];
            return newLines.slice(-3); // Keep only last 3 lines
          });
        }
        
        // Check if we're at the last slogan
        const nextIndex = (currentSloganIndex + 1) % slogans.length;
        setCurrentSloganIndex(nextIndex);
        setDisplayedText(''); // Start fresh
        setIsTyping(true);
        setLastCompletedSlogan(''); // Clear the last completed slogan
      }, 1000); // Shorter pause before next slogan
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentSloganIndex, slogans, lastCompletedSlogan]);

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
        <Box textAlign="center" color="white">
          <Box
            mb={8}
            display="flex"
            justifyContent="center"
          >
            <Box
              width={{ base: '150px', md: '200px' }}
              height={{ base: '150px', md: '200px' }}
              borderRadius="full"
              overflow="hidden"
              border="3px solid"
              borderColor="white"
            >
              <Image
                src="/profile.jpeg"
                alt="JM Alvarez - AI/Agentic Engineer"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          </Box>
          
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="semibold"
            letterSpacing="tight"
            mb={2}
          >
            JM Alvarez
          </Heading>
          
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="white"
            opacity={0.8}
            fontWeight="light"
            mb={16}
          >
            AI/Agentic Engineer
          </Text>
          
          <Box
            mb={32}
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Box
              width={{ base: '300px', md: '700px' }}
              height={{ base: '120px', md: '180px' }}
              fontFamily="mono"
              fontSize={{ base: 'xs', md: 'md' }}
              color="green.400"
              bg="black"
              px={4}
              py={3}
              borderRadius="md"
              border="1px solid"
              borderColor="green.400"
              overflow="hidden"
            >
              <VStack align="stretch" spacing={1} height="100%" justify="flex-start">
                {/* Show last 3 completed lines with varying opacity */}
                {completedLines.map((line, index) => {
                  const opacity = 0.5 + (index * 0.2); // 0.5, 0.7, 0.9
                  return (
                    <Text 
                      key={index} 
                      color="gray.500" 
                      fontSize="inherit" 
                      textAlign="left" 
                      opacity={opacity}
                    >
                      $ {line}
                    </Text>
                  );
                })}
                
                {/* Current typing line */}
                <Box display="flex" alignItems="center" textAlign="left">
                  <Text as="span" color="gray.400" mr={2}>
                    $ 
                  </Text>
                  <Text as="span" color="white">
                    {displayedText}
                  </Text>
                  <Box
                    as="span"
                    width="2px"
                    height="1.2em"
                    bg="green.400"
                    ml={1}
                    animation="blink 1s infinite"
                    sx={{
                      '@keyframes blink': {
                        '0%, 50%': { opacity: 1 },
                        '51%, 100%': { opacity: 0 },
                      },
                    }}
                  />
                </Box>
              </VStack>
            </Box>
            
            {/* CTA Button positioned at bottom right of terminal */}
            <Button
              size="sm"
              onClick={handleExploreClick}
              aria-label="Explore my work and projects"
              px={4}
              py={2}
              borderRadius="md"
              fontWeight="medium"
              fontSize="sm"
              position="absolute"
              bottom={-12}
              right={0}
              overflow="hidden"
              bg="transparent"
              color="white"
              border="2px solid"
              borderColor="orange.400"
              animation="bounce 2s ease-in-out infinite"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                transition: 'left 0.5s',
                zIndex: 1,
              }}
              _hover={{
                bg: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff8c42)',
                borderColor: 'transparent',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 25px rgba(255, 107, 53, 0.3)',
                animation: 'none',
                _before: {
                  left: '100%',
                },
              }}
              _active={{
                transform: 'translateY(0)',
              }}
              transition="all 0.3s ease"
              sx={{
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '40%': {
                    transform: 'translateY(-8px)',
                  },
                  '60%': {
                    transform: 'translateY(-4px)',
                  },
                },
              }}
            >
              <Text position="relative" zIndex={2}>
                What I've done so far <i className="ri-arrow-right-line" style={{ marginLeft: '4px' }}></i>
              </Text>
            </Button>

            {/* Text hint positioned at bottom left of terminal */}
            <Text
              position="absolute"
              bottom={-10}
              left={0}
              fontSize="md"
              color="gray.500"
              opacity={0.7}
              fontStyle="italic"
              animation="fadeInOut 3s ease-in-out infinite"
              sx={{
                '@keyframes fadeInOut': {
                  '0%, 100%': { opacity: 0.3 },
                  '50%': { opacity: 0.7 },
                },
              }}
            >
              Hit enter key to explore...
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 