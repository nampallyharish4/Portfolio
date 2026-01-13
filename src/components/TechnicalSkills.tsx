import React from 'react';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TechnicalSkills: React.FC = () => {
  const skills = [
    {
      name: 'React',
      level: 90,
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Angular',
      level: 85,
      icon: <Code className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Java',
      level: 85,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Python',
      level: 85,
      icon: <Code className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      name: 'C++',
      level: 80,
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Database',
      level: 85,
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Cloud (GCP)',
      level: 85,
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-400 to-indigo-500',
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent inline-block font-sans">
              Technical Expertise
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="glass-ultra rounded-3xl p-8 hover:glass-strong transition-all duration-300 group border border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-blue-500 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
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
                  <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 shimmer-effect opacity-30" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-20 glass-medium p-8 rounded-[2rem] border border-white/5 text-center">
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
                <span
                  key={i}
                  className="px-6 py-3 rounded-xl glass-light hover:glass-ultra transition-all font-medium border border-white/10 hover:border-blue-500/50 hover:text-blue-500 hover:scale-110 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechnicalSkills;
