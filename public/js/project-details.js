// Project data
const projectsData = {
    'project 1': {
        title: 'Project 1',
        description: 'Project 1 description',
        technologies: [
            { name: 'next.js', icon: 'fab fa-react' },
            { name: 'Node.js', icon: 'fab fa-node-js' },
            {name:'PostgreSQL', icon:'fas fa-database'},
            {name:'scss', icon:'fas fa-palette'},
               
        ],
        images: [
            '/images/logo.png',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',

        ],
        githubLink: 'https://github.com/username/project1'
    },

    'project 2': {
        title: 'Project 2',
        description: 'Project 2 description',
        technologies: [
            { name: 'next.js', icon: 'fab fa-react' },
            {name:'scss', icon:'fas fa-palette'},
               
        ],
        images: [
            '/images/logo.png',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',
            '/images/project2.jpg',

        ],
        githubLink: 'https://github.com/username/project2'
    },
};

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Image slider functionality
let currentSlide = 0;
const slider = document.querySelector('.image-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function updateSlider() {
    if (!slider) return;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    const numSlides = slider.children.length;
    currentSlide = (currentSlide + 1) % numSlides;
    updateSlider();
}

function prevSlide() {
    const numSlides = slider.children.length;
    currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    updateSlider();
}

// Load project details
function loadProjectDetails(projectId) {
    const project = projectsData[projectId];
    
    if (!project) {
        window.location.href = 'index.html#projects';
        return;
    }

    // Update page title
    document.title = `${project.title} - Name`;
    
    // Update project title
    document.querySelector('.project-title').textContent = project.title;
    
    // Load images into slider
    const imageSlider = document.querySelector('.image-slider');
    imageSlider.innerHTML = project.images
        .map(img => `<img src="${img}" alt="Project screenshot">`)
        .join('');
    
    // Update description
    document.querySelector('.project-description').textContent = project.description.replace(/\. /g, '.\n');
    
    // Update tech stack
    const techStack = document.querySelector('.tech-stack');
    techStack.innerHTML = project.technologies
        .map(tech => `
            <span class="tech-tag">
                <i class="${tech.icon}"></i>
                ${tech.name}
            </span>
        `).join('');
    
    // Update links
    document.querySelector('.github-link').href = project.githubLink;
    
    // Initialize slider
    updateSlider();
}

// Add event listeners
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Auto-advance slider
setInterval(nextSlide, 5000);

// Load project details when page loads
if (projectId) {
    loadProjectDetails(projectId);
} else {
    window.location.href = 'index.html#projects';
} 