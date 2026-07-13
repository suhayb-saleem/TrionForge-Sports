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
    <section style={{ background: 'var(--bg-light)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <SectionLabel showSlash={true}>WHAT DRIVES US</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-dark)', lineHeight: 0.95, marginTop: '0.75rem' }}>
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
              style={{
                background: 'var(--bg-light-alt)',
                border: '1px solid var(--border-light)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                justifyContent: 'flex-start'
              }}
              className="group hover:border-[var(--red)]/40 hover:shadow-[0_20px_45px_rgba(232,0,28,0.05)] transition-all duration-300"
            >
              <Icon size={24} color="var(--red)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-dark)', margin: 0, textTransform: 'uppercase' }} className="group-hover:text-[var(--red)] transition-colors duration-200">{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.75 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
