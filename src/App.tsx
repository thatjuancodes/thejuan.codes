import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50">
        <Navigation />
        <Hero />
        <Projects />
        <Testimonials />
        {/* <Blog /> */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App; 