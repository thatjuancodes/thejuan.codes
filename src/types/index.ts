// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

// Testimonial types
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

// Blog post types
export interface BlogPost {
  id: number | string;
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  date: string;
  tags: string[];
}

// Service types
export interface Service {
  id: number;
  name: string;
  href: string;
}

// Social link types
export interface SocialLink {
  id: number;
  name: string;
  href: string;
  icon: string;
}

// Contact info types
export interface ContactInfo {
  id: number;
  type: 'email' | 'phone' | 'location';
  value: string;
  icon: string;
}

// Component prop types
export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  onViewDetails: () => void;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  date: string;
  tags: string[];
  onReadMore: () => void;
} 