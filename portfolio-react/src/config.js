export const config = {
    name: "Your Name Here", // Replace with your full name
  
  // Contact Information
  contact: {
    email: "your-email@example.com",
    linkedin: "Your LinkedIn Profile",
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
    name: "Your Name",
    title: "Your Job Title",
  },

  // Skills Section
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Frontend",
        skills: ["List frontend skills here (React.js, HTML, CSS, etc.)"]
      },
      {
        name: "Backend",
        skills: ["List backend skills here (Node.js, Express.js, Databases)"]
      },
      {
        name: "Other",
        skills: ["List other skills here (Git, AWS, Agile, etc.)"]
      }
    ]
  },

  // Projects Section
  projects: [
    {
      id: "project1",
      title: "Project Name",
      description: "Brief description of what this project does and what problem it solves.",
      image: "/images/your-project-image.png",
    },
    {
      id: "project2",
      title: "Another Project Name",
      description: "Brief description of this project, its features, and impact.",
      image: "/images/another-project-image.png",
    }
  ],

  // Experience Section
  experience: [
    {
      company: "Company Name",
      position: "Job Title",
      duration: "Start Date – End Date",
      description: `Describe your role, responsibilities, and achievements here.
Focus on results, tools used, and impact.`,
      skills: ["Relevant skills/technologies you used here"]
    },
    {
      company: "Company Name",
      position: "Internship Title",
      duration: "Start Date – End Date",
      description: `Describe what you worked on during this internship.
Include contributions and key learnings.`,
      skills: ["Skills used during internship"]
    }
  ],

  // Certifications Section
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuing Organization",
      date: "Year",
      description: "Short description of what this certification covers."
    },
    {
      name: "Another Certification",
      issuer: "Issuing Organization",
      date: "Year",
      description: "Short description of this certification."
    }
  ],
};
