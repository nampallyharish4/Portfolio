# Nampally Harish Portfolio

## Overview
A personal portfolio website for Nampally Harish, built with Vite, React, TypeScript, and Tailwind CSS. Features an immersive 3D experience with realistic depth, lighting, shadows, and interactive hover effects.

## Recent Changes (January 2026)
- Implemented 3D card tilt effects with mouse tracking
- Added glassmorphism and neumorphic material surfaces
- Enhanced CSS with realistic lighting, shadows, and depth
- Added parallax effects with mouse movement
- Implemented prefers-reduced-motion accessibility support
- Added RAF-throttled animations for performance

## Project Structure
- `/src` - Source code
  - `/components` - React components
    - `Card3D.tsx` - 3D interactive card component with tilt effects
    - `Hero.tsx` - Hero section with parallax layers
    - `About.tsx`, `Projects.tsx`, `TechnicalSkills.tsx`, `Contact.tsx` - Main sections
    - `Navigation.tsx`, `Footer.tsx` - Layout components
    - `ScrollReveal.tsx` - Scroll animation wrapper
  - `/contexts` - React context providers (Theme)
  - `/hooks` - Custom React hooks
    - `use3DEffect.ts` - 3D tilt, mouse position, and parallax hooks
    - `useScrollEffect.ts` - Scroll-related hooks
  - `/types` - TypeScript type definitions
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point
  - `index.css` - Global styles with Tailwind and 3D effects
- `/public` - Static assets including profile image
- `index.html` - HTML entry point

## 3D Features
- **Card3D Component**: Interactive 3D tilt on hover with glare effect
- **Parallax Layers**: Mouse-responsive background elements in Hero
- **Glassmorphism**: Layered glass-like surfaces with blur and transparency
- **Neumorphism**: Soft plastic/matte surfaces with inner shadows
- **Depth Shadows**: Multi-layer shadows for realistic elevation
- **Reduced Motion**: Full accessibility support for users who prefer reduced motion

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3.4 with custom 3D utilities
- **Icons**: Lucide React
- **Animations**: CSS transforms with RAF throttling

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

## User Preferences
- Professional, minimal aesthetic suitable for software engineer portfolio
- Emphasis on readability, performance, and accessibility
- GPU-accelerated effects with prefers-reduced-motion support
