import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useActiveSection, useSmoothScroll } from '../hooks/useScrollEffect';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToElement, scrollToTop } = useSmoothScroll();
  const activeSection = useActiveSection();
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const goTo = (id: string) => {
    scrollToElement(id, 84);
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <button className="wordmark" onClick={scrollToTop} aria-label="Back to top">
          <span className="wordmark-mark">NH</span>
          <span className="wordmark-name">Nampally Harish</span>
        </button>
        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <button className={activeSection === item.id ? 'nav-active' : ''} key={item.id} onClick={() => goTo(item.id)}>{item.label}</button>
          ))}
          <a href="/Nampally_Harish_Resume.pdf" download className="nav-resume">Resume <span>↗</span></a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
