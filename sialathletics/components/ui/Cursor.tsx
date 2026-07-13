'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener('mousemove', move);

    const animate = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (dot.current) { dot.current.style.left = `${x}px`; dot.current.style.top = `${y}px`; }
      if (ring.current) { ring.current.style.left = `${rx}px`; ring.current.style.top = `${ry}px`; }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Scale up on hover of interactive elements
    const over = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(2.5)');
    const out = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(1)');
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', over); el.addEventListener('mouseleave', out); });

    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Only show on non-touch devices
  return (
    <>
      <div ref={dot} style={{ position: 'fixed', width: '5px', height: '5px', background: 'var(--red)', borderRadius: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference', transition: 'width 0.15s, height 0.15s' }} />
      <div ref={ring} style={{ position: 'fixed', width: '28px', height: '28px', border: '1px solid var(--red)', borderRadius: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 9998, opacity: 0.6, transition: 'transform 0.3s var(--ease)', }} />
      <style>{`@media (pointer: coarse) { * { cursor: auto !important; } }`}</style>
    </>
  );
}
