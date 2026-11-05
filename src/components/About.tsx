import { ArrowUpRight } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useScrollEffect';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const { scrollToElement } = useSmoothScroll();
  return (
    <section id="about" className="section-frame section-about">
      <div className="section-label"><span>01</span><span>About</span></div>
      <div className="about-grid">
        <ScrollReveal direction="left"><div className="about-heading"><p className="eyebrow">A little context</p><h2>Good software<br /><em>starts with listening.</em></h2></div></ScrollReveal>
        <ScrollReveal direction="right" delay={120}><div className="about-body">
          <p className="lead">I build production-grade full-stack applications that solve real business problems. With experience across Java, Spring Boot, React, and Next.js, I like being close to both the system and the person using it.</p>
          <p>I care about clean architecture, thoughtful interfaces, and the small decisions that make a product feel reliable. I’m targeting roles in fintech, startups, and FAANG-tier companies where engineering quality and speed of delivery both matter.</p>
          <button className="text-link" onClick={() => scrollToElement('contact', 84)}>Let’s talk about a project <ArrowUpRight size={16} /></button>
        </div></ScrollReveal>
      </div>
      <div className="about-footer"><span>Based in Hyderabad</span><span>Working across the full stack</span><span>Always learning, always shipping</span></div>
    </section>
  );
};

export default About;
