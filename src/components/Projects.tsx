import { ArrowUpRight, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  { number: '01', title: 'WeatherVision', type: 'Frontend · Solo project', description: 'A responsive weather experience with location-based forecasts, interactive maps, and a focus on fast, clear information.', tech: ['Vue.js', 'Node.js', 'OpenWeather API'], github: 'https://github.com/nampallyharish4/WeatherVision.git', live: 'https://weather-visoin.netlify.app/', tone: 'project-sky' },
  { number: '02', title: 'E-Commerce Platform', type: 'Full-stack build', description: 'A complete commerce flow built around product discovery, a considered checkout experience, and Stripe payments.', tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], github: '', live: '', tone: 'project-rust' },
  { number: '03', title: 'Task Management App', type: 'Frontend · Collaboration', description: 'A real-time collaborative task manager designed to make shared work easier to see, move, and finish.', tech: ['React', 'TypeScript', 'Firebase'], github: '', live: '', tone: 'project-olive' },
];

const Projects = () => (
  <section id="projects" className="section-frame section-projects">
    <div className="section-label"><span>03</span><span>Selected work</span></div>
    <ScrollReveal direction="up"><div className="projects-heading"><div><p className="eyebrow">Things I’ve made</p><h2>Work with<br /><em>intent.</em></h2></div><p>Not a gallery of everything — just a few projects that show how I think, build, and refine.</p></div></ScrollReveal>
    <div className="project-list">{projects.map((project, index) => <ScrollReveal key={project.title} direction={index % 2 ? 'right' : 'left'} delay={index * 120}><article className={`project-row ${index % 2 ? 'project-reverse' : ''}`}><div className={`project-visual ${project.tone}`}><span className="project-number">{project.number}</span><div className="visual-mark">{index === 0 ? '☼' : index === 1 ? '＋' : '↗'}</div><span className="visual-caption">{project.type}</span></div><div className="project-info"><p className="project-kicker">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}</div></div></article></ScrollReveal>)}</div>
  </section>
);

export default Projects;
