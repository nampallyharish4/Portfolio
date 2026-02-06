import { useEffect, useState, useCallback } from 'react';

export const useScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollVelocity, setScrollVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = Date.now();
    let ticking = false;

    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTimestamp - lastTimestamp;
      
      setScrollDirection(deltaY > 0 ? 'down' : 'up');
      setScrollY(currentScrollY);
      setScrollVelocity(Math.abs(deltaY / deltaTime));
      
      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection, scrollVelocity };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY * speed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const absoluteTop = elementRect.top + window.pageYOffset;
    const targetPosition = absoluteTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToElement, scrollToTop };
};

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200;
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionBottom = sectionTop + sectionHeight;
              
              if (scrollPosition >= sectionTop - 300 && scrollPosition < sectionBottom - 100) {
                if (activeSection !== sections[i]) {
                  setActiveSection(sections[i]);
                }
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return activeSection;
};

// New hook for enhanced scroll animations
export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollTop / docHeight;
          
          setScrollProgress(progress);
          setIsScrolling(true);
          
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
          }, 150);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return { scrollProgress, isScrolling };
};

// Enhanced intersection observer hook for smoother reveals
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
          if (entry.isIntersecting && !hasIntersected) {
            setHasIntersected(true);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px 0px -50px 0px',
          ...options
        }
      );
      
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
};