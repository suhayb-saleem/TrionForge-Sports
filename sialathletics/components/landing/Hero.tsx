'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  // Fade out more quickly (by 40% scroll) so it doesn't cross the section edge while visible
  const opacity = useTransform(scrollYProgress, [0, 0.40], [1, 0]);

  // Word stagger for headline
  const words = ['PRECISION', 'BUILT.', 'PERFORMANCE', 'DRIVEN.'];

  return (
    <section ref={ref} style={{
      position: 'relative', height: '100vh', minHeight: '680px',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', background: 'var(--bg-base)',
    }}>
      {/* Background: subtle red radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(232,0,28,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Horizontal rule lines — architectural detail */}
      <div style={{ position: 'absolute', top: '20%', left: 0, right: 0, height: '1px', background: 'var(--white-04)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '20%', left: 0, right: 0, height: '1px', background: 'var(--white-04)', zIndex: 0 }} />

      <div className="hero-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 1, display: 'grid', gap: '4rem', alignItems: 'center', paddingTop: '72px' }}>

        {/* LEFT — Text */}
        <motion.div style={{ y: textY, opacity }}>
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: '32px', height: '1.5px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red)', fontWeight: 600 }}>
              SIAL ATHLETICS
            </span>
          </motion.div>

          {/* Headline — word by word */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem, 7.5vw, 7rem)', lineHeight: 0.88, letterSpacing: '0.02em', marginBottom: '2rem', overflow: 'hidden' }}>
            {words.map((word, i) => (
              <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'block', color: i % 2 === 0 ? 'var(--white)' : 'var(--white-90)' }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--white-60)', maxWidth: '420px', marginBottom: '2.5rem' }}>
            Premium pickleball paddles and padel rackets. Factory-direct from Sialkot to the US market.
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/catalogue" style={{
              background: 'var(--red)', color: 'var(--white)', padding: '14px 32px',
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}>
              VIEW PRODUCTS
            </Link>
            <Link href="/contact" style={{
              border: '1px solid var(--white-30)', color: 'var(--white)', padding: '14px 32px',
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--white)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--white-30)'; }}>
              GET A QUOTE
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}
            className="hero-trust-row"
            style={{ display: 'flex', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--white-08)', flexWrap: 'wrap' }}>
            {['USAPA Compliant', 'Carbon Fiber Build', 'Factory Direct', 'US Ready'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--white-60)', letterSpacing: '0.06em' }}>{t}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Product image with parallax */}
        <motion.div style={{ y: imageY, opacity }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-image-col">
          <div style={{ position: 'relative', aspectRatio: '4/5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Glow behind product */}
            <div style={{ position: 'absolute', inset: '10%', background: 'radial-gradient(ellipse at center, rgba(232,0,28,0.12) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
            {/* Product image with ellipse fade mask so edges and corners blend perfectly */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              height: '100%',
              maskImage: 'radial-gradient(ellipse 60% 80% at center, black 30%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at center, black 30%, transparent 85%)',
            }}>
              <Image
                src="/images/products/sa-apex-elongated.png"
                alt="SIAL Athletics Premium Pickleball Paddle"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive grid for hero */}
      <style>{`
        .hero-inner { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr; gap: 2rem; padding-top: 100px; }
          .hero-image-col { order: -1; max-width: 300px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
