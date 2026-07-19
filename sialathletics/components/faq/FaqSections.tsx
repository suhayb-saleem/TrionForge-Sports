'use client';
import { useId, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { faqCategories } from '@/data/faq';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FaqSections() {
  const [open, setOpen] = useState<string | null>(null);
  const id = useId();

  return (
    <section style={{ background: 'var(--hp-black)', padding: 'var(--hp-gap) var(--hp-pad)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
        {faqCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--hp-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--hp-red)' }}>
                0{ci + 1}
              </span>
              <h2 className="display-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: 'var(--hp-ivory)', margin: 0 }}>
                {cat.title}
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '720px' }}>
              {cat.framing}
            </p>

            <div style={{ borderTop: '1px solid var(--hp-hair)' }}>
              {cat.items.map((item, index) => {
                const key = `${cat.id}-${index}`;
                const isOpen = open === key;
                const panelId = `${id}-${key}`;
                return (
                  <div key={item.q} style={{ borderBottom: '1px solid var(--hp-hair)' }}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', color: 'var(--hp-ivory)' }}
                    >
                      <h3 className="display-title" style={{ fontSize: 'clamp(1.02rem, 1.8vw, 1.25rem)', margin: 0, fontWeight: 600 }}>{item.q}</h3>
                      {isOpen ? <Minus size={18} color="var(--hp-red)" style={{ flexShrink: 0 }} /> : <Plus size={18} color="var(--hp-red)" style={{ flexShrink: 0 }} />}
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
                          <p className="body-copy" style={{ margin: 0, paddingBottom: '1.5rem', fontSize: '.94rem', maxWidth: '720px' }}>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {cat.related && (
              <div style={{ marginTop: '1.25rem' }}>
                <Link href={cat.related.href} className="hp-link">
                  {cat.related.label} <b aria-hidden="true">↗</b>
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
