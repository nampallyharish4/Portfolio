import { useRef, useState, useCallback, useEffect } from 'react';

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
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || disabled) return;

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
    },
    [maxTilt, scale, disabled]
  );

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      setIsHovered(true);
    }
  }, [disabled]);

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
    if (!element || disabled) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, disabled]);

  const style: React.CSSProperties = {
    transform: `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
    transition: isHovered ? `transform ${speed * 0.3}ms ease-out` : `transform ${speed}ms ease-out`,
    transformStyle: 'preserve-3d',
  };

  const glareStyle: React.CSSProperties = glare
    ? {
        position: 'absolute' as const,
        inset: 0,
        borderRadius: 'inherit',
        background: `radial-gradient(circle at ${50 + tilt.x * 3}% ${50 + tilt.y * 3}%, rgba(255,255,255,${isHovered ? 0.15 : 0}) 0%, transparent 60%)`,
        pointerEvents: 'none' as const,
        transition: `opacity ${speed}ms ease-out`,
        opacity: isHovered ? 1 : 0,
      }
    : {};

  return { ref, style, glareStyle, tilt, isHovered };
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setNormalizedPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mousePosition, normalizedPosition };
};

export const useDepthParallax = (intensity: number = 1) => {
  const { normalizedPosition } = useMousePosition();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLayerStyle = (depth: number): React.CSSProperties => {
    const moveX = normalizedPosition.x * depth * intensity * 20;
    const moveY = normalizedPosition.y * depth * intensity * 20;
    const scrollMove = scrollY * depth * 0.1;

    return {
      transform: `translate3d(${moveX}px, ${moveY - scrollMove}px, ${depth * 50}px)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return { getLayerStyle, normalizedPosition, scrollY };
};

export const use3DCard = <T extends HTMLElement>(options: Use3DTiltOptions = {}) => {
  const tiltHook = use3DTilt<T>(options);
  
  const cardStyle: React.CSSProperties = {
    ...tiltHook.style,
    boxShadow: tiltHook.isHovered
      ? `
        0 ${20 + Math.abs(tiltHook.tilt.rotateX)}px ${40 + Math.abs(tiltHook.tilt.rotateX) * 2}px rgba(0, 0, 0, 0.15),
        0 ${10 + Math.abs(tiltHook.tilt.rotateX) * 0.5}px ${20 + Math.abs(tiltHook.tilt.rotateX)}px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `
      : `
        0 10px 30px rgba(0, 0, 0, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.05)
      `,
  };

  return { ...tiltHook, cardStyle };
};

export const useScrollDepth = () => {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setDepth(scrollTop / docHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return depth;
};
