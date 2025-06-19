import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  Filter,
  Grid,
  List,
} from 'lucide-react';
import { Project } from '../types';
import ScrollReveal from './ScrollReveal';
import { useParallax } from '../hooks/useScrollEffect';

const Projects: React.FC = () => {
  const parallaxOffset = useParallax(0.15);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A comprehensive full-stack e-commerce solution featuring user authentication, product management, shopping cart functionality, and secure payment processing with Stripe integration. Built with modern React patterns and optimized for performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
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
        'A collaborative task management application with real-time updates, intuitive drag-and-drop functionality, team collaboration features, and advanced project tracking capabilities. Designed for modern teams.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
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
        'A responsive weather application featuring location-based forecasts, interactive maps, and detailed analytics. Provides comprehensive weather insights with data visualization.',
      technologies: ['Vue.js', 'Node.js', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/nampallyharish4/WeatherVision.git',
      liveUrl: 'https://weather-visoin.netlify.app/',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      category: 'Frontend',
      status: 'Completed',
      duration: '1.5 months',
      team: 'Solo project',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'In Progress':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-slate-50 dark:bg-gray-950"
    >
      {/* Enhanced Background with parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-black/20 to-transparent transition-colors duration-700"></div>

      {/* Floating background elements with parallax */}
      <div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.6}px) rotate(${
            parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.4}px) rotate(${
            -parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Enhanced Header */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <div className="glass-medium section-heading-light rounded-2xl p-8 smooth-hover border-2 border-black/10 dark:border-white/10 shadow-card-light">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                  Featured Projects
                </h2>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="glass-light rounded-xl p-6 max-w-4xl smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
                  A showcase of my recent work, demonstrating expertise across
                  different technologies and project types.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced Filter and View Controls */}
        <ScrollReveal direction="up" delay={200} duration={1000}>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
            {/* Category Filter */}
            <div className="glass-ultra rounded-2xl p-6 shadow-lg smooth-hover border-2 border-black/10 dark:border-white/5 shadow-card-medium">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Filter by Category
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 hover:scale-105 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'glass-medium text-gray-700 dark:text-gray-300 hover:glass-strong'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="glass-ultra rounded-2xl p-6 shadow-lg smooth-hover border-2 border-black/10 dark:border-white/5 shadow-card-medium">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  View Mode
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-500 hover:scale-110 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'glass-medium text-gray-700 dark:text-gray-300 hover:glass-strong'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-500 hover:scale-110 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'glass-medium text-gray-700 dark:text-gray-300 hover:glass-strong'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Project Count */}
            <div className="glass-light rounded-xl p-4 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {filteredProjects.length} Project
                  {filteredProjects.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* UNIFORM PROJECT CARDS - SAME HEIGHT AND WIDTH */}
        <div
          className={`${
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-8'
              : 'space-y-8'
          } max-w-7xl mx-auto`}
        >
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction={
                viewMode === 'grid'
                  ? index % 2 === 0
                    ? 'left'
                    : 'right'
                  : 'up'
              }
              delay={300 + index * 100}
              duration={1000}
            >
              <div
                className={`group glass-ultra rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 relative border-2 border-black/10 dark:border-white/5 shadow-card-light ${
                  viewMode === 'grid'
                    ? 'h-[700px] w-full flex flex-col' // FIXED HEIGHT AND WIDTH FOR GRID
                    : 'flex flex-col lg:flex-row min-h-[400px]' // FIXED MIN HEIGHT FOR LIST
                }`}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer-effect opacity-20"></div>

                {/* Project Image - FIXED HEIGHT */}
                <div
                  className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'lg:w-1/3' : 'h-56 flex-shrink-0'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-cover transition-transform duration-1000 ${
                      viewMode === 'list'
                        ? 'w-full h-64 lg:h-full'
                        : 'w-full h-full'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        project.status
                      )} border border-black/10 dark:border-white/10 shadow-card-small`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/20 shadow-card-small">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Enhanced Project Content - FLEXIBLE HEIGHT */}
                <div
                  className={`p-6 relative flex flex-col flex-1 ${
                    viewMode === 'list' ? 'lg:w-2/3' : ''
                  }`}
                >
                  <div className="flex-1 flex flex-col">
                    {/* Project Header - FIXED HEIGHT */}
                    <div className="glass-light rounded-xl p-4 mb-4 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small flex-shrink-0">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500 mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Project Meta Info */}
                      <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Description - FLEXIBLE HEIGHT WITH CLAMP */}
                    <div className="glass-light rounded-lg p-4 mb-4 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small flex-1">
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-500 line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Technologies - FIXED HEIGHT */}
                    <div className="mb-4 flex-shrink-0">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="glass-medium px-3 py-1 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300 hover:glass-strong transition-all duration-500 hover:scale-105 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="glass-medium px-3 py-1 text-xs font-medium rounded-full text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/5 shadow-card-small">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons - FIXED HEIGHT */}
                  <div className="flex space-x-3 flex-shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 glass-strong rounded-xl text-gray-700 dark:text-gray-200 hover:glass-ultra transition-all duration-700 hover:scale-105 group/btn smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-500" />
                      <span className="font-medium text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 group/btn relative overflow-hidden smooth-hover border border-black/10 dark:border-white/10 shadow-card-medium"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-500" />
                        <span className="font-medium text-sm">Demo</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced Project Summary */}
        <ScrollReveal direction="up" delay={600} duration={1000}>
          <div className="mt-16 text-center">
            <div className="glass-ultra rounded-2xl p-8 max-w-4xl mx-auto smooth-hover border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="relative">
                <div className="absolute inset-0 shimmer-effect opacity-20"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-500">
                    Project Highlights
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <div className="glass-medium p-6 rounded-xl smooth-hover text-center border border-black/10 dark:border-white/5 shadow-card-small">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        3
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Projects Completed
                      </div>
                    </div>
                    <div className="glass-medium p-6 rounded-xl smooth-hover text-center border border-black/10 dark:border-white/5 shadow-card-small">
                      <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                        24/7
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
