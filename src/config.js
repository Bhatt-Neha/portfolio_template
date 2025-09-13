export const config = {
  name: "Neha Bhatt",
  // Contact Information
  contact: {
    email: "nehabhatt2001@gmail.com",
    linkedin: "neha-bhatt-501691221",
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
        skills: ["React.js", "Next.js", "JavaScript/Typescript", "HTML5/CSS", "Redux"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express.js", " RESTful APIs", "MongoDB", "PostgreSQL"]
      },
      {
        name: "Other",
        skills: ["Git & GitHub", "AWS", "Agile Methodology", "Jira", "Client Communication"]
      }
    ]
  },


  // Projects Section
  projects: [
    {
      id: "cookeasy",
      title: "CookEasy",
      description: "CookEasy lets users book chefs by cuisine and time slot, explore recipes with advanced filtering, and receive instant booking confirmations. Users can also rate and review chefs for better recommendations. It's a seamless platform for personalized cooking experiences and discovering new recipes effortlessly.",
      image: "/images/cookeasy/image.png",
    },
    {
      id: "portfolio-template",
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
      description: `Implemented Next.js for SEO optimization and code-splitting, improving performance and discoverability.
Built PayPal payment integration, Twilio-based real-time SMS alerts, and interactive, role-based dashboards.
Worked on UI development and API integrations to deliver seamless end-to-end functionality.
Skilled in client interaction and communication, gathering requirements and providing timely updates.
Applied Agile methodologies, actively participating in sprint planning, daily stand-ups, and retrospectives.`,
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Paypal Integration", "postgresql", "AWS"]
    },
    {
      company: "Tech Holding",
      position: "Software Developer Intern",
      duration: "Jan 2023 - Apr 2023",
      description: `Developed an interactive dashboard to streamline onboarding and offboarding processes.
Integrated Harvest API to fetch and display user activity logs.
Implemented HOC functionality for reusable and maintainable components.
Collaborated with senior developers to implement best practices and participated in daily stand-ups.
Developed a software management system to enhance the new hire process.`,
      skills: ["React", "Next.js", "TypeScript/Javascript", "Node.js", "scss"]
    }
  ],


  // Certifications Section
  certifications: [
    {
      name: "SQL Fundamentals",
      issuer: " HackerRank",
      date: "2025",
      description: "Covering concepts of SQL, database design, and query optimization.",
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
      name: "AWS Certified Generative AI",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Advanced understanding of generative AI models and their implementation on AWS.",
    }
  ],
};
