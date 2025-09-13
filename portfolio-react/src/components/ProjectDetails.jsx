import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectsData = {
  'project1': {
    id: 'project1',
    title: 'Project Title Here',
    description: `✨ Feature 1: Brief description of what this feature does.
✨ Feature 2: Highlight a unique functionality or benefit.
✨ Feature 3: Mention how this improves user experience.
✨ Feature 4: Showcase any special integration or API usage.
✨ Feature 5: Summarize why this project is valuable.`,
    technologies: [
      { name: 'Technology1', icon: 'fab fa-react' }, // example icon
      { name: 'Technology2', icon: 'fab fa-node-js' },
      { name: 'Technology3', icon: 'fas fa-database' },
      { name: 'Technology4', icon: 'fas fa-palette' },
    ],
    images: [
      '/images/project-1/screenshot1.png',
      '/images/project-1/screenshot2.png',
      '/images/project-1/screenshot3.png',
    ],
    githubLink: ""
  },
  'project2': {
    id: 'project2',
    title: 'Another Project Title',
    description: `✨ Feature 1: Describe key functionality here.
✨ Feature 2: Explain a technical implementation briefly.
✨ Feature 3: Show how this project solves a problem.
✨ Feature 4: Describe user experience improvements.
✨ Feature 5: Mention scalability or reusability benefits.`,
    technologies: [
      { name: 'Technology1', icon: 'fab fa-js' },
      { name: 'Technology2', icon: 'fab fa-html5' },
      { name: 'Technology3', icon: 'fab fa-node' },
      { name: 'Technology4', icon: 'fas fa-palette' },
    ],
    images: [
      '/images/project-2/screenshot1.png',
      '/images/project-2/screenshot2.png',
      '/images/project-2/screenshot3.png',
    ],
    githubLink: ""
  },
};


const ProjectDetails = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
      document.title = `${projectsData[id].title} - Neha Bhatt`;
    } else {
      // Redirect to home if project not found
      window.location.href = '/#projects';
    }
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (project) {
        setCurrentSlide((prev) => (prev + 1) % project.images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  const nextSlide = () => {
    if (project) {
      setCurrentSlide((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevSlide = () => {
    if (project) {
      setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  const formattedDescription = project.description
    .split('\n')
    .map((line, index) => {
      const [boldPart, ...rest] = line.split(':');
      const normalPart = rest.join(':').trim();
      return (
        <p key={index}>
          <strong>{boldPart}:</strong> {normalPart}
        </p>
      );
    });

  const projects = Object.keys(projectsData);
  const currentIndex = projects.indexOf(id || '');
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="project-details-page">
      <div className="project-container">
        <Link to="/" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Projects
        </Link>

        <h1 className="project-title">{project.title}</h1>

        <div className="project-images">
          <div className="image-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {project.images.map((img, index) => (
              <img key={index} src={img} alt="Project screenshot" />
            ))}
          </div>
          <div className="slider-nav">
            <button className="prev-btn" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="project-info">
          <div className="info-section">
            <h2>Project Overview</h2>
            <div className="project-description">
              {formattedDescription}
            </div>
          </div>

          <div className="info-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  <i className={tech.icon}></i>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="project-links">
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="project-link github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {nextProject && (
        <div id="nextProjectNav">
          <Link to={`/project/${nextProject}`} className="next-project-nav">
            <span className="next-project-label">Next Project</span>
            <div className="next-project-title">{projectsData[nextProject].title}</div>
            <div className="navigation-arrows">
              <div className="nav-arrow">
                <i className="fas fa-arrow-left"></i>
              </div>
              <div className="nav-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        </div>
      )}
    </main>
  );
};

export default ProjectDetails;
