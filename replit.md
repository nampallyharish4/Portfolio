# Nampally Harish Portfolio

## Overview
A personal portfolio website for Nampally Harish, built with Vite, React, TypeScript, and Tailwind CSS. The site showcases full-stack development work with sections for About, Skills, Projects, and Contact.

## Project Structure
- `/src` - Source code
  - `/components` - React components
  - `/contexts` - React context providers
  - `/hooks` - Custom React hooks
  - `/types` - TypeScript type definitions
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point
  - `index.css` - Global styles with Tailwind
- `/public` - Static assets
- `index.html` - HTML entry point

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React

## Development
Run the development server:
```bash
npm run dev
```
The app runs on port 5000.

## Build
Build for production:
```bash
npm run build
```
Output goes to the `dist` folder.

## Deployment
Configured for static deployment. The build command runs `npm run build` and serves from the `dist` directory.
