import React from 'react';
import { Service, SocialLink, ContactInfo } from '../../types';
import './Footer.css';

const Footer: React.FC = () => {
  const services: Service[] = [
    { id: 1, name: 'Website Creation', href: '#projects' },
    { id: 2, name: 'AI Automations', href: '#projects' },
    { id: 3, name: 'Tech Consultancy', href: '#testimonials' },
    { id: 4, name: 'Pinch Drummer', href: '#' }
  ];

  const socialLinks: SocialLink[] = [
    { id: 1, name: 'LinkedIn', href: 'https://www.linkedin.com/in/juanmiguelalvarezcodes/', icon: 'ri-linkedin-line' },
    { id: 2, name: 'GitHub', href: 'https://github.com/thatjuancodes', icon: 'ri-github-line' }
  ];

  const contactInfo: ContactInfo[] = [
    { id: 1, type: 'email', value: 'thejuan.codes@gmail.com', icon: 'ri-mail-line' },
    { id: 2, type: 'location', value: 'Nomadically moving around the world', icon: 'ri-map-pin-line' }
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