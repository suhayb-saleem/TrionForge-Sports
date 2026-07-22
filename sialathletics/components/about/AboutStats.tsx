'use client';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

// Qualitative capability badges — no fabricated tenure/client/volume figures.
const capabilities = [
  { label: 'OEM & ODM Manufacturing' },
  { label: 'Factory-Direct Pricing' },
  { label: 'Custom Carbon Fiber Builds' },
  { label: 'Worldwide Shipping' },
];

export default function AboutStats() {
  return (
    <section style={{ background: 'var(--hp-paper)', borderBottom: '1px solid var(--hp-ink-line)' }}>
      <div className="hp-stat-grid">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.label}
            className="hp-metric"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          >
            <div className="hp-metric__label" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--hp-ink)', fontWeight: 700, letterSpacing: '0.01em' }}>
              {c.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
