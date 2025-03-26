const config = {
    name: "Your name",
     // Contact Information
     contact: {
        email: "your.email@example.com",
        linkedin: "your-linkedin-profile",
        github: "your-github-profile"
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
        name: "YOUR_NAME",
        title: "JOB_TITLE",
        description: "A passionate developer creating amazing web experiences"
    },

    // Skills Section
    skills: {
        title: "Skills",
        categories: [
            {
                name: "Frontend",
                skills: ["skill1", "skill2", "skill3", "skill4", "skill5"]
            },
            {
                name: "Backend",
                skills: ["skill1", "skill2", "skill3", "skill4", "skill5"]
            },
            {
                name: "Other",
                skills: ["skill1", "skill2", "skill3", "skill4", "skill5"]
            }
        ]
    },

    // Projects Section
    projects: [
        {
            title: "Project 1",
            description: "Description of your first project",
            image: "images/project1.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "Project 2",
            description: "Description of your second project",
            image: "images/project2.jpg",
            technologies: ["Next.js", "TypeScript", "PostgreSQL"],
            link: "https://github.com/yourusername/project2"
        }
    ],

    // Experience Section
    experience: [
        {
            company: "Company Name",
            position: "Position Title",
            duration: "Year - Present",
            description: `• Achievement 1
• Achievement 2
• Achievement 3`,
            skills: ["Skill 1", "Skill 2", "Skill 3"]
        },
        {
            company: "Previous Company",
            position: "Previous Position",
            duration: "Year - Year",
            description: `• Achievement 1
• Achievement 2
• Achievement 3`,
            skills: ["Skill 1", "Skill 2", "Skill 3"]
        }
    ],

    // Certifications Section
    certifications: [
        {
            name: "Certification Name",
            issuer: "Issuing Organization",
            date: "Year",
            description: "Description of the certification and its significance",
            link: "https://example.com/certification"
        },
        {
            name: "Another Certification",
            issuer: "Another Organization",
            date: "Year",
            description: "Description of the certification and its significance",
            link: "https://example.com/another-certification"
        }
    ],
};

// Export the configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} 