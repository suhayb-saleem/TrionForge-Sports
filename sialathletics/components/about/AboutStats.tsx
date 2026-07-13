'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

function StatCounter({ target, suffix, label, duration = 2000, isMillions = false }: {
  target: number; suffix: string; label: string; duration?: number; isMillions?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor(ease(p) * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  const display = isMillions ? `${(count / 1_000_000).toFixed(1)}M` : count.toLocaleString();

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--red)', lineHeight: 1 }}>
        {display}{suffix}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
        {label}
      </div>
    </div>
  );
}

export default function AboutStats() {
  return (
    <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--white-08)', borderBottom: '1px solid var(--white-08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {[
          { target: 10, suffix: '+', label: 'Years Manufacturing', duration: 1800 },
          { target: 300, suffix: '+', label: 'Global Clients', duration: 2000 },
          { target: 50, suffix: '+', label: 'Countries Reached', duration: 1600 },
          { target: 1_000_000, suffix: '+', label: 'Products Built', duration: 2200, isMillions: true },
        ].map((s, i) => (
          <div key={i} style={{ borderRight: i < 3 ? '1px solid var(--white-08)' : 'none' }}>
            <StatCounter {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
