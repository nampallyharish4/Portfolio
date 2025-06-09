import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  easing?: string;
  distance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  className = '',
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  distance = 60
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin: '100px 0px -50px 0px' // Start animation earlier for smoother experience
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.95) rotate(0deg)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.95) rotate(0deg)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.95) rotate(1deg)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.95) rotate(-1deg)`;
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.8) rotate(0deg)';
      case 'fade':
        return `translate3d(0, ${distance * 0.3}px, 0) scale(0.98) rotate(0deg)`;
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.95) rotate(0deg)`;
    }
  };

  const getFilter = () => {
    return isVisible ? 'blur(0px)' : 'blur(2px)';
  };

  const getOpacity = () => {
    return isVisible ? 1 : 0;
  };

  return (
    <div
      ref={elementRef}
      className={`${className} smooth-reveal`}
      style={{
        opacity: getOpacity(),
        transform: getTransform(),
        filter: getFilter(),
        transition: `all ${duration}ms ${easing}`,
        willChange: 'transform, opacity, filter',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;