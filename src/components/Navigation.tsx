import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useSmoothScroll, useActiveSection } from '../hooks/useScrollEffect';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToElement, scrollToTop } = useSmoothScroll();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        scrolled || isOpen ? 'px-6 sm:px-10 lg:px-14' : 'px-8'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-500 overflow-hidden ${
          scrolled || isOpen
            ? 'glass-ultra rounded-[2rem] px-8 shadow-lg'
            : 'bg-transparent px-0'
        }`}
        style={
          scrolled
            ? {
                boxShadow:
                  '0 20px 40px -15px rgba(0,0,0,0.15), 0 8px 20px -10px rgba(0,0,0,0.1)',
              }
            : {}
        }
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 group transition-transform p-2 -m-2 hover:scale-105"
            aria-label="Go to top"
          >
            <Sparkles className="w-6 h-6 text-brand-500 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
              NH
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToElement(item.id, 100)}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 relative group hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full" />
                )}
                <div className="absolute inset-0 glass-light opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity -z-10" />
              </button>
            ))}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
            <a
              href="/Nampally_Harish_Resume.pdf"
              download
              className="px-4 py-2 rounded-2xl text-sm font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-500/10 transition-all flex items-center gap-1.5"
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-2xl glass-light hover:scale-105 transition-transform"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ${
            isOpen
              ? 'max-h-[30rem] opacity-100 py-6 pb-12'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToElement(item.id, 80);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 rounded-2xl text-left font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white'
                    : 'glass-light hover:glass-medium text-gray-700 dark:text-gray-200'
                }`}
                style={
                  activeSection === item.id
                    ? { boxShadow: '0 10px 25px -8px rgba(224, 125, 30, 0.4)' }
                    : {}
                }
              >
                {item.label}
              </button>
            ))}
            <a
              href="/Nampally_Harish_Resume.pdf"
              download
              className="px-4 py-3 rounded-2xl text-left font-semibold text-brand-600 dark:text-brand-400 glass-light hover:glass-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
