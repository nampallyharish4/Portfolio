import React from 'react';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

const TechnicalSkills: React.FC = () => {
  const skills = [
    {
      name: 'React',
      level: 90,
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      glow: 'rgba(59, 130, 246, 0.3)',
    },
    {
      name: 'Angular',
      level: 85,
      icon: <Code className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      glow: 'rgba(239, 68, 68, 0.3)',
    },
    {
      name: 'Java',
      level: 85,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      glow: 'rgba(249, 115, 22, 0.3)',
    },
    {
      name: 'Python',
      level: 85,
      icon: <Code className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      glow: 'rgba(234, 179, 8, 0.3)',
    },
    {
      name: 'C++',
      level: 80,
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      glow: 'rgba(147, 51, 234, 0.3)',
    },
    {
      name: 'Database',
      level: 85,
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      glow: 'rgba(34, 197, 94, 0.3)',
    },
    {
      name: 'Cloud (GCP)',
      level: 85,
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-400 to-indigo-500',
      glow: 'rgba(99, 102, 241, 0.3)',
    },
  ];

  return (
    <section id="skills" className="py-24 relative scene-3d">
      <div className="max-w-7xl mx-auto px-6 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent inline-block font-sans">
              Technical Expertise
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <Card3D maxTilt={10} scale={1.03} depth={25}>
                <div 
                  className="glass-ultra rounded-3xl p-8 transition-all duration-500 group h-full ambient-shadow"
                  style={{
                    '--skill-glow': skill.glow,
                  } as React.CSSProperties}
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <Card3D maxTilt={15} scale={1.1}>
                      <div 
                        className="p-4 rounded-2xl text-blue-500 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.1)',
                        }}
                      >
                        {skill.icon}
                      </div>
                    </Card3D>
                    <h3 className="text-2xl font-bold">{skill.name}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Proficiency
                      </span>
                      <span className="text-2xl font-bold text-blue-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div 
                      className="h-4 w-full rounded-full overflow-hidden p-0.5"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
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
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={800}>
          <Card3D maxTilt={4} scale={1.01}>
            <div 
              className="mt-20 glass-strong p-10 rounded-[2rem] text-center ambient-shadow"
            >
              <h3 className="text-xl font-bold mb-8 text-slate-500 uppercase tracking-widest">
                Additional Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Git',
                  'Tailwind CSS',
                  'Docker',
                  'Firebase',
                  'REST APIs',
                  'Agile',
                  'Vite',
                  'TypeScript',
                ].map((s, i) => (
                  <Card3D key={i} maxTilt={15} scale={1.08}>
                    <span
                      className="px-6 py-3 rounded-xl glass-medium transition-all font-medium cursor-default block"
                    >
                      {s}
                    </span>
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
