const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('certificateImage');
const modalPDF = document.getElementById('certificatePDF');


// Function to update the page title
function updateTitle() {
    document.title = `${config.name} - Portfolio`;
}

// Function to handle smooth scrolling
function handleScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to update navigation
function updateNavigation() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.innerHTML = config.navItems
        .map(item => `<a href="#${item.id}">${item.label}</a>`)
        .join('');
    handleScroll();
}

// Function to update hero section
function updateHero() {
    const hero = config.hero;
    document.querySelector('.typing-text').textContent = hero.greeting;
    document.querySelector('.main-title').textContent = hero.name;
    document.querySelector('.subtitle').textContent = hero.title;
    
    // Update contact chips
    const contactChips = document.querySelector('.contact-chips');
    contactChips.innerHTML = `
        <a href="mailto:${config.contact.email}" class="contact-chip">
            <i class="fas fa-envelope"></i>
            <span>${config.contact.email}</span>
        </a>
        <a href="${config.contact.linkedin}" class="contact-chip">
            <i class="fab fa-linkedin"></i>
            <span>${config.contact.linkedin.split('/').pop()}</span>
        </a>
    `;

    // Add scroll functionality to the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const expertiseSection = document.querySelector('#expertise');
            if (expertiseSection) {
                expertiseSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Function to update skills section
function updateSkills() {
    const skillsSection = document.querySelector('#expertise');
    if (!skillsSection) return;


    skillsSection.innerHTML = `
        <div class="section-header">
            <h1 class="section-title">SKILLS</h1>
            <div class="title-underline"></div>
            <div class="description-container">
                <p class="section-description">
                    Here are my technical skills and areas of expertise that I've developed over the years
                </p>
            </div>
        </div>
        <div class="skills-container">
            ${config.skills.categories.map((category, index) => `
                <div class="skill-category ${category.name.toLowerCase()}" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="skill-header">
                        <span class="skill-icon">
                            <i class="${getSkillIcon(category.name)}"></i>
                        </span>
                        <h3>${category.name} Development</h3>
                    </div>
                    <ul class="skill-list">
                        ${category.skills.map(skill => `
                            <li><i class="${getSkillIcon(skill)}"></i> ${skill}</li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;

    // Initialize AOS after rendering
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
}

// Function to update projects section
function updateProjects() {
    const projectsSection = document.querySelector('#projects');
    if (!projectsSection) return;

    projectsSection.innerHTML = `
        <div class="section-header">
            <h1 class="section-title">PROJECTS</h1>
            <div class="title-underline"></div>
            <div class="description-container">
                <p class="section-description">
                    Explore my portfolio of innovative projects, from personal ventures to client collaborations, each with detailed case studies
                </p>
            </div>
        </div>
        <div class="projects-grid">
            ${config.projects.map(project => `
                <div class="project-item">
                    <div class="project-preview">
                        <div class="laptop-mockup">
                            <div class="screen">
                                <div class="viewport">
                                    <img src="${project.image}" alt="${project.title}">
                                </div>
                            </div>
                            <div class="notch"></div>
                            <div class="base"></div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <a href="project-details.html?id=${project.title.toLowerCase()}" class="case-study-btn">CASE STUDY</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Function to update experience section
function updateExperience() {
    const experienceSection = document.querySelector('#work');
    if (!experienceSection) return;

    experienceSection.innerHTML = `
        <h2 class="section-title">Work Experience</h2>
        <div class="title-underline"></div>
        <div class="work-container">
            ${config.experience.map((exp, index) => `
                <div class="work-item ${index === 0 ? 'expanded' : ''}">
                    <div class="work-header">
                        <div class="work-title">
                            <h3>${exp.position} @ ${exp.company}</h3>
                            <span class="work-duration">${exp.duration}</span>
                        </div>
                        <button class="toggle-btn">${index === 0 ? '−' : '+'}</button>
                    </div>
                    <div class="work-details">
                        <div class="work-location">
                            <span class="location-icon">📍</span> ${exp.company}
                        </div>
                        <div class="work-description">
                            <ul>
                                ${exp.description.split('\n').map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="work-skills">
                            ${exp.skills ? exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('') : ''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners for work experience toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const workItem = btn.closest('.work-item');
            workItem.classList.toggle('expanded');
            btn.textContent = workItem.classList.contains('expanded') ? '−' : '+';
        });
    });
}

// Function to update certifications section
function updateCertifications() {
    const certificationsSection = document.querySelector('#certifications');
    if (!certificationsSection) return;

    certificationsSection.innerHTML = `
        <div class="section-header">
            <h1 class="section-title">CERTIFICATIONS</h1>
            <div class="title-underline"></div>
        </div>
        <div class="certifications-grid">
            ${config.certifications.map(cert => `
                <div class="certification-card" onclick="openCertificateModal('${cert.name}')" data-certificate="${cert.name.toLowerCase().replace(/\s+/g, '-')}">
                    <div class="certification-content">
                        <h3 class="certification-title">${cert.name}</h3>
                        <div class="certification-issuer">
                            <i class="${getCertificationIcon(cert.issuer)}"></i>
                            ${cert.issuer}
                        </div>
                        <div class="certification-description">
                            ${cert.description}
                        </div>
                        <div class="certification-date">
                            <i class="far fa-calendar-alt"></i>
                            Issued: ${cert.date}
                        </div>
                    </div>
                    <div class="certification-icon">
                        <i class="${getCertificationIcon(cert.issuer)}"></i>
                    </div>
                    <button class="view-certificate-btn">Click to View</button>
                </div>
            `).join('')}
        </div>
    `;
}



function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            if (modalImage) modalImage.src = '';
            if (modalPDF) modalPDF.src = '';
        }, 300);
        document.body.style.overflow = '';
    }
}
// Function to open certificate modal
function openCertificateModal(certificateName) {
    const certificate = config.certifications.find(cert => cert.name === certificateName);
    if (!certificate) return;



    // Get certificate file info based on certificate name
    const certificateId = certificate.name.toLowerCase().replace(/\s+/g, '-');
    const certificateFile = {
        path: `/images/certificates/${certificateId}.jpeg`,
        type: 'image/jpeg/png'
    };

    if (certificateFile) {
        if (certificateFile.type === 'pdf') {
            modalImage.style.display = 'none';
            modalPDF.style.display = 'block';
            modalPDF.src = certificateFile.path;
        } else {
            modalPDF.style.display = 'none';
            modalImage.style.display = 'block';
            modalImage.src = certificateFile.path;
            modal.style.cursor='pointer'
        }
    }

    // Show modal
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';

    // Add event listeners for closing modal
    const closeBtn = document.querySelector('.modal-close');
    closeBtn.onclick = () => {
        closeModal();
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// Helper function to get skill icons
function getSkillIcon(skill) {
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
        'Good Communication': 'fas fa-comments'
    };
    return icons[skill] || 'fas fa-code';
}

// Helper function to get certification icons
function getCertificationIcon(issuer) {
    const icons = {
        'Amazon Web Services': 'fab fa-aws',
        'Microsoft': 'fab fa-microsoft',
        'Google': 'fab fa-google',
        'LinkedIn': 'fab fa-linkedin',
        'Simplilearn': 'fas fa-graduation-cap'
    };
    return icons[issuer] || 'fas fa-certificate';
}

// Initialize the template
function initializeTemplate() {
    updateTitle();
    updateNavigation();
    updateHero();
    updateSkills();
    updateProjects();
    updateExperience();
    updateCertifications();
}

// Load the configuration and initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load the config file
    const script = document.createElement('script');
    script.src = 'config.js';
    script.onload = initializeTemplate;
    document.head.appendChild(script);
}); 