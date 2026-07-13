'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ContactHero() {
  return (
    <section style={{ background: '#0f0f0f', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '120px', paddingBottom: '4rem' }}>
      <div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionLabel>{"LET'S TALK"}</SectionLabel>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: '#fff', lineHeight: 0.95, margin: '1rem 0' }}>
          GET IN TOUCH.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ color: '#C8C8C8', fontSize: '1.125rem', fontFamily: 'var(--font-body)' }}>
          Factory-direct quotes. Samples. Private label programs.
        </motion.p>
      </div>
    </section>
  );
}
