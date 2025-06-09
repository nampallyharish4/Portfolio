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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    console.log('🚀 Navigation clicked:', sectionId);
    // Increased offset to account for navbar height and provide better positioning
    scrollToElement(sectionId, 120);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    console.log('🏠 Logo clicked - scrolling to top');
    scrollToTop();
    setIsOpen(false);
  };

  const getNavItemClass = (sectionId: string) => {
    const baseClass = "relative px-6 py-3 font-medium transition-all duration-500 hover:scale-105 smooth-hover cursor-pointer group outline-none focus:outline-none glass-light rounded-xl hover:glass-medium";
    const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === 'home');
    
    if (isActive) {
      return `${baseClass} text-blue-600 dark:text-blue-400 glass-medium`;
    }
    
    return `${baseClass} text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400`;
  };

  const getMobileNavItemClass = (sectionId: string) => {
    const baseClass = "relative text-left p-4 transition-all duration-500 hover:scale-105 smooth-hover cursor-pointer group outline-none focus:outline-none glass-light rounded-xl hover:glass-medium";
    const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === 'home');
    
    if (isActive) {
      return `${baseClass} text-blue-600 dark:text-blue-400 glass-medium`;
    }
    
    return `${baseClass} text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400`;
  };

  const UnderlineEffect = ({ isActive }: { isActive: boolean }) => (
    <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-all duration-500 ${
      isActive ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100'
    }`}></div>
  );

  const MobileUnderlineEffect = ({ isActive }: { isActive: boolean }) => (
    <div className={`absolute bottom-1 left-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-all duration-500 ${
      isActive ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
    }`}></div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-20 relative">
          {/* Logo - Positioned absolutely to the left */}
          <div className="absolute left-0">
            <button 
              onClick={handleLogoClick}
              className="group flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-500 hover:scale-110 smooth-hover cursor-pointer outline-none focus:outline-none glass-light hover:glass-medium"
            >
              <Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-500 group-hover:rotate-180" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                NH
              </span>
            </button>
          </div>

          {/* Centered Desktop Navigation with Glass Boxes */}
          <div className="hidden md:flex items-center space-x-3 glass-strong rounded-2xl p-3 shadow-lg">
            <button 
              onClick={handleLogoClick}
              className={getNavItemClass('home')}
            >
              <span className="relative z-10">Home</span>
              <UnderlineEffect isActive={activeSection === 'home'} />
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={getNavItemClass('about')}
            >
              <span className="relative z-10">About</span>
              <UnderlineEffect isActive={activeSection === 'about'} />
            </button>
            <button 
              onClick={() => handleNavClick('skills')}
              className={getNavItemClass('skills')}
            >
              <span className="relative z-10">Skills</span>
              <UnderlineEffect isActive={activeSection === 'skills'} />
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className={getNavItemClass('projects')}
            >
              <span className="relative z-10">Projects</span>
              <UnderlineEffect isActive={activeSection === 'projects'} />
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={getNavItemClass('contact')}
            >
              <span className="relative z-10">Contact</span>
              <UnderlineEffect isActive={activeSection === 'contact'} />
            </button>
          </div>

          {/* Theme Toggle and Mobile Menu - Positioned absolutely to the right */}
          <div className="absolute right-0 flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button with glass box */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-4 rounded-2xl transition-all duration-500 hover:scale-110 smooth-hover cursor-pointer outline-none focus:outline-none glass-light hover:glass-medium"
            >
              <div className="relative w-6 h-6">
                <X className={`absolute inset-0 w-6 h-6 text-gray-800 dark:text-gray-100 transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
                <Menu className={`absolute inset-0 w-6 h-6 text-gray-800 dark:text-gray-100 transition-all duration-500 ${isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Glass Boxes */}
        <div className={`md:hidden transition-all duration-700 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="glass-strong rounded-2xl mt-4 mb-6 p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 dark:from-black/10 to-transparent"></div>
            <div className="relative flex flex-col space-y-3">
              <button 
                onClick={handleLogoClick}
                className={getMobileNavItemClass('home')}
              >
                <span className="relative z-10">Home</span>
                <MobileUnderlineEffect isActive={activeSection === 'home'} />
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={getMobileNavItemClass('about')}
              >
                <span className="relative z-10">About</span>
                <MobileUnderlineEffect isActive={activeSection === 'about'} />
              </button>
              <button 
                onClick={() => handleNavClick('skills')}
                className={getMobileNavItemClass('skills')}
              >
                <span className="relative z-10">Skills</span>
                <MobileUnderlineEffect isActive={activeSection === 'skills'} />
              </button>
              <button 
                onClick={() => handleNavClick('projects')}
                className={getMobileNavItemClass('projects')}
              >
                <span className="relative z-10">Projects</span>
                <MobileUnderlineEffect isActive={activeSection === 'projects'} />
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={getMobileNavItemClass('contact')}
              >
                <span className="relative z-10">Contact</span>
                <MobileUnderlineEffect isActive={activeSection === 'contact'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;