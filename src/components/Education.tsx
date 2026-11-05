import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const Education = () => (
  <section id="education" className="section-frame section-education">
    <div className="section-label"><span>07</span><span>Education & credentials</span></div>
    <div className="education-layout">
      <div><p className="eyebrow">The foundation</p><h2>Always a<br /><em>student.</em></h2><p className="education-intro">A computer science foundation shaped by hands-on building, from diploma studies through engineering.</p></div>
      <div className="education-records">
        <Reveal><article className="education-record"><span className="education-period">NOV 2022 — AUG 2025</span><div><h3>B.Tech in Computer Science and Engineering</h3><p>JNTUH University College of Engineering</p><small>Rajanna Sircilla, Telangana</small></div></article></Reveal>
        <Reveal delay={140}><article className="education-record"><span className="education-period">JUN 2018 — MAY 2021</span><div><h3>Diploma in Computer Engineering</h3><p>Sri Indu Institute of Engineering and Technology</p><small>Ibrahimpatnam, Telangana</small></div></article></Reveal>
        <Reveal delay={280}><a className="resume-link" href="/Nampally_Harish_Resume.pdf" target="_blank" rel="noreferrer">View full resume <ArrowUpRight size={15} /></a></Reveal>
      </div>
    </div>
  </section>
);

export default Education;
