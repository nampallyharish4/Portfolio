import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax, useSmoothScroll } from '../hooks/useScrollEffect';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.3);
  const { scrollToElement } = useSmoothScroll();

  const scrollToProjects = () => {
    scrollToElement('projects', 80);
  };

  const scrollToContact = () => {
    scrollToElement('contact', 80);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-slate-50 dark:bg-gray-950"
    >
      {/* Enhanced background gradient with parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-black/20 to-transparent transition-colors duration-700"></div>

      {/* Floating background elements with enhanced glass effect and parallax */}
      <div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 dark:from-blue-500/5 dark:to-indigo-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px) rotate(${
            parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>
      <div
        className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px) rotate(${
            -parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>
      <div
        className="absolute -bottom-20 left-40 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-blue-200/30 dark:from-purple-500/5 dark:to-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-4000 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.4}px) rotate(${
            parallaxOffset * 0.05
          }deg)`,
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main content without box container */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
        <ScrollReveal
          direction="scale"
          duration={1200}
          easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
        >
          <div className="relative">
            <ScrollReveal direction="up" delay={200} duration={1000}>
              <div className="mb-12">
                <div className="flex items-center justify-center mb-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                    Nampally Harish
                  </h1>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} duration={1000}>
              <div className="glass-medium rounded-2xl p-8 mb-10 relative overflow-hidden smooth-hover border border-black/10 dark:border-white/5 shadow-card-medium">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5 transition-colors duration-500"></div>
                <p className="relative text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-100 font-light transition-colors duration-500">
                  Full-Stack Developer
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600} duration={1000}>
              <div className="glass-light rounded-xl p-8 mb-12 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed transition-colors duration-500">
                  Creating functional digital solutions with modern
                  technologies. Passionate about clean code and solving complex
                  problems.
                </p>
              </div>
            </ScrollReveal>

            {/* Enhanced CTA Buttons */}
            <ScrollReveal direction="up" delay={800} duration={1000}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button
                  onClick={scrollToProjects}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-12 py-6 rounded-2xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 smooth-hover border border-black/10 dark:border-white/10 shadow-card-light"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center">
                    View My Work
                    <ArrowDown className="ml-4 w-6 h-6 group-hover:translate-y-2 transition-transform duration-500" />
                  </div>
                </button>

                <button
                  onClick={scrollToContact}
                  className="group glass-strong text-gray-800 dark:text-gray-100 px-12 py-6 rounded-2xl font-semibold text-xl hover:glass-medium transition-all duration-700 hover:scale-110 relative overflow-hidden smooth-hover border border-black/10 dark:border-white/5 shadow-card-medium"
                >
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative">Get In Touch</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Enhanced Social Links */}
            <ScrollReveal direction="up" delay={1000} duration={1000}>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-medium p-5 rounded-2xl hover:glass-strong transition-all duration-700 hover:scale-125 hover:rotate-12 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                >
                  <Github className="w-8 h-8 text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-medium p-5 rounded-2xl hover:glass-strong transition-all duration-700 hover:scale-125 hover:rotate-12 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                >
                  <Linkedin className="w-8 h-8 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500" />
                </a>
                <a
                  href="mailto:nampallyharish5544@gmail.com"
                  className="group glass-medium p-5 rounded-2xl hover:glass-strong transition-all duration-700 hover:scale-125 hover:rotate-12 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                >
                  <Mail className="w-8 h-8 text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
