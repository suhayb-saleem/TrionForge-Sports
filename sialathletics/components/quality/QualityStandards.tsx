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
    <section style={{ background: 'var(--bg-base)', padding: '6rem 1.5rem', borderTop: '1px solid var(--white-08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <SectionLabel showSlash={true}>WHAT WE COMPLY WITH</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', lineHeight: 0.95, marginTop: '0.75rem' }}>
            THE STANDARDS WE BUILD TO.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {standards.map(({ title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)', borderTop: '3px solid var(--red)', padding: '2.5rem 2rem' }}
              className="group hover:border-x-[var(--red)]/30 hover:border-b-[var(--red)]/30 hover:shadow-[0_20px_45px_rgba(232,0,28,0.15)] transition-all duration-300"
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', textTransform: 'uppercase' }} className="group-hover:text-[var(--red)] transition-colors duration-200">{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--white-60)', lineHeight: 1.75 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
