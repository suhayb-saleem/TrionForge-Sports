'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE = [0.16, 1, 0.3, 1] as const;

// Stage-by-stage QC narrative — follows the actual production line order.
// Every named check here is one we run; the six-test battery at final
// inspection is the same list shown in QualityChecklist above.
const stages = [
  {
    num: '01',
    title: 'Material staging',
    desc: 'Carbon fiber, fiberglass, EVA foam, and polypropylene honeycomb stock is verified against your order specification before layup begins — the grade and core you approved is the grade and core that goes into the mold.',
  },
  {
    num: '02',
    title: 'Layup & precision molding',
    desc: 'Our molding process forms the frame and protector to a single integrated structure, with surface textures — 3D grain, hexagon, sand grit — molded directly into the face rather than sprayed on afterward.',
  },
  {
    num: '03',
    title: 'Post-mold classification',
    desc: 'Out of the mold, every frame is weighed and visually classified. Padel frames outside the 350–380g specification band or showing structural defects are pulled before they go any further down the line.',
  },
  {
    num: '04',
    title: 'Surface refinement & graphics',
    desc: 'Shells are smoothed and finished before paint, then graphics, colorways, and logos are applied and compared against your approved sample so the production run matches what you signed off.',
  },
  {
    num: '05',
    title: 'Drilling & assembly',
    desc: 'Faces are precision-drilled for consistent hole placement, then grips, butt caps, and edge guards are fitted — with handle torque strength and edge guard seal and adhesion tested at this stage.',
  },
  {
    num: '06',
    title: 'Final inspection & packing',
    desc: 'The full test battery runs before packing: surface roughness and finish consistency, deflection and compression, batch weight consistency to ±0.1oz, and a zero-defect-tolerance visual inspection. Passed units go into retail packaging and export-grade cartons.',
  },
];

export default function QualityProcess() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-black)', borderTop: '1px solid var(--hp-hair)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
          <SectionLabel>Stage by stage</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
            Quality is built in, not bolted on.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
            Inspection doesn&apos;t wait until the end of the line. Each production stage has its own
            gate, so a defect is caught where it happens — not discovered in your warehouse.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '860px' }}>
          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--hp-hair)', padding: '1.6rem 0' }}
            >
              <span style={{ fontFamily: 'var(--hp-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--hp-red)', flexShrink: 0, width: '2.2rem' }}>
                {stage.num}
              </span>
              <div>
                <h3 className="display-title" style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)', color: 'var(--hp-ivory)', margin: '0 0 0.5rem' }}>
                  {stage.title}
                </h3>
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.9rem', color: 'var(--hp-ivory-60)', lineHeight: 1.65, margin: 0 }}>
                  {stage.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.9rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7, marginTop: '2.5rem', maxWidth: '680px' }}>
          Every order ships with a batch-level QC report documenting tested samples, pass rates,
          and corrective actions. Questions about inspection, claims, or documentation are covered
          in our <Link href="/faq" className="hp-link">FAQ</Link>, or{' '}
          <Link href="/contact" className="hp-link">ask us directly</Link>.
        </p>
      </div>
    </section>
  );
}
