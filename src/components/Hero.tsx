import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { useParallax, useSmoothScroll } from '../hooks/useScrollEffect';

const Hero = () => {
  const { scrollToElement } = useSmoothScroll();
  const parallaxOffset = useParallax(0.08);
  return (
    <section id="home" className="hero section-frame">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Software developer · Hyderabad, India</p>
        <h1>Building useful things<br /><em>for real people.</em></h1>
        <p className="hero-intro">I’m Harish — a full-stack engineer who enjoys turning messy problems into clear, dependable products. I work across Java, Spring Boot, React, and the details in between.</p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={() => scrollToElement('projects', 84)}>View my work <ArrowDownRight size={17} /></button>
          <button className="button button-quiet" onClick={() => scrollToElement('contact', 84)}>Contact me <Mail size={16} /></button>
        </div>
        <div className="hero-links">
          <a href="https://github.com/nampallyharish4" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/nampallyharish4/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="hero-art" style={{ transform: `translate3d(0, ${Math.min(parallaxOffset, 70)}px, 0)` }} aria-label="A visual representation of a code editor">
        <div className="art-note">currently open to<br /><strong>frontend & full-stack roles</strong></div>
        <div className="hero-image-frame">
          <img
            src="/hero-profile.png"
            alt="Nampally Harish"
          />
          <span>Portrait / 01</span>
        </div>
        <div className="code-paper">
          <div className="code-top"><span /><span /><span /><small>harish.tsx</small></div>
          <pre><code><b>const</b> <i>work</i> = {'{'}{'\n'}  curiosity: <u>true</u>,{'\n'}  craft: <u>'carefully'</u>,{'\n'}  ship: <u>'often'</u>{'\n'}{'}'};</code></pre>
          <div className="code-line" />
          <p>make it simple. make it last.</p>
        </div>
        <div className="art-stamp">01<br /><span>SELECTED<br />WORK</span></div>
      </div>
      <button className="scroll-cue" onClick={() => scrollToElement('about', 84)}><span>Scroll to explore</span><ArrowDownRight size={17} /></button>
    </section>
  );
};

export default Hero;
