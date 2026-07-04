'use client';
import { motion } from 'motion/react';
import { Crosshair, Hammer, Eye, Clock } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const values = [
  { Icon: Crosshair, title: 'PRECISION', desc: 'Every gram, every millimeter engineered to spec. No shortcuts, no tolerance creep.' },
  { Icon: Hammer, title: 'CRAFTSMANSHIP', desc: "Sialkot's 100-year legacy in sporting goods. That heritage lives in every paddle we ship." },
  { Icon: Eye, title: 'TRANSPARENCY', desc: 'Direct factory relationships. No markup layers. You know exactly what you pay for and why.' },
  { Icon: Clock, title: 'RELIABILITY', desc: 'On-time delivery. Every order. Every time. Your production schedule is our commitment.' },
];

export default function AboutValues() {
  return (
    <section style={{ background: '#101010', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <SectionLabel>WHAT DRIVES US</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 0.95, marginTop: '0.75rem' }}>
            OUR CORE VALUES
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {values.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', padding: '2rem' }}
            >
              <Icon size={24} color="#D71920" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#9A9A9A', lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
