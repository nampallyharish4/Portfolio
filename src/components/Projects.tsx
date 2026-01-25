import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A comprehensive full-stack e-commerce solution with Stripe integration and product management.',
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
        'Collaborative tool with real-time updates and intuitive drag-and-drop functionality.',
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
      title: 'Weather Dashboard',
      description:
        'Responsive weather app featuring location-based forecasts and interactive maps.',
      technologies: ['Vue.js', 'Node.js', 'OpenWeather'],
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
      <div className="max-w-7xl mx-auto px-6 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent inline-block font-sans">
              Featured Work
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <Card3D key={cat} maxTilt={10} scale={1.05}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'glass-medium text-slate-500 hover:glass-ultra'
                  }`}
                  style={
                    selectedCategory === cat
                      ? { boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.4)' }
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
              <Card3D maxTilt={8} scale={1.02} depth={30}>
                <div className="glass-ultra rounded-3xl overflow-hidden group flex flex-col h-full ambient-shadow">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <Card3D maxTilt={15} scale={1.1} className="absolute top-4 right-4">
                      <div className="glass-ultra px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">
                        {project.category}
                      </div>
                    </Card3D>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 3).map((tech, j) => (
                        <span
                          key={j}
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 glass-light rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-4">
                      <Card3D maxTilt={12} scale={1.08} className="flex-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-medium hover:glass-ultra p-4 rounded-2xl flex justify-center items-center group/btn block"
                        >
                          <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        </a>
                      </Card3D>
                      <Card3D maxTilt={8} scale={1.05} className="flex-[3]">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold p-4 rounded-2xl flex justify-center items-center gap-2 transition-all block"
                          style={{
                            boxShadow: '0 10px 25px -8px rgba(0,0,0,0.3)',
                          }}
                        >
                          <span>Preview</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Card3D>
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
