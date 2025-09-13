import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectsData = {
  'cookeasy': {
    id: 'cookeasy',
    title: 'CookEasy',
    description: `✨ Chef Booking: Users can book chefs based on their preferred cuisines and time slots.
✨ Recipe Exploration: Users can discover and filter recipes based on their cuisine preferences.
✨ Instant Confirmation: Real-time email notifications are sent upon successful bookings.
✨ Ratings & Reviews: Users can rate and review chefs, making it easier for others to choose the best.
✨ Enhanced Experience: Ensures a seamless and user-friendly platform for personalized cooking and culinary exploration.`,
    technologies: [
      { name: 'next.js', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'scss', icon: 'fas fa-palette' },
    ],
    images: [
      '/images/cookeasy/home.png',
      '/images/cookeasy/register.png',
      '/images/cookeasy/login.png',
      '/images/cookeasy/recipe.png',
      '/images/cookeasy/chef.png',
      '/images/cookeasy/booking.png',
      '/images/cookeasy/confirmation.png',
      '/images/cookeasy/rating.png'
    ],
    githubLink: "https://github.com/Bhatt-Neha/Cookeasy"
  },
  'portfolio-template': {
    id: 'portfolio-template',
    title: 'Portfolio Template',
    description: `✨ Dynamic & Reusable: Easily customizable for different specializations.
✨ Config-Based Customization: Users can update their data through a config file.
✨ Responsive UI: Ensures seamless performance across all devices.
✨ Smooth Animations: Enhances user engagement with eye-catching effects.
✨ Customizable Sections: Modify and personalize portfolio content effortlessly.
✨ CSS-Powered Effects: Provides visually appealing transitions and designs`,
    technologies: [
      { name: 'react', icon: 'fab fa-react' },
      { name: 'javascript', icon: 'fab fa-js' },
      { name: 'scss', icon: 'fas fa-palette' },
    ],
    images: [
      '/images/portfolio_template/about.png',
      '/images/portfolio_template/skills.png',
      '/images/portfolio_template/project.png',
      '/images/portfolio_template/work.png',
      '/images/portfolio_template/project.png',
      '/images/portfolio_template/certificate.png',
    ],
    githubLink: "https://github.com/Bhatt-Neha/portfolio_template"
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
