# Modern Portfolio Template

A clean, modern, and responsive portfolio template that you can easily customize with your own content. This template features a beautiful UI with smooth animations and a professional layout.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast loading and smooth animations
- 🎯 Easy to customize
- 📝 Sections for About, Skills, Projects, Experience, and Certifications
- 🔗 Social media integration
- 🖼️ Project showcase with images
- 📊 Skills categorization
- 📜 Experience timeline
- 🏆 Certifications showcase

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code recommended)
- A web browser

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio-template.git
```

2. Navigate to the project directory:
```bash
cd portfolio-template
```

3. Open `public/config.js` and customize your information:
```javascript
const config = {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    linkedin: "your-linkedin-profile",
    // ... customize other sections
};
```

4. Replace images in the `public/images` directory with your own images.

5. Start a local server to view your portfolio:
```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve public
```

6. Open your browser and visit `http://localhost:8080` to see your portfolio.

## Customization

### Content

All content can be customized in the `public/config.js` file. The file contains sections for:

- Personal Information
- Navigation
- Hero Section
- Skills
- Projects
- Experience
- Certifications
- Contact Information

### Styling

The template's styling can be customized in `public/css/style.css`. The main color scheme and other visual elements can be modified there.

### Images

1. Replace images in the `public/images` directory
2. Update image paths in the `config.js` file
3. Recommended image sizes:
   - Project thumbnails: 800x600px
   - Profile picture: 400x400px
   - Background images: 1920x1080px

## Project Structure

```
portfolio-template/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── template.js
│   │   └── project-details.js
│   ├── images/
│   ├── config.js
│   ├── index.html
│   ├── project-details.html
├── README.md
└── package.json
```

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- AOS (Animate On Scroll) for animations

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository. 