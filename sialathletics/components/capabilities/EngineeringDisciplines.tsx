'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE = [0.16, 1, 0.3, 1] as const;

// Five named engineering disciplines — every claim here maps to a spec we
// actually run in production; nothing is aspirational copy.
const disciplines = [
  {
    num: '01',
    title: 'Material System Engineering',
    tags: ['3K–24K carbon', 'Carbon & fiberglass faces', 'Hybrid blends'],
    points: [
      'Carbon fiber selection across 3K, 12K, 18K, and 24K tow counts — from everyday builds to performance-tier competition frames.',
      'Carbon fiber faces on performance pickleball paddles; fiberglass faces where touch and price point call for it.',
      'Fiberglass-carbon hybrid and Kevlar-carbon blend layups for control-oriented feel and impact resistance in professional-tier padel rackets.',
    ],
  },
  {
    num: '02',
    title: 'Core & Feel Tuning',
    tags: ['EVA 13–15°', 'PP honeycomb 13/14/16mm', 'Player-level logic'],
    points: [
      'Padel cores tuned by EVA compound: black high-density for power and durability, soft 13–15° hardness for comfort and shock absorption, memory high-rebound for consistent response across long sessions.',
      'Pickleball cores in polypropylene honeycomb at 13mm, 14mm, and 16mm — thinner for pop and power, thicker for control and feel.',
      'Player-level tuning logic: softer cores for comfort-first recreational lines, firmer high-density builds for advanced players who demand stability and precise energy transfer.',
    ],
  },
  {
    num: '03',
    title: 'Mold & Geometry Control',
    tags: ['Teardrop · Round · Diamond', '38mm standard', 'Precision-engineered molds'],
    points: [
      'Precision-engineered molds for teardrop (balanced), round (control, largest sweet spot), and diamond (power, head-weighted) padel geometries — plus elongated pickleball profiles for reach and leverage.',
      'Standard 38mm padel frame thickness held consistently through high-precision mold engineering.',
      'New shape development in-house: our mold design team takes your CAD to a production mold with physical prototypes in 3-4 weeks.',
    ],
  },
  {
    num: '04',
    title: 'Process Control',
    tags: ['Precision molding process', 'Batch QC checkpoints'],
    points: [
      'Frame and protector are formed to a single integrated structure through our precision molding process, engineered for consistent structural integrity.',
      'Surface texture molded directly into the frame — 3D grain, hexagon, and sand grit finishes that cannot wear off like sprayed-on coatings.',
      'QC checkpoints run throughout production, not just at the end, with daily progress updates during your batch.',
    ],
  },
  {
    num: '05',
    title: 'Performance & Weight Balance',
    tags: ['350–380g', '260–275mm balance', '±0.1oz'],
    points: [
      'Static weight specified within the 350–380g padel range: 350–360g lightweight builds, 370g+ power builds.',
      'Balance point calibrated between 260–275mm — low for maneuverability, high for head-driven power — matched to the target player profile.',
      'Batch weight consistency held to ±0.1oz, with deflection and compression testing verifying every production run performs like the approved sample.',
    ],
  },
];

export default function EngineeringDisciplines() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-panel)', borderTop: '1px solid var(--hp-hair)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
          <SectionLabel>Engineering disciplines</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
            Five disciplines. One racket.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
            Every padel racket and pickleball paddle we ship is the product of five controlled
            engineering disciplines. These are the levers we tune to hit your target price point
            and play profile — each one specified with you before production begins.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {disciplines.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
              className="eng-discipline"
              style={{ borderTop: '1px solid var(--hp-hair)', padding: '2rem 0', display: 'grid', gap: '1.5rem' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', marginBottom: '0.9rem' }}>
                  <span style={{ fontFamily: 'var(--hp-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--hp-red)' }}>{d.num}</span>
                  <h3 className="display-title" style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)', color: 'var(--hp-ivory)', margin: 0 }}>{d.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {d.tags.map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--hp-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hp-ivory-60)', border: '1px solid var(--hp-hair)', padding: '0.3rem 0.6rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {d.points.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span aria-hidden="true" style={{ color: 'var(--hp-red)', fontFamily: 'var(--hp-body)', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.6, flexShrink: 0 }}>—</span>
                    <span style={{ fontFamily: 'var(--hp-body)', fontSize: '0.9rem', color: 'var(--hp-ivory-60)', lineHeight: 1.65 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .eng-discipline { grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr); }
        @media (max-width: 860px) {
          .eng-discipline { grid-template-columns: 1fr; gap: 1.1rem; }
        }
      `}</style>
    </section>
  );
}
