import React from 'react';
import { config } from '../config';

const Skills = () => {
  const getSkillIcon = (skill) => {
    const icons = {
      'Frontend': 'fab fa-react',
      'Backend': 'fas fa-server',
      'Other': 'fas fa-tools',
      'React.js': 'fab fa-react',
      'JavaScript/Typescript': 'fab fa-js',
      'HTML & CSS': 'fab fa-html5',
      'Next.js': 'fas fa-n',
      'Redux': 'fab fa-react',
      'Node.js': 'fab fa-node-js',
      'Express.js': 'fas fa-server',
      'RESTful APIs': 'fas fa-code',
      'MongoDB': 'fas fa-database',
      'PostgreSQL': 'fas fa-database',
      'Git & GitHub': 'fab fa-git-alt',
      'CI/CD Pipelines': 'fas fa-code-branch',
      'Agile Methodology': 'fas fa-tasks',
      'Problem Solving': 'fas fa-lightbulb',
      'Good Communication': 'fas fa-comments',
      'AWS': 'fa-brands fa-aws'
    };
    return icons[skill] || 'fas fa-code';
  };

  return (
    <section id="expertise" className="skills-section">
      <div className="section-header">
        <h1 className="section-title">SKILLS</h1>
        <div className="title-underline"></div>
        <div className="description-container">
          <p className="section-description">
            Here are my technical skills and areas of expertise that I've developed over the years
          </p>
        </div>
      </div>
      <div className="skills-container">
        {config.skills && config.skills.categories ? (
          config.skills.categories.map((category, index) => (
            <div 
              key={category.name}
              className={`skill-category ${category.name.toLowerCase()}`}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="skill-header">
                <span className="skill-icon">
                  <i className={getSkillIcon(category.name)}></i>
                </span>
                <h3>{category.name} Development</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <i className={getSkillIcon(skill)}></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div>Loading skills...</div>
        )}
      </div>
    </section>
  );
};

export default Skills;
