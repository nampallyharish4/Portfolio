# My Portfolio Website

This is a personal portfolio website built with React and TypeScript. It showcases my projects, skills, and contact information.

## Features

- Responsive design
- Animated sections and smooth scrolling
- Contact form with mailto functionality
- Downloadable resume
- Social media links

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
project-root/
│
├── public/ # Static files (served at root, e.g. resume PDF, favicon, etc.)
│ └── Nampally_Harish_Resume.pdf
│
├── src/ # Source code
│ ├── components/ # React components (About, Contact, Footer, Hero, etc.)
│ ├── hooks/ # Custom React hooks (e.g., useScrollEffect)
│ ├── contexts/ # React context providers (e.g., ThemeContext)
│ ├── Assets/ # Images, icons, and other static assets
│ ├── types/ # TypeScript type definitions
│ ├── index.css # Global styles
│ ├── main.tsx # App entry point
│ └── App.tsx # Main App component
│
├── index.html # HTML template
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── vite.config.ts # Vite configuration
└── README.md # Project documentation
```

## Customization

- Update your resume PDF in the `public` folder.
- Edit your social links and contact info in the relevant components.

## Deployment

This site is easily deployable to platforms like Netlify, Vercel, or GitHub Pages.  
**For Netlify:**

- Ensure your resume PDF is in the `public` folder and committed to your repository.
- After deployment, your resume will be downloadable from `https://your-site.netlify.app/Nampally_Harish_Resume.pdf`.

## License

This project is open source and available under the [MIT License](LICENSE).

Let me know if you want to add more sections (like About Me, Screenshots, or Technologies Used)!
