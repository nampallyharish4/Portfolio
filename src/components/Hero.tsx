import React from 'react';
import { ArrowDown, Mail, Download, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax, useSmoothScroll } from '../hooks/useScrollEffect';
import { useMousePosition } from '../hooks/use3DEffect';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.3);
  const { scrollToElement } = useSmoothScroll();
  const { normalizedPosition, prefersReducedMotion } = useMousePosition();

  const getParallaxStyle = (depth: number): React.CSSProperties => {
    if (prefersReducedMotion) return {};
    return {
      transform: `translate3d(${normalizedPosition.x * depth * 15}px, ${normalizedPosition.y * depth * 15}px, 0)`,
      transition: 'transform 0.2s ease-out',
    };
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32 scene-3d"
    >
      <div className="absolute inset-0 -z-10 bg-surface-50 dark:bg-surface-950 transition-colors duration-700" />

      {/* Warm amber blob */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[140px] opacity-60 parallax-layer"
        style={{
          background:
            'radial-gradient(circle, rgba(224, 125, 30, 0.25) 0%, rgba(232, 153, 70, 0.1) 70%, transparent 100%)',
          ...getParallaxStyle(0.8),
          transform: `${getParallaxStyle(0.8).transform || ''} translateY(${parallaxOffset * 0.3}px)`,
        }}
      />
      {/* Teal accent blob */}
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full blur-[140px] opacity-60 parallax-layer"
        style={{
          background:
            'radial-gradient(circle, rgba(5, 201, 159, 0.25) 0%, rgba(29, 228, 184, 0.1) 70%, transparent 100%)',
          ...getParallaxStyle(0.5),
          transform: `${getParallaxStyle(0.5).transform || ''} translateY(${parallaxOffset * -0.3}px)`,
        }}
      />
      <div
        className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full opacity-30 parallax-layer"
        style={{
          background:
            'radial-gradient(circle, rgba(224, 125, 30, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          ...getParallaxStyle(1.2),
        }}
      />
      <div
        className="absolute bottom-[30%] left-[10%] w-24 h-24 rounded-full opacity-25 parallax-layer"
        style={{
          background:
            'radial-gradient(circle, rgba(5, 201, 159, 0.4) 0%, transparent 70%)',
          filter: 'blur(30px)',
          ...getParallaxStyle(1.5),
        }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10 w-full text-center layer-3d">
        {/* Availability badge */}
        <ScrollReveal direction="fade" duration={1200}>
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-accent-500/10 dark:bg-accent-400/10 backdrop-blur-md border border-accent-500/20 dark:border-accent-400/20 mb-8 float-animation hover:scale-105 transition-transform">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
            </span>
            <span className="text-sm font-semibold text-accent-700 dark:text-accent-400">
              Open to Full-Stack & Frontend roles
            </span>
          </div>
        </ScrollReveal>

        {/* Name - scannable within 3 seconds */}
        <ScrollReveal direction="up" delay={200}>
          <div style={getParallaxStyle(0.2)}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4">
              <span
                className="bg-gradient-to-r from-surface-900 via-brand-600 to-surface-900 dark:from-surface-100 dark:via-brand-400 dark:to-surface-100 bg-clip-text text-transparent px-4 sm:px-0"
                style={{ textShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                Nampally Harish
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-[0.2em] mb-2">
              Full-Stack Engineer
            </p>
          </div>
        </ScrollReveal>

        {/* Impact-first tagline */}
        <ScrollReveal direction="up" delay={400}>
          <div
            className="max-w-3xl mx-auto mb-10 px-4"
            style={getParallaxStyle(0.15)}
          >
            <p className="text-lg md:text-2xl text-surface-600 dark:text-surface-400 font-light leading-relaxed">
              I build{' '}
              <span className="text-surface-900 dark:text-white font-medium">
                scalable web applications
              </span>{' '}
              that handle{' '}
              <span className="text-brand-600 dark:text-brand-400 font-semibold">
                real-world complexity
              </span>{' '}
              — from Spring Boot microservices to{' '}
              <span className="text-accent-600 dark:text-accent-400 italic">
                pixel-perfect React interfaces
              </span>
              .
            </p>
          </div>
        </ScrollReveal>

        {/* CTA buttons - resume download above the fold */}
        <ScrollReveal direction="up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/Nampally_Harish_Resume.pdf"
              download
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold flex items-center group hover:scale-105 transition-all"
              style={{ boxShadow: '0 8px 24px -8px rgba(224, 125, 30, 0.4)' }}
            >
              <Download className="mr-2 w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToElement('projects', 100)}
              className="px-8 py-4 rounded-2xl bg-surface-900 dark:bg-white text-white dark:text-surface-900 font-semibold flex items-center group hover:scale-105 transition-transform"
              style={{ boxShadow: '0 8px 24px -8px rgba(0, 0, 0, 0.25)' }}
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToElement('contact', 100)}
              className="px-8 py-4 rounded-2xl bg-white/30 dark:bg-surface-800/40 backdrop-blur-md border border-surface-200/30 dark:border-surface-700/30 font-semibold flex items-center hover:scale-105 transition-transform"
            >
              Let's Talk
              <Mail className="ml-2 w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Quick stats for social proof */}
        <ScrollReveal direction="up" delay={700}>
          <div className="flex justify-center gap-8 sm:gap-12 mb-12">
            {[
              { value: '15+', label: 'Projects' },
              { value: '3+', label: 'Years Exp.' },
              { value: '10+', label: 'Tech Stack' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-brand-600 dark:text-brand-400">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-surface-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Social links - prominent */}
        <ScrollReveal direction="up" delay={800}>
          <div className="flex justify-center space-x-4">
            {[
              {
                icon: (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    className="w-6 h-6 dark:invert"
                    alt="GitHub"
                  />
                ),
                href: 'https://github.com/nampallyharish4',
                label: 'GitHub',
              },
              {
                icon: (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    className="w-6 h-6"
                    alt="LinkedIn"
                  />
                ),
                href: 'https://www.linkedin.com/in/nampallyharish4/',
                label: 'LinkedIn',
              },
              {
                icon: (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    className="w-6 h-6"
                    alt="Email"
                  />
                ),
                href: 'mailto:nampallyharish5544@gmail.com',
                label: 'Email',
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/80 dark:bg-surface-800/50 border border-surface-200/50 dark:border-surface-700/30 hover:scale-110 hover:border-brand-400/50 transition-all group"
                aria-label={social.label}
              >
                {social.icon}
                <span className="hidden sm:inline text-sm font-medium text-surface-600 dark:text-surface-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => scrollToElement('about', 100)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 group"
      >
        <span className="text-xs font-medium mb-2 uppercase tracking-widest group-hover:text-brand-500 transition-colors">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-surface-400 to-transparent dark:from-surface-500 group-hover:from-brand-500 transition-all duration-300" />
      </div>
    </section>
  );
};

export default Hero;
