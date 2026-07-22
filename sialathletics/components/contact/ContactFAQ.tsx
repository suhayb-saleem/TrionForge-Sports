'use client';
import { useId, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const faqs = [
  { q: 'What is your minimum order quantity?', a: 'Our standard MOQ is 50 units for pickleball paddles and 24 units for padel rackets. Sample orders (1-5 units) are available at a higher per-unit cost.' },
  { q: 'How long does sampling take?', a: 'Physical samples take 3-4 weeks from specification approval. We send photos and weight specs before shipping for your initial review.' },
  { q: 'Do you ship directly to the US?', a: 'Yes. We handle all export documentation and can coordinate freight directly to your US warehouse or 3PL of choice.' },
  { q: 'Can I put my own branding on the rackets?', a: 'Absolutely. We offer full private-label ODM programs including custom graphics, colorways, grip logos, edge guard branding, and retail packaging.' },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <section style={{ background: 'var(--hp-paper)', padding: 'var(--hp-gap) var(--hp-pad)', borderTop: '1px solid var(--hp-ink-line)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <SectionLabel>Common questions</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.35rem, 4vw, 3.2rem)', marginTop: '.9rem' }}>Quick answers.</h2>
        </div>
        <div>
          {faqs.map(({ q, a }, index) => {
            const isOpen = open === index;
            const panelId = `${id}-${index}`;
            return (
              <div key={q} style={{ borderBottom: '1px solid var(--hp-ink-line)' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', color: 'var(--hp-ink)' }}
                >
                  <span className="display-title" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>{q}</span>
                  {isOpen ? <Minus size={18} color="var(--hp-red)" /> : <Plus size={18} color="var(--hp-red)" />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="body-copy" style={{ margin: '0', paddingBottom: '1.5rem', fontSize: '.94rem' }}>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/faq" className="hp-link">
            See the full FAQ — MOQ, customization, QC, and shipping <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
