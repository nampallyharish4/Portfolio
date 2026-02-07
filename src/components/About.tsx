import React from 'react';
import { Users, Code, Zap, Lightbulb } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useSmoothScroll } from '../hooks/useScrollEffect';
import Card3D from './Card3D';

const About: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();

  const keyHighlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Technical Excellence',
      description:
        'Expertise in modern web technologies including React, Node.js, and TypeScript.',
      color: 'text-blue-500',
      gradient: 'from-blue-500/20 to-blue-600/10',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Innovation',
      description:
        'Passionate about finding creative solutions to complex digital challenges.',
      color: 'text-purple-500',
      gradient: 'from-purple-500/20 to-purple-600/10',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Collaboration',
      description:
        'Strong team player with excellent communication and leadership skills.',
      color: 'text-green-500',
      gradient: 'from-green-500/20 to-green-600/10',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Performance',
      description:
        'Focus on delivering high-performance applications with exceptional UX.',
      color: 'text-orange-500',
      gradient: 'from-orange-500/20 to-orange-600/10',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden scene-3d">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent inline-block font-sans">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={200}>
            <Card3D
              maxTilt={8}
              scale={1.02}
              className="max-w-sm mx-auto lg:mx-0 rounded-[1.5rem]"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-700" />

                <div className="relative glass-ultra rounded-[1.5rem] p-6 flex flex-col items-center overflow-hidden ambient-shadow">
                  <div
                    className="relative w-4/5 sm:w-3/5 aspect-square rounded-full border-4 overflow-hidden mb-6 mx-auto"
                    style={{
                      borderColor: 'rgba(255,255,255,0.2)',
                      boxShadow:
                        '0 15px 35px -10px rgba(0,0,0,0.2), inset 0 -5px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    <img
                      src="/profile2.png"
                      alt="Nampally Harish"
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-50" />
                  </div>

                  <div className="w-full text-center">
                    <h3 className="text-2xl font-bold mb-1">Nampally Harish</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 uppercase tracking-widest">
                      Full-Stack Developer
                    </p>

                    <div className="mb-6">
                      <Card3D
                        maxTilt={10}
                        scale={1.05}
                        depth={10}
                        className="rounded-xl"
                      >
                        <div className="glass-medium py-3 px-2 rounded-xl">
                          <span className="block text-xl font-bold">15+</span>
                          <span className="text-[9px] text-slate-500 uppercase tracking-tighter font-bold">
                            Projects
                          </span>
                        </div>
                      </Card3D>
                    </div>

                    <div className="flex gap-2 w-full justify-center">
                      {[
                        {
                          icon: (
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                              className="w-5 h-5 dark:invert"
                              alt="Github"
                            />
                          ),
                          href: 'https://github.com/nampallyharish4',
                        },
                        {
                          icon: (
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                              className="w-5 h-5 house-fill"
                              alt="Linkedin"
                            />
                          ),
                          href: 'https://www.linkedin.com/in/nampallyharish4/',
                        },
                        {
                          icon: (
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                              className="w-5 h-5"
                              alt="Gmail"
                            />
                          ),
                          href: 'mailto:nampallyharish5544@gmail.com',
                        },
                      ].map((item, i) => (
                        <Card3D
                          key={i}
                          maxTilt={12}
                          scale={1.1}
                          className="rounded-lg"
                        >
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 flex items-center justify-center rounded-lg glass-medium hover:glass-ultra transition-all block overflow-hidden"
                          >
                            {item.icon}
                          </a>
                        </Card3D>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={400}>
              <Card3D maxTilt={5} scale={1.01} className="rounded-2xl">
                <div className="glass-strong p-5 sm:p-8 rounded-2xl ambient-shadow">
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-light">
                    I am a Passionate{' '}
                    <span className="text-slate-900 dark:text-white font-medium">
                      Full-Stack Developer
                    </span>{' '}
                    on a mission to build digital bridges between complex
                    engineering and human-centric design. I don't just write
                    code; I weave performance and aesthetics into scalable
                    ecosystems.
                  </p>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    From the precision of backend logic to the fluidity of
                    modern interfaces, I specialize in turning complex
                    challenges into seamless digital experiences. Every project
                    is a canvas where I blend high-performance engineering with
                    creative innovation.
                  </p>
                </div>
              </Card3D>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyHighlights.map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={500 + i * 75}>
                  <Card3D
                    maxTilt={12}
                    scale={1.03}
                    depth={15}
                    className="rounded-xl h-full"
                  >
                    <div
                      className="glass-medium p-4 rounded-xl flex items-start space-x-3 cursor-default h-full"
                      style={{
                        background: `linear-gradient(135deg, ${item.gradient.split(' ')[0].replace('from-', '')} 0%, transparent 100%)`,
                      }}
                    >
                      <div
                        className={`${item.color} p-2 rounded-lg glass-light shrink-0`}
                      >
                        {React.cloneElement(item.icon as React.ReactElement, {
                          size: 18,
                        })}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card3D>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={800}>
              <Card3D maxTilt={6} scale={1.03} className="rounded-xl">
                <button
                  onClick={() => scrollToElement('contact', 100)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-base glow-effect"
                  style={{
                    boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.4)',
                  }}
                >
                  Let's Collaborate
                </button>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
