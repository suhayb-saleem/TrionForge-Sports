'use client';
import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { contactFaqs as faqs } from '@/data/contactFaq';

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
                  <h3 className="display-title" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', margin: 0 }}>{q}</h3>
                  {isOpen ? <Minus size={18} color="var(--hp-red)" /> : <Plus size={18} color="var(--hp-red)" />}
                </button>
                {/* CSS-based collapse (not conditional mounting) so the answer
                    stays in the server-rendered HTML for crawlers, even though
                    it's visually collapsed until the user opens it. */}
                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.25s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden', minHeight: 0 }}>
                    <p className="body-copy" style={{ margin: '0', paddingBottom: '1.5rem', fontSize: '.94rem' }}>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/faq" className="hp-link">
            See the full FAQ <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
