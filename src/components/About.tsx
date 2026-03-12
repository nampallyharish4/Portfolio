import React from 'react';
import { Users, Code, Zap, Lightbulb, Target, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useSmoothScroll } from '../hooks/useScrollEffect';
import Card3D from './Card3D';

const About: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();

  const keyHighlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'End-to-End Delivery',
      description:
        'From Java/Spring Boot APIs to React frontends — I own the full stack, not just a slice.',
      color: 'text-brand-500',
      gradient: 'from-brand-500/20 to-brand-600/10',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Performance-Obsessed',
      description:
        'I optimize for speed: sub-second API responses, lazy-loaded UIs, efficient database queries.',
      color: 'text-accent-500',
      gradient: 'from-accent-500/20 to-accent-600/10',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Team Multiplier',
      description:
        'Code reviews, mentoring, clear PRs — I make the team around me stronger.',
      color: 'text-emerald-500',
      gradient: 'from-emerald-500/20 to-emerald-600/10',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Ship & Iterate',
      description:
        'Agile-native. I scope ruthlessly, ship incrementally, and refactor pragmatically.',
      color: 'text-orange-500',
      gradient: 'from-orange-500/20 to-orange-600/10',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden scene-3d">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-surface-900 to-surface-500 dark:from-white dark:to-surface-400 bg-clip-text text-transparent inline-block font-sans">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
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
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-700" />

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
                      alt="Nampally Harish - Full-Stack Engineer"
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 via-transparent to-transparent opacity-50" />
                  </div>

                  <div className="w-full text-center">
                    <h3 className="text-2xl font-bold mb-1">Nampally Harish</h3>
                    <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mb-6 uppercase tracking-widest">
                      Full-Stack Engineer
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {[
                        { value: '15+', label: 'Projects' },
                        { value: '3+', label: 'Years' },
                        { value: '10+', label: 'Technologies' },
                      ].map((stat, i) => (
                        <Card3D
                          key={i}
                          maxTilt={10}
                          scale={1.05}
                          depth={10}
                          className="rounded-xl"
                        >
                          <div className="glass-medium py-3 px-2 rounded-xl">
                            <span className="block text-xl font-bold text-brand-600 dark:text-brand-400">
                              {stat.value}
                            </span>
                            <span className="text-[9px] text-surface-500 uppercase tracking-tighter font-bold">
                              {stat.label}
                            </span>
                          </div>
                        </Card3D>
                      ))}
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
                  <p className="text-base text-surface-600 dark:text-surface-300 leading-relaxed mb-4 font-light">
                    I build{' '}
                    <span className="text-surface-900 dark:text-white font-semibold">
                      production-grade full-stack applications
                    </span>{' '}
                    that solve real business problems. With deep expertise in{' '}
                    <span className="text-brand-600 dark:text-brand-400 font-medium">
                      Java, Spring Boot, React, and Next.js
                    </span>
                    , I bridge the gap between robust backend systems and
                    delightful user experiences.
                  </p>
                  <p className="text-base text-surface-600 dark:text-surface-400 leading-relaxed font-light">
                    Targeting roles in{' '}
                    <span className="text-accent-600 dark:text-accent-400 font-medium">
                      fintech, startups, and FAANG-tier companies
                    </span>{' '}
                    where engineering quality and speed of delivery both matter.
                    I thrive in fast-paced environments that value clean
                    architecture and shipping working software.
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
                        <p className="text-[11px] text-surface-500 dark:text-surface-400 line-clamp-2">
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
                  className="px-8 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-xl font-bold text-base glow-effect"
                  style={{
                    boxShadow: '0 15px 30px -10px rgba(224, 125, 30, 0.4)',
                  }}
                >
                  Hire Me — Let's Talk
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
