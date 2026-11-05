import Reveal from './Reveal';

const Experience = () => (
  <section id="experience" className="section-frame section-experience">
    <div className="section-label"><span>05</span><span>Experience</span></div>
    <div className="timeline-heading">
      <div><p className="eyebrow">The path so far</p><h2>Learning by<br /><em>making.</em></h2></div>
      <p>This portfolio currently documents my independent project work and the direction I’m taking next.</p>
    </div>
    <div className="timeline">
      <Reveal><div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">01 / PROJECT PRACTICE</span><div><h3>Independent full-stack work</h3><p>Building and refining web applications across Java, Spring Boot, React, Next.js, Node.js, and cloud-backed tools. See the selected work above for the projects currently documented here.</p></div></div></Reveal>
      <Reveal delay={120}><div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">02 / NEXT CHAPTER</span><div><h3>Open to frontend & full-stack roles</h3><p>Looking for a team working on meaningful products in fintech, startups, or high-quality engineering environments.</p></div></div></Reveal>
    </div>
  </section>
);

export default Experience;
