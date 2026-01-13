import React from 'react';
import { Users, Code, Zap, Lightbulb } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useSmoothScroll } from '../hooks/useScrollEffect';

const About: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();

  const keyHighlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Excellence',
      description:
        'Expertise in modern web technologies including React, Node.js, and TypeScript.',
      color: 'text-blue-500',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description:
        'Passionate about finding creative solutions to complex digital challenges.',
      color: 'text-purple-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description:
        'Strong team player with excellent communication and leadership skills.',
      color: 'text-green-500',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description:
        'Focus on delivering high-performance applications with exceptional UX.',
      color: 'text-orange-500',
    },
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent inline-block font-sans">
              About Me
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Profile Card */}
          <ScrollReveal direction="left" delay={200}>
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-700" />

              <div className="relative glass-ultra rounded-[1.5rem] p-5 flex flex-col items-center overflow-hidden">
                <div className="relative w-3/5 aspect-square rounded-full border-4 border-white/20 overflow-hidden mb-6 mx-auto shadow-lg">
                  <img
                    src="/profile2.png"
                    alt="Nampally Harish"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-50" />
                </div>

                <div className="w-full text-center">
                  <h3 className="text-2xl font-bold mb-1">Nampally Harish</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 uppercase tracking-widest">
                    Full-Stack Architect
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="glass-light py-3 px-2 rounded-xl border border-white/5">
                      <span className="block text-xl font-bold">15+</span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-tighter font-bold">
                        Projects
                      </span>
                    </div>
                    <div className="glass-light py-3 px-2 rounded-xl border border-white/5">
                      <span className="block text-xl font-bold">3+</span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-tighter font-bold">
                        Success
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full justify-center">
                    {[
                      {
                        icon: <Code size={18} />,
                        href: 'https://github.com/nampallyharish4',
                      },
                      {
                        icon: <Users size={18} />,
                        href: 'https://www.linkedin.com/in/nampallyharish4/',
                      },
                      {
                        icon: <Zap size={18} />,
                        href: 'mailto:nampallyharish5544@gmail.com',
                      },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg glass-medium hover:glass-ultra hover:text-blue-500 transition-all"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={400}>
              <div className="glass-strong p-6 rounded-2xl border border-white/5">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-light">
                  I am a passionate{' '}
                  <span className="text-slate-900 dark:text-white font-medium">
                    Full-Stack Developer
                  </span>{' '}
                  based in Hyderabad. My work bridges the gap between complex
                  engineering and elegant design.
                </p>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  I specialize in scalable web applications with clean code.
                  Whether it's backend logic or frontend aesthetics, I aim for
                  excellence.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3">
              {keyHighlights.map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={500 + i * 50}>
                  <div className="glass-medium p-4 rounded-xl border border-white/5 flex items-start space-x-3 hover:glass-ultra hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div className={`${item.color} p-2 rounded-lg bg-white/5`}>
                      {React.cloneElement(item.icon as React.ReactElement, {
                        size: 18,
                      })}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        High-quality delivery
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={800}>
              <button
                onClick={() => scrollToElement('contact', 100)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
              >
                Let's Collaborate
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
