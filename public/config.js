const config = {
    name: "Neha Bhatt",
    // Contact Information
    contact: {
        email: "nehabhatt2001@gmail.com",
        linkedin: "https://www.linkedin.com/in/neha-bhatt-501691221",
        github: "https://github.com/Bhatt-Neha"
    },
    // Navigation
    navItems: [
        { id: "home", label: "01 // About Me" },
        { id: "expertise", label: "02 // Skills" },
        { id: "projects", label: "03 // Projects" },
        { id: "work", label: "04 // Experience" },
        { id: "certifications", label: "05 // Certifications" }
    ],

    // Hero Section
    hero: {
        greeting: "Hi 🙋🏻‍♀️, I am",
        name: "Neha Bhatt",
        title: "Full Stack Software Engineer",
        description: "A passionate developer creating amazing web experiences"
    },

    // Skills Section
    skills: {
        title: "Skills",
        categories: [
            {
                name: "Frontend",
                skills: ["React.js", "JavaScript/Typescript", "HTML & CSS", "Next.js", "Redux"]
            },
            {
                name: "Backend",
                skills: ["Node.js", "Express.js", " RESTful APIs", "MongoDB", "PostgreSQL"]
            },
            {
                name: "Other",
                skills: ["Git & GitHub", "AWS", "Agile Methodology", "Problem Solving", "Good Communication"]
            }
        ]
    },

    // Projects Section
    projects: [
        {
            title: "CookEasy",
            description: "CookEasy lets users book chefs by cuisine and time slot, explore recipes with advanced filtering, and receive instant booking confirmations. Users can also rate and review chefs for better recommendations. It’s a seamless platform for personalized cooking experiences and discovering new recipes effortlessly",
            image: "/images/cookeasy/image.png",
        },
        {
            title: "Portfolio Template",
            description: "Portfolio-Template is a dynamic and reusable template designed for users to create personalized portfolios based on their specialization. It features a fully responsive UI with eye-catching animations for an engaging experience. Users can seamlessly add their data, enhancing their portfolio with visually appealing effects powered by CSS.",
            image: "/images/portfolio_template/about.png",
        }
    ],

    // Experience Section
    experience: [
        {
            company: "Tech Holding",
            position: "Software Engineer",
            duration: "April 2023 - Present",
            description: `Developed dynamic web applications using Next.js and React, ensuring responsiveness and delivering an improved UI for enhanced user experience.
Integrated Contentful as a CMS to manage and deliver content dynamically and efficiently.
Applied Agile methodologies, actively participating in sprint planning, daily stand-ups, and retrospectives.
Utilized Confluence for comprehensive project documentation and streamlined collaboration across teams.`,
            skills: ["React", "Next.js", "TypeScript/Javascript", "Node.js", "css", "postgresql", "AWS"]
        },
        {
            company: "Tech Holding",
            position: "Software Developer Intern",
            duration: "Jan 2023 - Apr 2023",
            description: `Assisted in developing website features using HTML, CSS, and JavaScript, and applied React.js principles in real-world projects.
Collaborated with senior developers to implement best practices and participated in daily stand-ups.
Contributed to the design and development of an HR management system.
Developed a software management system to enhance the new hire process.`,
            skills: ["React", "Next.js", "TypeScript/Javascript", "Node.js", "css"]
        }
    ],

    // Certifications Section
    certifications: [
        {
            name: "AWS Certified Generative AI",
            issuer: "Amazon Web Services",
            date: "2023",
            description: "Advanced understanding of generative AI models and their implementation on AWS.",

        },
        {
            name: "AWS Certified Solutions Architect Associate",
            issuer: "Amazon Web Services",
            date: "2024",
            description: "Explored different AWS services and its usage",

        },
        {
            name: "AWS Certified AI Practioner",
            issuer: "Amazon Web Services",
            date: "2024",
            description: "Advanced understanding of generative AI models and their implementation on AWS.",

        },
        {
            name: "Microsoft Career Essentials",
            issuer: "Microsoft",
            date: "2024",
            description: "Professional development and technical skills for modern software development.",

        },

        {
            name: "Foundation in Machine Learning",
            issuer: " Simplilearn",
            date: "2024",
            description: "Core concepts of machine learning, algorithms, and practical applications.",

        },

    ],
};

// Export the configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} 