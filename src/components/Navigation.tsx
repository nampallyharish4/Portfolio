import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useSmoothScroll, useActiveSection } from '../hooks/useScrollEffect';
import Card3D from './Card3D';

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
          scrolled ? 'glass-ultra rounded-3xl px-6' : 'bg-transparent px-0'
        }`}
        style={scrolled ? {
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15), 0 8px 20px -10px rgba(0,0,0,0.1)',
        } : {}}
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Card3D maxTilt={10} scale={1.05}>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 group transition-transform p-2 -m-2"
            >
              <Sparkles className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                NH
              </span>
            </button>
          </Card3D>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Card3D key={item.id} maxTilt={8} scale={1.05}>
                <button
                  onClick={() => scrollToElement(item.id, 100)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                  <div className="absolute inset-0 glass-light opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                </button>
              </Card3D>
            ))}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
            <Card3D maxTilt={15} scale={1.1}>
              <ThemeToggle />
            </Card3D>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Card3D maxTilt={15} scale={1.1}>
              <ThemeToggle />
            </Card3D>
            <Card3D maxTilt={12} scale={1.08}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl glass-light"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </Card3D>
          </div>
        </div>

        <div 
          className={`md:hidden transition-all duration-500 ${
            isOpen ? 'max-h-64 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Card3D key={item.id} maxTilt={6} scale={1.02}>
                <button
                  onClick={() => {
                    scrollToElement(item.id, 80);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                      : 'glass-light hover:glass-medium text-gray-700 dark:text-gray-200'
                  }`}
                  style={activeSection === item.id ? {
                    boxShadow: '0 10px 25px -8px rgba(59, 130, 246, 0.4)',
                  } : {}}
                >
                  {item.label}
                </button>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
