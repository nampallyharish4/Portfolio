import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -40, y: -40 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = () => setActive(true);
    const leave = () => setActive(false);
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseenter', enter);
      element.addEventListener('mouseleave', leave);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseenter', enter);
        element.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
  return <span className={`custom-cursor ${active ? 'cursor-active' : ''}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />;
};

export default Cursor;
