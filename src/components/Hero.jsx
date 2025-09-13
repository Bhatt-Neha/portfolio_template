import React from 'react';
import { config } from '../config';

const Hero = () => {
  const handleScrollToExpertise = () => {
    const element = document.getElementById('expertise');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="floating-elements">
        <div className="floating-cube"></div>
        <div className="floating-cube"></div>
        <div className="floating-cube"></div>
      </div>
      <div className="hero-content">
        <h1 className="typing-text">{config.hero.greeting}</h1>
        <h2 className="main-title">{config.hero.name}</h2>
        <h5 className="subtitle">{config.hero.title}</h5>
        <div className="contact-chips">
          <a href={`mailto:${config.contact.email}`} className="contact-chip">
            <i className="fas fa-envelope"></i>
            <span>{config.contact.email}</span>
          </a>
          <a href={`https://www.linkedin.com/in/${config.contact.linkedin}`} className="contact-chip">
            <i className="fab fa-linkedin"></i>
            <span>{config.contact.linkedin}</span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator" onClick={handleScrollToExpertise}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
