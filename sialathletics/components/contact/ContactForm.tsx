'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import ContactFormFields from '@/components/contact/ContactFormFields';
import type { ContactPrefill } from '@/lib/contactModal';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [prefill, setPrefill] = useState<ContactPrefill | null>(null);
  const formSectionRef = useRef<HTMLElement>(null);

  // Pre-fill from the catalogue spec configurator: /contact?line=...&spec=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get('spec');
    const line = params.get('line');
    if (!spec && !line) return;
    setPrefill({ message: spec ?? undefined, productLine: line ?? undefined });
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="site-section" style={{ position: 'relative', isolation: 'isolate', background: '#fff', borderTop: '1px solid var(--hp-ink-line)', overflow: 'hidden', scrollMarginTop: '90px' }} ref={formSectionRef}>
      <div className="hp-weave--paper" aria-hidden="true" />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <SectionLabel light>Reach us directly</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--hp-ink)', margin: '1.2rem 0 0' }}>
            We respond<br />within 24 hours.
          </h2>
        </motion.div>

        <motion.div
          className="hp-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <ContactFormFields theme="light" prefill={prefill} />
        </motion.div>
      </div>
    </section>
  );
}
