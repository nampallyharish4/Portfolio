import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax, useSmoothScroll } from '../hooks/useScrollEffect';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.3);
  const { scrollToElement } = useSmoothScroll();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-gray-950 transition-colors duration-700" />

      <div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"
        style={{ transform: `translateY(${parallaxOffset * -0.5}px)` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <ScrollReveal direction="fade" duration={1200}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-light border border-white/20 dark:border-white/10 mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Available for new projects
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Nampally Harish
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Crafting{' '}
              <span className="text-slate-900 dark:text-white font-medium">
                high-performance
              </span>{' '}
              digital experiences with{' '}
              <span className="text-blue-600 dark:text-blue-400 italic">
                Full-Stack excellence
              </span>
              .
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToElement('projects', 100)}
              className="px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center group"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToElement('contact', 100)}
              className="px-8 py-4 rounded-2xl glass-strong hover:glass-ultra font-semibold hover:scale-105 transition-all duration-300 flex items-center"
            >
              Let's Talk
              <Mail className="ml-2 w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={800}>
          <div className="flex justify-center space-x-6">
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: 'https://github.com/nampallyharish4',
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: 'https://www.linkedin.com/in/nampallyharish4/',
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: 'mailto:nampallyharish5544@gmail.com',
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-medium hover:glass-ultra hover:scale-110 hover:-rotate-12 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Scroll Indicator */}
      <div
        onClick={() => scrollToElement('about', 100)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 group"
      >
        <span className="text-xs font-medium mb-2 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-500 group-hover:from-blue-500 transition-all duration-300" />
      </div>
    </section>
  );
};

export default Hero;
