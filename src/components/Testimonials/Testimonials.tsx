import React, { useState, useEffect } from 'react';
import { Testimonial } from '../../types';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "JM was an excellent software engineer for Fortcode. He helped expand the startup ideas for Fortcode and developed the mobile app and its APIs. Most of all, he is a very charismatic speaker where he can clearly communicate his thoughts to everyone in the room with ease and confidence.",
      author: "Kenneth Bastian",
      position: "CTO/Founder",
      company: "Fortcode Inc."
    },
    {
      id: 2,
      quote: "JM was a fantastic team lead for an outsourced engineering team. He communicated clearly between the team and product to ensure that each task was understood and completed within each sprint. JM thought through each issue or feature and asked great clarifying questions that would help his team complete their work in a timely manner. In the event that there was a need for urgent fixes or an extra hand on projects, JM was first to dive in and go the extra mile to ensure that our customers were taken care of. He has a true passion for building and maintaining a product to help customers. He puts in extra effort to truly understand how each feature or bug affects a customer. I enjoyed working with JM and appreciated his strong communication and time management skills.",
      author: "Samantha Lawson",
      position: "Project Manager",
      company: "AgencyMVP"
    },
    {
      id: 3,
      quote: "JM is an excellent engineer and a fantastic team leader and mentor. I could always count on him to keep things running smoothly, whether that was through helping on project management and design, assisting other developers to help them with their tasks, or by rolling up his sleeves and pitching in to get tasks finished. He always asks the right questions and finds a way to deliver a solution. It was a pleasure working with him.",
      author: "Stephen Weil",
      position: "CTO",
      company: "AgencyMVP"
    },
    {
      id: 4,
      quote: "I had the opportunity to work with JM when we worked in the same team at Fortcode, Inc. He's a passionate developer with an exceptional understanding of modern technologies. He's also a natural leader who knows how to bring the best out of his teammates. Whenever our team encountered an issue, he always had a number of smart ideas lined up to resolve it. I'd say it's quite rare to find a person with JM's level of dedication and positive energy. Any developer would be more than lucky to have him as a teammate.",
      author: "Rio Sevilla",
      position: "Frontend Developer",
      company: "Fortcode Inc."
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