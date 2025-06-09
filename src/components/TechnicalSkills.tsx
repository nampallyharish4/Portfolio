import React from 'react';
import {
  Code,
  Palette,
  Zap,
  Heart,
  Cpu,
  Database,
  Cloud,
  Smartphone,
} from 'lucide-react';
import { Skill } from '../types';
import ScrollReveal from './ScrollReveal';
import { useParallax } from '../hooks/useScrollEffect';

const TechnicalSkills: React.FC = () => {
  const parallaxOffset = useParallax(0.15);

  const skills = [
    {
      name: 'React',
      level: 90,
      icon: 'code',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      name: 'Angular',
      level: 85,
      icon: 'code',
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
    },
    {
      name: 'Java',
      level: 85,
      icon: 'code',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
    {
      name: 'Python',
      level: 85,
      icon: 'code',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      name: 'C++',
      level: 80,
      icon: 'code',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      name: 'Database Management',
      level: 85,
      icon: 'database',
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      name: 'Google Cloud Platform',
      level: 85,
      icon: 'cloud',
      color: 'text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      name: 'Version Control',
      level: 90,
      icon: 'git-branch',
      color: 'text-gray-700 dark:text-gray-300',
      bgColor: 'bg-gray-100 dark:bg-gray-800/30',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5" />;
      case 'palette':
        return <Palette className="w-5 h-5" />;
      case 'zap':
        return <Zap className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      case 'git-branch':
        return <Heart className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-slate-50 dark:bg-gray-950"
    >
      {/* Enhanced Background with parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-black/20 to-transparent transition-colors duration-700"></div>

      {/* Floating background elements with parallax */}
      <div
        className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 dark:from-blue-500/5 dark:to-indigo-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="glass-medium section-heading-light rounded-2xl p-8 smooth-hover border-2 border-black/10 dark:border-white/10 shadow-card-light">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                  Technical Skills
                </h2>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="glass-light rounded-xl p-6 max-w-4xl smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
                  A comprehensive overview of my technical expertise and
                  proficiency levels across various technologies.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={200 + index * 100}
              duration={1000}
            >
              <div className="group glass-ultra rounded-2xl p-8 shadow-2xl relative overflow-hidden smooth-hover border-2 border-black/10 dark:border-white/5 shadow-card-light">
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="glass-strong p-4 rounded-xl text-gray-700 dark:text-gray-200 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 border border-black/10 dark:border-white/5 shadow-card-small">
                        {getIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500">
                          {skill.name}
                        </h3>
                        <div className="glass-light px-4 py-2 rounded-lg mt-2 inline-block smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-300 transition-colors duration-500">
                            {skill.level}% Proficiency
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative">
                    <div className="h-4 glass-medium rounded-full overflow-hidden mb-2 border border-black/10 dark:border-white/5 shadow-card-small">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${200 + index * 100}ms`,
                        }}
                      >
                        <div className="absolute inset-0 shimmer-effect"></div>
                      </div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <ScrollReveal direction="up" delay={1000} duration={1000}>
          <div className="mt-16 text-center">
            <div className="glass-ultra rounded-2xl p-8 max-w-4xl mx-auto smooth-hover border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="relative">
                <div className="absolute inset-0 shimmer-effect opacity-20"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-500">
                    Additional Expertise
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      'Git & Version Control',
                      'Agile Methodologies',
                      'Testing & QA',
                      'DevOps & CI/CD',
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="glass-medium p-4 rounded-xl smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                      >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500">
                          {skill}
                        </span>
                      </div>
                    ))}
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

export default TechnicalSkills;
