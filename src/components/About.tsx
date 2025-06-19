import React from 'react';
import {
  Star,
  Award,
  MapPin,
  Briefcase,
  Target,
  Users,
  Code,
  Zap,
  Lightbulb,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax } from '../hooks/useScrollEffect';

const About: React.FC = () => {
  const parallaxOffset = useParallax(0.2);

  const highlights = [
    {
      icon: <Target className="w-5 h-5" />,
      title: '3 Projects',
      description: 'Successfully delivered projects',
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Team Leadership',
      description: 'Led cross-functional teams',
      color: 'text-green-600 dark:text-green-400',
    },
  ];

  const personalInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Hyderabad, India',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: 'Specialization',
      value: 'Full-Stack Development',
      color: 'text-green-600 dark:text-green-400',
    },
  ];

  const keyHighlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Excellence',
      description:
        'Expertise in modern web technologies including React, Node.js, TypeScript, and cloud platforms. Committed to writing clean, maintainable code.',
      color: 'text-blue-600 dark:text-blue-400',
      gradient:
        'bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:from-blue-900/10 dark:via-blue-800/5 dark:to-indigo-900/10',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation & Problem Solving',
      description:
        'Passionate about finding creative solutions to complex challenges. Always exploring new technologies and methodologies.',
      color: 'text-purple-600 dark:text-purple-400',
      gradient:
        'bg-gradient-to-br from-purple-50 via-purple-100 to-violet-100 dark:from-purple-900/10 dark:via-purple-800/5 dark:to-violet-900/10',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration & Leadership',
      description:
        'Strong team player with leadership experience. Excellent communication skills and ability to work with cross-functional teams.',
      color: 'text-green-600 dark:text-green-400',
      gradient:
        'bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 dark:from-green-900/10 dark:via-green-800/5 dark:to-emerald-900/10',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance & Quality',
      description:
        'Focus on delivering high-performance applications with exceptional user experience. Attention to detail and quality assurance.',
      color: 'text-orange-600 dark:text-orange-400',
      gradient:
        'bg-gradient-to-br from-orange-50 via-orange-100 to-amber-100 dark:from-orange-900/10 dark:via-orange-800/5 dark:to-amber-900/10',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-slate-50 dark:bg-gray-950"
    >
      {/* Enhanced Background with parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-black/20 to-transparent transition-colors duration-700"></div>

      {/* Floating background elements with parallax */}
      <div
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px) rotate(${
            parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px) rotate(${
            -parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Enhanced Header */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="glass-medium section-heading-light rounded-2xl p-8 smooth-hover border-2 border-black/10 dark:border-white/10 shadow-card-light">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                  About Me
                </h2>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="glass-light rounded-xl p-6 max-w-4xl smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
                  Passionate developer dedicated to creating innovative digital
                  solutions that make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content Grid - Equal Height Containers */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Profile Section - Left Column */}
          <ScrollReveal direction="left" delay={200} duration={1000}>
            <div className="glass-ultra rounded-3xl p-10 shadow-2xl relative overflow-hidden smooth-hover h-full flex flex-col border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="absolute inset-0 shimmer-effect opacity-20"></div>

              <div className="relative text-center flex-1 flex flex-col">
                {/* Profile Image */}
                <ScrollReveal direction="scale" delay={400} duration={1200}>
                  <div className="w-40 h-40 mx-auto mb-8 relative">
                    <div className="absolute inset-0 glass-strong rounded-full p-2 smooth-hover border border-black/10 dark:border-white/5 shadow-card-medium">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1">
                        <img
                          src="/images/harish.jpg"
                          alt="Nampally Harish"
                          className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 glass-medium p-2 rounded-full smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                      <Star className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Name and Title */}
                <ScrollReveal direction="up" delay={600} duration={1000}>
                  <div className="glass-medium rounded-xl p-6 mb-8 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-500">
                      Nampally Harish
                    </h3>
                    <div className="flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 transition-colors duration-500" />
                      <span className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-500">
                        Full-Stack Developer
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Quick Stats */}
                <ScrollReveal direction="up" delay={800} duration={1000}>
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="glass-light rounded-lg p-4 smooth-hover text-center border border-black/10 dark:border-white/5 shadow-card-small">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                        3
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Spacer to push content to fill height */}
                <div className="flex-1"></div>
              </div>
            </div>
          </ScrollReveal>

          {/* Achievements Content - Middle Column */}
          <ScrollReveal direction="up" delay={300} duration={1000}>
            <div className="glass-ultra rounded-3xl p-10 shadow-2xl relative overflow-hidden smooth-hover h-full flex flex-col border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="absolute inset-0 shimmer-effect opacity-20"></div>

              <div className="relative flex-1 flex flex-col">
                {/* Section Title */}
                <div className="glass-medium rounded-xl p-6 text-center smooth-hover mb-8 border border-black/10 dark:border-white/5 shadow-card-small">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500">
                    Achievements
                  </h3>
                </div>

                {/* Achievements Content - Flexible container */}
                <div className="space-y-6 flex-1 flex flex-col justify-center">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="glass-light rounded-lg p-6 smooth-hover group border border-black/10 dark:border-white/5 shadow-card-small"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`glass-strong p-3 rounded-lg ${highlight.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-black/10 dark:border-white/5 shadow-card-small`}
                        >
                          {highlight.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-2 transition-colors duration-500">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-500">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Details & Personal Info - Right Column */}
          <ScrollReveal direction="right" delay={400} duration={1000}>
            <div className="glass-ultra rounded-3xl p-10 shadow-2xl relative overflow-hidden smooth-hover h-full flex flex-col border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="absolute inset-0 shimmer-effect opacity-20"></div>

              <div className="relative flex-1 flex flex-col">
                <div className="glass-medium rounded-xl p-6 mb-8 text-center smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500">
                    Quick Info
                  </h3>
                </div>

                <div className="space-y-6 flex-1 flex flex-col justify-center">
                  {personalInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 glass-light rounded-lg p-4 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                    >
                      <div
                        className={`glass-strong p-3 rounded-lg ${info.color} transition-all duration-500 hover:scale-110 border border-black/10 dark:border-white/5 shadow-card-small`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm transition-colors duration-500">
                          {info.label}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-500">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Highlights Section - Horizontal Layout Below with Enhanced Gradients */}
        <ScrollReveal direction="up" delay={1200} duration={1000}>
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="glass-medium section-heading-light rounded-2xl p-6 inline-block smooth-hover border-2 border-black/10 dark:border-white/10 shadow-card-light">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                  Key Highlights
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {keyHighlights.map((highlight, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={1400 + index * 100}
                  duration={1000}
                >
                  <div
                    className={`rounded-2xl p-8 smooth-hover transition-all duration-500 hover:scale-105 hover:-rotate-1 ${highlight.gradient} shadow-xl hover:shadow-2xl relative overflow-hidden group border-2 border-black/10 dark:border-white/5 shadow-card-medium`}
                  >
                    {/* Shimmer overlay for enhanced effect */}
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                    <div className="relative text-center">
                      <div
                        className={`inline-flex p-4 rounded-xl ${highlight.color} bg-white/60 dark:bg-black/30 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg border border-black/10 dark:border-white/5 shadow-card-small`}
                      >
                        {highlight.icon}
                      </div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-4 transition-colors duration-500">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-500">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={1800} duration={1000}>
          <div className="mt-16 text-center">
            <div className="glass-ultra rounded-2xl p-8 max-w-4xl mx-auto smooth-hover border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="relative">
                <div className="absolute inset-0 shimmer-effect opacity-20"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-500">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-500">
                    I'm always excited to work on new projects and collaborate
                    with talented individuals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() =>
                        document
                          .getElementById('contact')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-700 hover:scale-110 smooth-hover border border-black/10 dark:border-white/10 shadow-card-medium"
                    >
                      Get In Touch
                    </button>
                    <button
                      onClick={() =>
                        document
                          .getElementById('projects')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="px-8 py-4 glass-strong text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:glass-ultra transition-all duration-700 hover:scale-110 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                    >
                      View My Work
                    </button>
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

export default About;
