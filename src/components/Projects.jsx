import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h1 className="section-title">PROJECTS</h1>
        <div className="title-underline"></div>
        <div className="description-container">
          <p className="section-description">
            Explore my portfolio of innovative projects, from personal ventures to internal projects created using my skills, each with detailed case studies showcasing the process and results
          </p>
        </div>
      </div>
      <div className="projects-grid">
        {config.projects.map((project) => (
          <div key={project.title} className="project-item">
            <div className="project-preview">
              <div className="laptop-mockup">
                <div className="screen">
                  <div className="viewport">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
                <div className="notch"></div>
                <div className="base"></div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link
                to={`/project/${project.id}`}
                className="case-study-btn"
              >
                CASE STUDY
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
