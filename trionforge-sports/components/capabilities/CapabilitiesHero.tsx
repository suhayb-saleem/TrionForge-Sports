'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function CapabilitiesHero() {
  return (
    <section style={{ background: '#0b0b0b', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '120px', paddingBottom: '4rem' }}>
      <div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionLabel>WHAT WE DO</SectionLabel>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: '#fff', lineHeight: 0.95, margin: '1rem 0' }}>
          END-TO-END MANUFACTURING
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ color: '#9A9A9A', fontSize: '1.125rem', fontFamily: 'var(--font-body)', maxWidth: '520px' }}>
          From concept to courier — we handle the full production cycle.
        </motion.p>
      </div>
    </section>
  );
}
