import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax, useSmoothScroll } from '../hooks/useScrollEffect';
import { useMousePosition } from '../hooks/use3DEffect';
import Card3D from './Card3D';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.3);
  const { scrollToElement } = useSmoothScroll();
  const { normalizedPosition } = useMousePosition();

  const getParallaxStyle = (depth: number): React.CSSProperties => ({
    transform: `translate3d(${normalizedPosition.x * depth * 15}px, ${normalizedPosition.y * depth * 15}px, 0)`,
    transition: 'transform 0.2s ease-out',
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32 scene-3d"
    >
      <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-gray-950 transition-colors duration-700" />

      <div
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[140px] opacity-60 parallax-layer"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)',
          ...getParallaxStyle(0.8),
          transform: `${getParallaxStyle(0.8).transform} translateY(${parallaxOffset * 0.3}px)`,
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full blur-[140px] opacity-60 parallax-layer"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 70%, transparent 100%)',
          ...getParallaxStyle(0.5),
          transform: `${getParallaxStyle(0.5).transform} translateY(${parallaxOffset * -0.3}px)`,
        }}
      />

      <div
        className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full opacity-30 parallax-layer"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          ...getParallaxStyle(1.2),
        }}
      />
      <div
        className="absolute bottom-[30%] left-[10%] w-24 h-24 rounded-full opacity-25 parallax-layer"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
          filter: 'blur(30px)',
          ...getParallaxStyle(1.5),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center layer-3d">
        <ScrollReveal direction="fade" duration={1200}>
          <Card3D maxTilt={5} scale={1.05} className="inline-block">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-ultra mb-8 float-animation">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Available for new projects
              </span>
            </div>
          </Card3D>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div style={getParallaxStyle(0.2)}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
              <span 
                className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent"
                style={{
                  textShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                Nampally Harish
              </span>
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="max-w-3xl mx-auto mb-12" style={getParallaxStyle(0.15)}>
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
            <Card3D maxTilt={8} scale={1.05} glare={true}>
              <button
                onClick={() => scrollToElement('projects', 100)}
                className="px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold flex items-center group glow-effect"
                style={{
                  boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.3), 0 5px 15px -5px rgba(0, 0, 0, 0.2)',
                }}
              >
                View My Work
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </Card3D>
            <Card3D maxTilt={8} scale={1.05} glare={true}>
              <button
                onClick={() => scrollToElement('contact', 100)}
                className="px-8 py-4 rounded-2xl glass-ultra font-semibold flex items-center depth-hover"
              >
                Let's Talk
                <Mail className="ml-2 w-5 h-5" />
              </button>
            </Card3D>
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
              <Card3D key={i} maxTilt={15} scale={1.1} depth={15}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl glass-ultra depth-hover"
                >
                  {social.icon}
                </a>
              </Card3D>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div
        onClick={() => scrollToElement('about', 100)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 group"
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
