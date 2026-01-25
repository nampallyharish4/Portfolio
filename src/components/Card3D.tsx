import React, { useRef, useState, useCallback, useEffect } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  depth?: number;
  disabled?: boolean;
}

const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  depth = 20,
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || disabled || prefersReducedMotion) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const percentX = mouseX / (rect.width / 2);
        const percentY = mouseY / (rect.height / 2);

        setTilt({
          rotateX: -percentY * maxTilt,
          rotateY: percentX * maxTilt,
        });

        setGlarePos({
          x: 50 + percentX * 30,
          y: 50 + percentY * 30,
        });
      });
    },
    [maxTilt, disabled, prefersReducedMotion]
  );

  const handleMouseEnter = () => {
    if (!disabled && !prefersReducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  const isEffectDisabled = disabled || prefersReducedMotion;

  const cardStyle: React.CSSProperties = isEffectDisabled
    ? {}
    : {
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? scale : 1}, ${isHovered ? scale : 1}, 1) translateZ(${isHovered ? depth : 0}px)`,
        transition: isHovered ? 'transform 150ms ease-out' : 'transform 500ms ease-out',
        transformStyle: 'preserve-3d' as const,
        willChange: isHovered ? 'transform' : 'auto',
      };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && !isEffectDisabled && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${isHovered ? 0.15 : 0}) 0%, transparent 50%)`,
            transition: 'opacity 300ms ease-out',
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      {!isEffectDisabled && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: 'inherit',
            boxShadow: isHovered
              ? `0 ${20 + Math.abs(tilt.rotateX) * 0.5}px ${40 + Math.abs(tilt.rotateX)}px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.08)`
              : '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
            transition: 'box-shadow 300ms ease-out',
          }}
        />
      )}
    </div>
  );
};

export default Card3D;
