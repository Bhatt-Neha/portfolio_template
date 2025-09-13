# Portfolio Template - React Version

A modern, responsive portfolio template built with React, JavaScript, and SCSS. This is a conversion of the original HTML/CSS portfolio template to React while maintaining the exact same design and functionality.

## Features

- ✨ **Modern React Architecture**: Built with React 18, JavaScript, and Vite
- 🎨 **SCSS Styling**: Organized SCSS files with component-based styling
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🎭 **Smooth Animations**: CSS animations and transitions
- 🔧 **Configurable**: Easy to customize through JavaScript config file
- 🚀 **Fast Development**: Hot reload with Vite
- 📦 **Component-Based**: Modular React components
- 🎯 **JavaScript**: Simple and easy to understand codebase

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio-react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Updating Your Information

Edit the `src/config.js` file to update your personal information:

```javascript
export const config = {
  name: "Your Name",
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  },
  // ... other configuration
};
```

### Adding Projects

Add new projects to the `projects` array in `src/config.js`:

```javascript
projects: [
  {
    title: "Your Project",
    description: "Project description...",
    image: "/images/your-project/image.png",
  }
]
```

### Adding Certifications

Add certifications to the `certifications` array in `src/config.js`:

```javascript
certifications: [
  {
    name: "Your Certification",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Certification description...",
  }
]
```

## 🛠 Adding / Updating Project Details

Project details are stored in the `projectsData` object inside **ProjectDetails.jsx** (or your dedicated `data.js` file if you separated it).

Each project is added as an object with the following structure:

```js
const projectsData = {
  'project1': {
    id: 'project1', // unique ID (used in routing)
    title: 'Project Title Here', // project name shown on details page
    description: `✨ Feature 1: Describe main functionality
✨ Feature 2: Add another feature
✨ Feature 3: Explain technical highlights`, // use backticks for multiline
    technologies: [
      { name: 'React', icon: 'fab fa-react' }, // FontAwesome icon class
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Database', icon: 'fas fa-database' },
    ],
    images: [
      '/images/project-1/screenshot1.png',
      '/images/project-1/screenshot2.png',
      '/images/project-1/screenshot3.png',
    ],
    githubLink: "https://github.com/username/project-repo" // optional
  }
};

### Styling

- Main styles: `src/styles/main.scss`
- Component styles: `src/styles/components/`
- Variables: Defined in `:root` in `main.scss`

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── ProjectDetails.tsx
│   └── CertificateModal.tsx
├── styles/             # SCSS files
│   ├── main.scss
│   └── components/
│       ├── _navbar.scss
│       ├── _hero.scss
│       ├── _skills.scss
│       ├── _projects.scss
│       ├── _experience.scss
│       ├── _certifications.scss
│       ├── _modal.scss
│       └── _project-details.scss
├── config.js            # Configuration file
└── App.jsx             # Main App component
```

## Features Included

- **Hero Section**: Animated typing effect and floating elements
- **Skills Section**: Categorized skills with icons
- **Projects Section**: Project showcase with laptop mockups
- **Experience Section**: Expandable work experience timeline
- **Certifications Section**: Interactive certification cards with modal
- **Project Details**: Individual project pages with image sliders
- **Responsive Design**: Mobile-first responsive design
- **Smooth Scrolling**: Smooth navigation between sections
- **Modal System**: Certificate viewing modal

## Technologies Used

- **React 18**: Modern React with hooks
- **JavaScript**: Simple and easy to understand codebase
- **SCSS**: Enhanced CSS with variables and nesting
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

