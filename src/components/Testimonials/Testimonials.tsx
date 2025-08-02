import React, { useState, useEffect } from 'react';
import { Testimonial } from '../../types';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "JM's AI solutions transformed our customer service operations. The intelligent agent he built handles complex queries with remarkable accuracy, allowing our human team to focus on strategic initiatives.",
      author: "Sarah Chen",
      position: "VP of Operations",
      company: "TechFlow Solutions"
    },
    {
      id: 2,
      quote: "The predictive analytics platform JM developed gave us unprecedented insights into market trends. Our forecasting accuracy improved by 40%, directly impacting our bottom line.",
      author: "Michael Rodriguez",
      position: "Chief Data Officer",
      company: "MarketVision Inc"
    },
    {
      id: 3,
      quote: "Working with JM was exceptional. His deep understanding of AI and practical business applications resulted in a workflow automation system that saved us countless hours weekly.",
      author: "Emily Watson",
      position: "CEO",
      company: "Streamline Enterprises"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__wave-container">
        <svg
          className="testimonials__wave"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 70C240 30 480 90 720 50C960 30 1200 50 1440 70V100H0V70Z"
            fill="#F7F7F7"
            fillOpacity="0.2"
          />
          <path
            d="M0 50C240 90 480 30 720 70C960 50 1200 90 1440 50V100H0V50Z"
            fill="#F7F7F7"
          />
        </svg>
      </div>
      
      <div className="testimonials__container">
        <h2 className="testimonials__title">
          Client Testimonials
        </h2>
        
        <div className="testimonials__carousel">
          <div className="testimonials__carousel-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonials__slide ${
                  index === currentSlide ? 'testimonials__slide--active' : ''
                }`}
                aria-hidden={index !== currentSlide}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              </div>
            ))}
          </div>
          
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`testimonials__dot ${
                  index === currentSlide ? 'testimonials__dot--active' : ''
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 