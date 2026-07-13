'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import Link from 'next/link';

function Counter({ to, suffix = '+', duration = 1800, isM = false }: { to: number; suffix?: string; duration?: number; isM?: boolean }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const ran = useRef(false);
  useEffect(() => {
    if (!inView || ran.current) return;
    ran.current = true;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.floor(ease(p) * to));
      if (p < 1) requestAnimationFrame(tick); else setN(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);
  const display = isM ? `${(n / 1_000_000).toFixed(0)}M` : n.toLocaleString();
  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { to: 10, label: 'YEARS MANUFACTURING', duration: 1600 },
  { to: 300, label: 'GLOBAL CLIENTS', duration: 1800 },
  { to: 50, label: 'COUNTRIES REACHED', duration: 1500 },
  { to: 1_000_000, label: 'PRODUCTS BUILT', duration: 2000, isM: true },
];

export default function AboutSection() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '8rem 1.5rem', borderTop: '1px solid var(--white-08)' }}>
      <div className="about-section-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '4rem', alignItems: 'center' }}>

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <SectionLabel showSlash={true}>ABOUT SIAL ATHLETICS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', color: 'var(--white)', lineHeight: 0.9, margin: '1.25rem 0 1.5rem' }}>
            YOUR EDGE STARTS<br />AT THE SOURCE.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--white-60)', marginBottom: '2.5rem', maxWidth: '480px' }}>
            SIAL Athletics manufactures premium pickleball paddles and padel rackets in Sialkot — Pakistan&apos;s sporting goods capital and source of 70% of the world&apos;s hand-stitched footballs. We bring factory precision and carbon fiber technology to the US market, direct.
          </p>
          <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '2px solid var(--red)', paddingBottom: '3px', transition: 'border-color 0.2s ease' }}>
            OUR STORY →
          </Link>
        </motion.div>

        {/* RIGHT — Stats */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--white-08)' }}>
          {stats.map(({ to, label, duration, isM }) => (
            <div key={label} style={{ background: 'var(--bg-card)', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1, letterSpacing: '0.02em' }}>
                <Counter to={to} duration={duration} isM={isM} />
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700 }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .about-section-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .about-section-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
