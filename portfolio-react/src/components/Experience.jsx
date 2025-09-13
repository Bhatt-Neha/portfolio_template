import React, { useState } from 'react';
import { config } from '../config';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState([0]);

  const toggleExpanded = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <h1 className="section-title">Work Experience</h1>
        <div className="title-underline"></div>
      </div>
      <div className="work-container">
        {config.experience.map((exp, index) => (
          <div 
            key={index} 
            className={`work-item ${expandedItems.includes(index) ? 'expanded' : ''}`}
          >
            <div className="work-header" onClick={() => toggleExpanded(index)}>
              <div className="work-title">
                <h3>{exp.position} @ {exp.company}</h3>
                <span className="work-duration">{exp.duration}</span>
              </div>
              <button className="toggle-btn">
                {expandedItems.includes(index) ? '−' : '+'}
              </button>
            </div>
            <div className="work-details">
              <div className="work-location">
                <span className="location-icon">📍</span> {exp.company}
              </div>
              <div className="work-description">
                <ul>
                  {exp.description.split('\n').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="work-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
