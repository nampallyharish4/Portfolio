const groups = [
  ['Programming', 'Java', 'JavaScript', 'TypeScript'],
  ['Frontend', 'React', 'Next.js', 'HTML / CSS', 'Tailwind CSS'],
  ['Backend', 'Spring Boot', 'Node.js', 'REST APIs'],
  ['Data & cloud', 'MySQL', 'Firebase', 'GCP'],
  ['Ways of working', 'Git', 'Agile / Scrum', 'CI / CD'],
];

import ScrollReveal from './ScrollReveal';

const TechnicalSkills = () => (
  <section id="skills" className="section-frame section-skills">
    <div className="section-label"><span>02</span><span>Toolkit</span></div>
    <ScrollReveal direction="left"><div className="skills-intro"><p className="eyebrow">The tools behind the work</p><h2>A practical<br /><em>toolkit.</em></h2><p>I choose technology for the problem at hand — not the other way around.</p></div></ScrollReveal>
    <div className="skill-list">{groups.map(([title, ...skills], index) => <ScrollReveal key={title} direction="right" delay={index * 90}><div className="skill-row"><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></ScrollReveal>)}</div>
  </section>
);

export default TechnicalSkills;
