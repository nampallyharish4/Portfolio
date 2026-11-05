import { ArrowUpRight, Github } from 'lucide-react';
import Reveal from './Reveal';

const OtherProjects = () => (
  <section id="other-projects" className="section-frame other-projects">
    <div className="section-label"><span>06</span><span>Other projects</span></div>
    <div className="other-projects-heading"><p className="eyebrow">A wider look</p><h2>More experiments,<br /><em>same curiosity.</em></h2></div>
    <div className="project-index">
      <Reveal><a href="https://github.com/nampallyharish4" target="_blank" rel="noreferrer"><span>01</span><strong>GitHub archive</strong><small>Explore the rest of my code and experiments</small><ArrowUpRight size={18} /></a></Reveal>
      <Reveal delay={100}><a href="https://github.com/nampallyharish4/WeatherVision.git" target="_blank" rel="noreferrer"><span>02</span><strong>WeatherVision source</strong><small>Vue.js · Node.js · OpenWeather API</small><Github size={17} /></a></Reveal>
      <Reveal delay={200}><a href="/Nampally_Harish_Resume.pdf" target="_blank" rel="noreferrer"><span>03</span><strong>Resume</strong><small>Download the latest project and skills overview</small><ArrowUpRight size={18} /></a></Reveal>
    </div>
  </section>
);

export default OtherProjects;
