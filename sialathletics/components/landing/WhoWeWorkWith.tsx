'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

// B2B buyer segmentation band — each card answers "is this factory for me?"
// for a specific buyer type before they ever reach the contact form.
const segments = [
  {
    num: '01',
    title: 'Brands',
    desc: 'Launch or extend a padel and pickleball line without owning a factory. OEM builds to your CAD and tolerances, or ODM programs on our proven geometries — sampled in 3-4 weeks.',
    tags: ['New SKU launches', 'Exclusive specs'],
  },
  {
    num: '02',
    title: 'Distributors & Wholesalers',
    desc: 'Test new models and price points with MOQs from 24 units, then scale reorders on locked specifications with batch-level QC reports backing every shipment.',
    tags: ['Market testing', 'Repeatable reorders'],
  },
  {
    num: '03',
    title: 'Clubs & Academies',
    desc: 'Custom-branded rackets and paddles for coaching fleets, member programs, and pro-shop retail — built for daily court use with consistent feel across every unit.',
    tags: ['Branded fleets', 'Pro-shop retail'],
  },
  {
    num: '04',
    title: 'Retailers',
    desc: 'Private-label product that arrives shelf-ready: retail packaging, hang tags, and QR labels produced alongside the equipment, with US import documentation handled.',
    tags: ['Retail-ready packaging', 'Import docs included'],
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="hp-audience" style={{ background: 'var(--hp-panel)', borderTop: '1px solid var(--hp-hair)', padding: 'var(--hp-gap) 0' }}>
      <div className="hp-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ marginBottom: '3rem', maxWidth: '640px' }}
        >
          <span className="hp-eyebrow">Who we work with</span>
          <h2 className="hp-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--hp-ivory)', margin: '0.9rem 0 1.1rem' }}>
            One factory.<br />Four kinds of partner.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
            Every program starts from the same production line — what changes is how we structure
            specs, volumes, and branding around your business.
          </p>
        </motion.div>

        <div className="hp-audience__grid">
          {segments.map((seg, i) => (
            <motion.article
              key={seg.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              style={{ background: 'var(--hp-card)', border: '1px solid var(--hp-hair)', borderTop: '3px solid var(--hp-red)', padding: '1.8rem' }}
            >
              <span style={{ fontFamily: 'var(--hp-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--hp-red)', display: 'block', marginBottom: '1rem' }}>
                {seg.num}
              </span>
              <h3 className="display-title" style={{ fontSize: '1.15rem', color: 'var(--hp-ivory)', margin: '0 0 0.6rem' }}>{seg.title}</h3>
              <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.85rem', color: 'var(--hp-ivory-60)', lineHeight: 1.65, margin: '0 0 1.1rem' }}>{seg.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {seg.tags.map((t) => (
                  <span key={t} style={{ fontFamily: 'var(--hp-body)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hp-ivory-60)', border: '1px solid var(--hp-hair)', padding: '0.28rem 0.55rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/faq" className="hp-link">
            Common buyer questions, answered <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </div>

      <style>{`
        .hp-audience__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .hp-audience__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .hp-audience__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
