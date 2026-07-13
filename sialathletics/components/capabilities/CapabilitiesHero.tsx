'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

export default function CapabilitiesHero() {
  const headline = 'END-TO-END MANUFACTURING';
  const words = headline.split(' ');

  return (
    <section
      style={{
        background: 'var(--bg-raised)',
        borderBottom: '1px solid var(--white-08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '160px',
        paddingBottom: '5rem',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white-60)', marginBottom: '2rem' }}>
          <Link href="/" style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s' }}
             onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
             onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
            Home
          </Link>
          <span style={{ color: 'var(--red)', fontWeight: 'bold' }}>/</span>
          <span style={{ color: 'var(--white)', fontWeight: 700 }}>Capabilities</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '1rem' }}
        >
          <SectionLabel showSlash={true}>WHAT WE DO</SectionLabel>
        </motion.div>
        
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.95, color: 'var(--white)', margin: '1rem 0', overflow: 'hidden' }}>
          {words.map((word, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.35em' }}>
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--white-60)', maxWidth: '520px', margin: '0.5rem auto 0', textAlign: 'center' }}
        >
          From concept to courier — we handle the full production cycle.
        </motion.p>
      </div>
    </section>
  );
}
