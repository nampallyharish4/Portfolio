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
    const node = elementRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          timer = setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
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

  return (
    <div
      ref={elementRef}
      className={`${className} smooth-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{
        transform: getTransform(),
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0)' : 'blur(4px)',
        willChange: 'transform, opacity, filter',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;