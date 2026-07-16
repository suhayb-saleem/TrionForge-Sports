'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useScroll();

  // Fade out over the first 400px of scrolling
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 150]);

  const words = ['THE', 'FUTURE', 'OF', 'PADEL.'];

  return (
    <section style={{
      position: 'relative', height: '100vh', minHeight: '680px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(closest-side at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
      pointerEvents: 'none' // Let interactions pass through to the video if needed, except for buttons
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', textAlign: 'center', pointerEvents: 'auto' }}>

        <motion.div style={{
          y: textY,
          opacity,
          display: 'inline-block',
          width: '100%',
          textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6)',
          color: '#ffffff'
        }}>
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#E8001C' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E8001C', fontWeight: 700 }}>
              SIAL ATHLETICS
            </span>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#E8001C' }} />
          </motion.div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '0.02em', marginBottom: '1.5rem', overflow: 'hidden' }}>
            {words.map((word, i) => (
              <span key={i} style={{ display: 'inline-block', overflow: 'hidden', paddingRight: '0.2em' }}>
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'inline-block', color: '#ffffff' }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
            Scroll to deconstruct the engineering behind premium performance.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.2)', margin: '0 auto', overflow: 'hidden', position: 'relative' }}>
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                style={{ width: '100%', height: '50%', background: '#E8001C' }}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
