import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
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
        scrolled ? 'px-4 sm:px-6' : 'px-6'
      }`}
    >
      <div 
        className={`max-w-5xl mx-auto transition-all duration-500 overflow-hidden ${
          scrolled ? 'glass-ultra rounded-3xl shadow-2xl px-6' : 'bg-transparent px-0'
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 group hover:scale-105 transition-transform"
          >
            <Sparkles className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              NH
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToElement(item.id, 100)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-500 rounded-full" />
                )}
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
              </button>
            ))}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass-light"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-500 ${
            isOpen ? 'max-h-64 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
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
                className={`px-4 py-3 rounded-xl text-left font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'glass-light hover:glass-medium text-gray-700 dark:text-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
