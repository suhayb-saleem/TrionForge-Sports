'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const steps = [
  { num: '01', title: 'INQUIRY & BRIEF', desc: 'Share your specs, target price, and order volume. We respond within 24 hours.' },
  { num: '02', title: 'SAMPLING', desc: 'Receive physical samples for testing and approval within 3-4 weeks.' },
  { num: '03', title: 'PRODUCTION', desc: 'Full batch manufacturing with daily progress updates and QC checkpoints.' },
  { num: '04', title: 'QUALITY CHECK', desc: 'Final inspection against agreed specs. USAPA compliance verified per batch.' },
  { num: '05', title: 'DELIVERY', desc: 'Export cleared, freight arranged, tracking provided door to warehouse.' },
];

export default function ProcessTimeline() {
  return (
    <section style={{ background: 'var(--bg-raised)', padding: '6rem 1.5rem', borderTop: '1px solid var(--white-08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--white)', lineHeight: 0.95, marginTop: '0.75rem' }}>
            FROM CONCEPT TO CHAMPION.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '1px', background: 'var(--red-border)', zIndex: 0 }} />
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '0 1rem', position: 'relative', zIndex: 1 }}
            >
              <div style={{ width: '48px', height: '48px', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)' }}>
                {num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white-60)', lineHeight: 1.6 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
