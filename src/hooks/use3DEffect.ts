import { useRef, useState, useCallback, useEffect } from 'react';

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setNormalizedPosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return { mousePosition, normalizedPosition, prefersReducedMotion };
};

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
  x: number;
  y: number;
}

interface Use3DTiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
  perspective?: number;
  glare?: boolean;
  disabled?: boolean;
}

export const use3DTilt = <T extends HTMLElement>(options: Use3DTiltOptions = {}) => {
  const {
    maxTilt = 15,
    scale = 1.02,
    speed = 500,
    perspective = 1000,
    glare = true,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const isDisabled = disabled || prefersReducedMotion;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || isDisabled) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const percentX = mouseX / (rect.width / 2);
        const percentY = mouseY / (rect.height / 2);

        const rotateX = -percentY * maxTilt;
        const rotateY = percentX * maxTilt;

        setTilt({
          rotateX,
          rotateY,
          scale,
          x: percentX * 10,
          y: percentY * 10,
        });
      });
    },
    [maxTilt, scale, isDisabled]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isDisabled) {
      setIsHovered(true);
    }
  }, [isDisabled]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      x: 0,
      y: 0,
    });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || isDisabled) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, isDisabled]);

  const style: React.CSSProperties = isDisabled ? {} : {
    transform: `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
    transition: isHovered ? `transform ${speed * 0.3}ms ease-out` : `transform ${speed}ms ease-out`,
    transformStyle: 'preserve-3d',
    willChange: isHovered ? 'transform' : 'auto',
  };

  const glareStyle: React.CSSProperties = glare && !isDisabled
    ? {
        position: 'absolute' as const,
        inset: 0,
        borderRadius: 'inherit',
        background: `radial-gradient(circle at ${50 + tilt.x * 3}% ${50 + tilt.y * 3}%, rgba(255,255,255,${isHovered ? 0.12 : 0}) 0%, transparent 60%)`,
        pointerEvents: 'none' as const,
        transition: `opacity ${speed}ms ease-out`,
        opacity: isHovered ? 1 : 0,
      }
    : {};

  return { ref, style, glareStyle, tilt, isHovered, isDisabled };
};

export const useDepthParallax = (intensity: number = 1) => {
  const { normalizedPosition, prefersReducedMotion } = useMousePosition();
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const getLayerStyle = (depth: number): React.CSSProperties => {
    if (prefersReducedMotion) return {};

    const moveX = normalizedPosition.x * depth * intensity * 15;
    const moveY = normalizedPosition.y * depth * intensity * 15;
    const scrollMove = scrollY * depth * 0.08;

    return {
      transform: `translate3d(${moveX}px, ${moveY - scrollMove}px, ${depth * 30}px)`,
      transition: 'transform 0.25s ease-out',
      willChange: 'transform',
    };
  };

  return { getLayerStyle, normalizedPosition, scrollY, prefersReducedMotion };
};

export const use3DCard = <T extends HTMLElement>(options: Use3DTiltOptions = {}) => {
  const tiltHook = use3DTilt<T>(options);
  
  const cardStyle: React.CSSProperties = tiltHook.isDisabled ? {} : {
    ...tiltHook.style,
    boxShadow: tiltHook.isHovered
      ? `
        0 ${18 + Math.abs(tiltHook.tilt.rotateX) * 0.5}px ${35 + Math.abs(tiltHook.tilt.rotateX)}px rgba(0, 0, 0, 0.12),
        0 ${8 + Math.abs(tiltHook.tilt.rotateX) * 0.3}px ${16 + Math.abs(tiltHook.tilt.rotateX) * 0.5}px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.08)
      `
      : `
        0 8px 24px rgba(0, 0, 0, 0.08),
        0 4px 12px rgba(0, 0, 0, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.04)
      `,
  };

  return { ...tiltHook, cardStyle };
};

export const useScrollDepth = () => {
  const [depth, setDepth] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setDepth(docHeight > 0 ? scrollTop / docHeight : 0);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return depth;
};
