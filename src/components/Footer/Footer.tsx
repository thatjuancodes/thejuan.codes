import React from 'react';
import { Service, SocialLink, ContactInfo } from '../../types';
import './Footer.css';

const Footer: React.FC = () => {
  const services: Service[] = [
    { id: 1, name: 'AI Agent Development', href: '#' },
    { id: 2, name: 'Machine Learning Solutions', href: '#' },
    { id: 3, name: 'Process Automation', href: '#' },
    { id: 4, name: 'AI Strategy Consulting', href: '#' }
  ];

  const socialLinks: SocialLink[] = [
    { id: 1, name: 'LinkedIn', href: '#', icon: 'ri-linkedin-line' },
    { id: 2, name: 'GitHub', href: '#', icon: 'ri-github-line' },
    { id: 3, name: 'Twitter', href: '#', icon: 'ri-twitter-line' }
  ];

  const contactInfo: ContactInfo[] = [
    { id: 1, type: 'email', value: 'jm.alvarez@example.com', icon: 'ri-mail-line' },
    { id: 2, type: 'phone', value: '+1 (555) 123-4567', icon: 'ri-phone-line' },
    { id: 3, type: 'location', value: 'San Francisco, CA', icon: 'ri-map-pin-line' }
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__brand-title">
              JM Alvarez
            </h3>
            
            <p className="footer__brand-description">
              Designing AI tools so humans can do more human things. Let's build
              the future of intelligent automation together.
            </p>
            
            <div className="footer__social">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="footer__social-link"
                  aria-label={`Visit ${link.name} profile`}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer__services">
            <h4 className="footer__section-title">Services</h4>
            
            <ul className="footer__services-list">
              {services.map((service) => (
                <li key={service.id}>
                  <a 
                    href={service.href} 
                    className="footer__services-link"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer__contact">
            <h4 className="footer__section-title">Get In Touch</h4>
            
            <div className="footer__contact-info">
              {contactInfo.map((contact) => (
                <div key={contact.id} className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <i className={contact.icon} />
                  </div>
                  <span className="footer__contact-value">{contact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2024 JM Alvarez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 