'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const standards = [
  { title: 'USAPA APPROVED SPECS', desc: 'All paddles meet USA Pickleball Association equipment specifications for surface texture, paddle size, and performance limits.' },
  { title: 'US IMPORT READY', desc: 'SIAL Athletics products are manufactured and documented for smooth US Customs clearance. HTS classification and compliance docs included.' },
  { title: 'BATCH LEVEL REPORTING', desc: 'Every production order comes with a QC report documenting tested samples, pass rates, and any corrective actions taken.' },
];

export default function QualityStandards() {
  return (
    <section style={{ background: '#141414', padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <SectionLabel>WHAT WE COMPLY WITH</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 0.95, marginTop: '0.75rem' }}>
            THE STANDARDS WE BUILD TO.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {standards.map(({ title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', padding: '2rem', borderTop: '3px solid #E8001C' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#8A8A8A', lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
