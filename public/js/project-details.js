// Project data
const projectsData = {
    'cookeasy': {
        
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

    'portfolio template': {
        title: 'Portfolio Template',
        description: `✨ Dynamic & Reusable: Easily customizable for different specializations.
✨ Config-Based Customization: Users can update their data through a config file.
✨ Responsive UI: Ensures seamless performance across all devices.
✨ Smooth Animations: Enhances user engagement with eye-catching effects.
✨ Customizable Sections: Modify and personalize portfolio content effortlessly.
✨ CSS-Powered Effects: Provides visually appealing transitions and designs`,
        technologies: [
            { name: 'javascript', icon: 'fab fa-js' },
            { name: 'html', icon: 'fab fa-html5' },
            { name: 'node.js', icon: 'fab fa-node' },
            { name: 'css', icon: 'fas fa-palette' },


        ],
        images: [
            '/images/portfolio_template/about.png',
            '/images/portfolio_template/skills.png',
            '/images/portfolio_template/project.png',
            '/images/portfolio_template/work.png',
            '/images/portfolio_template/project.png',
            '/images/portfolio_template/Certificate.png',


        ],
        githubLink: "https://github.com/Bhatt-Neha/portfolio_template"
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
    document.title = `${project.title} - Neha Bhatt`;

    // Update project title
    document.querySelector('.project-title').textContent = project.title;

    // Load images into slider
    const imageSlider = document.querySelector('.image-slider');
    imageSlider.innerHTML = project.images
        .map(img => `<img src="${img}" alt="Project screenshot">`)
        .join('');
    
    // Update description with new line formatting
    const descriptionContainer = document.querySelector('.project-description');
    const formattedDescription = project.description
        .split('\n')
        .map(line => {
            const [boldPart, ...rest] = line.split(':');
            const normalPart = rest.join(':').trim(); // in case ':' appears more than once
            return `<p><strong>${boldPart}:</strong> ${normalPart}</p>`;
        })
        .join('');
    descriptionContainer.innerHTML = formattedDescription;
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