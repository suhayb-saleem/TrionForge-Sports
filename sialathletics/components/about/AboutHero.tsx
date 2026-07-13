'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function AboutHero() {
  const headline = 'WHO WE ARE';
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
        paddingTop: '140px',
        paddingBottom: '5rem',
      }}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '1rem' }}
        >
          <SectionLabel>OUR STORY</SectionLabel>
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
          style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--white-60)' }}
        >
          Built in Sialkot. Trusted worldwide.
        </motion.p>
      </div>
    </section>
  );
}
