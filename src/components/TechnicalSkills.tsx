import React from 'react';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

const TechnicalSkills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Backend',
      skills: [
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          level: 85,
          color: 'from-orange-500 to-red-600',
          glow: 'rgba(249, 115, 22, 0.3)',
        },
        {
          name: 'Spring Boot',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          level: 70,
          color: 'from-emerald-500 to-green-600',
          glow: 'rgba(16, 185, 129, 0.3)',
        },
        {
          name: 'Node.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          level: 65,
          color: 'from-green-500 to-green-700',
          glow: 'rgba(34, 197, 94, 0.3)',
        },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          level: 60,
          color: 'from-cyan-400 to-blue-500',
          glow: 'rgba(6, 182, 212, 0.3)',
        },
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          level: 55,
          color: 'from-surface-700 to-surface-900',
          glow: 'rgba(120, 113, 108, 0.3)',
        },
        {
          name: 'TypeScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          level: 60,
          color: 'from-blue-500 to-blue-700',
          glow: 'rgba(59, 130, 246, 0.3)',
        },
      ],
    },
    {
      category: 'Data & Cloud',
      skills: [
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          level: 70,
          color: 'from-blue-400 to-indigo-500',
          glow: 'rgba(99, 102, 241, 0.3)',
        },
        {
          name: 'GCP',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
          level: 85,
          color: 'from-brand-400 to-brand-600',
          glow: 'rgba(224, 125, 30, 0.3)',
        },
        {
          name: 'Firebase',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          level: 60,
          color: 'from-yellow-400 to-orange-500',
          glow: 'rgba(234, 179, 8, 0.3)',
        },
      ],
    },
  ];

  const toolsAndPractices = [
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'HTML/CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    { name: 'REST APIs', logo: null },
    { name: 'Agile/Scrum', logo: null },
    { name: 'CI/CD', logo: null },
  ];

  return (
    <section id="skills" className="py-24 relative scene-3d">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-surface-900 to-surface-500 dark:from-white dark:to-surface-400 bg-clip-text text-transparent inline-block font-sans">
              Technical Expertise
            </h2>
            <p className="text-surface-500 dark:text-surface-400 text-lg max-w-2xl mx-auto mb-4">
              Technologies I use to build production-ready applications
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Skill categories */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={catIdx} direction="up" delay={catIdx * 150}>
              <div>
                <h3 className="text-sm font-bold text-surface-400 uppercase tracking-[0.2em] mb-6 pl-2">
                  {cat.category}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {cat.skills.map((skill, i) => (
                    <Card3D
                      key={i}
                      maxTilt={10}
                      scale={1.03}
                      depth={25}
                      className="rounded-2xl"
                    >
                      <div
                        className="glass-ultra rounded-2xl p-6 transition-all duration-500 group h-full ambient-shadow"
                        style={
                          { '--skill-glow': skill.glow } as React.CSSProperties
                        }
                      >
                        <div className="flex items-center space-x-4 mb-6">
                          <div
                            className="p-3 rounded-xl flex items-center justify-center w-12 h-12"
                            style={{
                              background:
                                'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                              boxShadow:
                                'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.1)',
                            }}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold">{skill.name}</h4>
                          </div>
                          <span className="text-xl font-bold text-brand-500">
                            {skill.level}%
                          </span>
                        </div>

                        <div
                          className="h-3 w-full rounded-full overflow-hidden p-0.5"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                          }}
                        >
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{
                              width: `${skill.level}%`,
                              boxShadow: `0 2px 10px ${skill.glow}`,
                            }}
                          >
                            <div className="absolute inset-0 shimmer-effect opacity-40" />
                          </div>
                        </div>
                      </div>
                    </Card3D>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tools & practices */}
        <ScrollReveal direction="up" delay={600}>
          <Card3D maxTilt={4} scale={1.01} className="mt-16 rounded-[2rem]">
            <div className="glass-strong p-6 sm:p-10 rounded-[2rem] text-center ambient-shadow">
              <h3 className="text-sm font-bold mb-8 text-surface-400 uppercase tracking-[0.2em]">
                Tools & Practices
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {toolsAndPractices.map((s, i) => (
                  <Card3D
                    key={i}
                    maxTilt={15}
                    scale={1.08}
                    className="rounded-xl"
                  >
                    <div className="px-5 py-3 rounded-xl glass-medium hover:glass-ultra transition-all font-medium cursor-default flex items-center gap-2 group">
                      {s.logo && (
                        <img
                          src={s.logo}
                          alt={s.name}
                          className="w-5 h-5 object-contain"
                        />
                      )}
                      <span className="text-sm group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {s.name}
                      </span>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </Card3D>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechnicalSkills;
