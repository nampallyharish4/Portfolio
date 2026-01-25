import React, { useRef, useState, useCallback } from 'react';

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
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || disabled) return;

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
    },
    [maxTilt, disabled]
  );

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  const cardStyle: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? scale : 1}, ${isHovered ? scale : 1}, 1) translateZ(${isHovered ? depth : 0}px)`,
    transition: isHovered ? 'transform 150ms ease-out' : 'transform 500ms ease-out',
    transformStyle: 'preserve-3d',
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
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-inherit overflow-hidden"
          style={{
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${isHovered ? 0.2 : 0}) 0%, transparent 50%)`,
            transition: 'opacity 300ms ease-out',
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: 'inherit',
          boxShadow: isHovered
            ? `0 ${25 + Math.abs(tilt.rotateX)}px ${50 + Math.abs(tilt.rotateX) * 2}px rgba(0, 0, 0, 0.2), 0 ${10}px ${20}px rgba(0, 0, 0, 0.1)`
            : '0 10px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)',
          transition: 'box-shadow 300ms ease-out',
        }}
      />
    </div>
  );
};

export default Card3D;
