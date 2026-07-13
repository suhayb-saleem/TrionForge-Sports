'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const materials = [
  'T700 Carbon Fiber', 'T800 Carbon Fiber', '3K Woven Carbon', 'Fiberglass Composite',
  'EVA Foam Core', 'Polypropylene Honeycomb', 'HR3 Rubber Core', 'Kevlar Reinforcement',
];

export default function MaterialsBadges() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '5rem 1.5rem', borderTop: '1px solid var(--white-08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <SectionLabel>MATERIALS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--white)', lineHeight: 0.95, marginTop: '0.75rem' }}>
            MATERIALS WE WORK WITH.
          </h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {materials.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)', borderLeft: '2px solid var(--red)', padding: '0.6rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--white)', letterSpacing: '0.03em' }}
            >
              {m}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
