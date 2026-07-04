'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const faqs = [
  { q: 'What is your minimum order quantity?', a: 'Our standard MOQ is 50 units for pickleball paddles and 24 units for padel rackets. Sample orders (1-5 units) are available at a higher per-unit cost.' },
  { q: 'How long does sampling take?', a: 'Physical samples take 3-4 weeks from specification approval. We send photos and weight specs before shipping for your initial review.' },
  { q: 'Do you ship directly to the US?', a: 'Yes. We handle all export documentation and can coordinate freight directly to your US warehouse or 3PL of choice.' },
  { q: 'Can I put my own branding on the paddles?', a: 'Absolutely. We offer full private label ODM programs including custom graphics, colorways, grip logos, edge guard branding, and retail packaging.' },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ background: '#0b0b0b', padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <SectionLabel>COMMON QUESTIONS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', lineHeight: 0.95, marginTop: '0.75rem' }}>QUICK ANSWERS.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#fff', letterSpacing: '0.03em' }}>{q}</span>
                {open === i ? <Minus size={18} color="#D71920" /> : <Plus size={18} color="#D71920" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#9A9A9A', lineHeight: 1.7, paddingBottom: '1.5rem' }}>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
