import React from 'react';
import { TestimonialCardProps } from '../../types';
import './TestimonialCard.css';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  position, 
  company 
}) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card__quote">
        "{quote}"
      </p>
      
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">
          <i className="ri-user-line testimonial-card__avatar-icon" />
        </div>
        
        <div className="testimonial-card__author-info">
          <p className="testimonial-card__author-name">
            {author}
          </p>
          <p className="testimonial-card__author-position">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 