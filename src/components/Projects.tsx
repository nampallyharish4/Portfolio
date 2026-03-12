import React, { useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Project } from '../types';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: (Project & { impact: string })[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Built a full-stack e-commerce solution handling 500+ products with Stripe payment processing, reducing checkout abandonment by 25% through optimized UX flows.',
      impact: 'Reduced checkout drop-off by 25%',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      category: 'Full-Stack',
      status: 'Completed',
      duration: '3 months',
      team: '4 developers',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Designed and shipped a real-time collaborative task manager with drag-and-drop, cutting team coordination overhead by 40% for distributed teams.',
      impact: 'Improved team productivity by 40%',
      technologies: ['React', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      category: 'Frontend',
      status: 'Completed',
      duration: '2 months',
      team: '2 developers',
    },
    {
      id: 3,
      title: 'WeatherVision Dashboard',
      description:
        'Engineered a responsive weather app with location-based forecasts, interactive maps, and 95+ Lighthouse performance score through code splitting and lazy loading.',
      impact: '95+ Lighthouse performance score',
      technologies: ['Vue.js', 'Node.js', 'OpenWeather API'],
      githubUrl: 'https://github.com/nampallyharish4/WeatherVision.git',
      liveUrl: 'https://weather-visoin.netlify.app/',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      category: 'Frontend',
      status: 'Completed',
      duration: '1.5 months',
      team: 'Solo',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend'];
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden scene-3d">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-surface-900 to-surface-500 dark:from-white dark:to-surface-400 bg-clip-text text-transparent inline-block font-sans">
              Featured Work
            </h2>
            <p className="text-surface-500 dark:text-surface-400 text-lg max-w-2xl mx-auto mb-4">
              Projects where I delivered measurable impact
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <Card3D
                key={cat}
                maxTilt={10}
                scale={1.05}
                className="rounded-2xl"
              >
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white'
                      : 'glass-medium text-surface-500 hover:glass-ultra'
                  }`}
                  style={
                    selectedCategory === cat
                      ? {
                          boxShadow:
                            '0 15px 30px -10px rgba(224, 125, 30, 0.4)',
                        }
                      : {}
                  }
                >
                  {cat}
                </button>
              </Card3D>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} direction="up" delay={300 + i * 100}>
              <Card3D
                maxTilt={8}
                scale={1.02}
                depth={30}
                className="rounded-3xl h-full"
              >
                <article className="glass-ultra rounded-3xl overflow-hidden group flex flex-col h-full ambient-shadow">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="glass-ultra px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>
                    {/* Impact badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 bg-accent-500/90 text-white px-3 py-2 rounded-lg text-xs font-bold backdrop-blur-sm">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {project.impact}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-surface-500 dark:text-surface-400 mb-6 line-clamp-3 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 glass-light rounded-lg text-brand-700 dark:text-brand-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-surface-400 mb-6 flex gap-4">
                      <span>{project.duration}</span>
                      <span>{project.team}</span>
                    </div>

                    <div className="mt-auto flex gap-3">
                      <Card3D maxTilt={12} scale={1.08} className="rounded-xl">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-medium hover:glass-ultra p-3.5 rounded-xl flex justify-center items-center group/btn block"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            className="w-5 h-5 dark:invert group-hover/btn:scale-110 transition-transform"
                            alt="GitHub"
                          />
                        </a>
                      </Card3D>
                      <Card3D
                        maxTilt={8}
                        scale={1.05}
                        className="flex-1 rounded-xl"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-surface-900 dark:bg-white text-white dark:text-surface-900 font-bold p-3.5 rounded-xl flex justify-center items-center gap-2 transition-all block text-sm"
                          style={{
                            boxShadow: '0 10px 25px -8px rgba(0,0,0,0.3)',
                          }}
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Card3D>
                    </div>
                  </div>
                </article>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
