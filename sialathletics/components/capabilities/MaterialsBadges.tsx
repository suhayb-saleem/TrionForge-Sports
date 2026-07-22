'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';

const materialFamilies = [
  {
    key: 'carbon',
    tab: 'Carbon Fiber',
    title: 'Carbon Fiber Grades',
    tag: 'The face',
    desc: 'The face material sets stiffness, feel, and price. All grades below are available across our range.',
    image: '/images/manufacturing/carbon-types.png',
    alt: 'Comparison of 3K, 12K, 18K, and 24K carbon fiber weave grades',
  },
  {
    key: 'eva',
    tab: 'EVA Core',
    title: 'Core (EVA Foam)',
    tag: 'The feel',
    desc: 'The core defines the feel — soft for control, firm for power.',
    image: '/images/manufacturing/eva-core.png',
    alt: 'Comparison of black EVA, soft EVA, and memory/high-rebound EVA core foams',
  },
  {
    key: 'texture',
    tab: 'Surface Texture',
    title: 'Surface Texture',
    tag: 'The spin',
    desc: 'Texture is molded into the frame, so it never wears off.',
    image: '/images/manufacturing/textures.png',
    alt: 'Comparison of 3D, matte, glossy, and sand-paint surface finish options',
  },
] as const;

const shapes: { key: 'teardrop' | 'round' | 'diamond'; name: string; desc: string }[] = [
  { key: 'teardrop', name: 'Teardrop', desc: 'All-rounder — balanced sweet spot and power.' },
  { key: 'round', name: 'Round', desc: 'Control-oriented, largest sweet spot.' },
  { key: 'diamond', name: 'Diamond', desc: 'Power-oriented, weight toward the head.' },
];

export default function MaterialsBadges() {
  return (
    <section style={{ background: 'var(--hp-paper)', borderTop: '1px solid var(--hp-ink-line)', padding: 'var(--hp-gap) 0' }}>
      <div className="hp-shell">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem', maxWidth: '640px' }}
        >
          <SectionLabel>Materials Catalogue</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--hp-ink)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
            Materials we work with.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ink-70)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            Every grade, core, and finish below is available across our racket lines. We match the
            combination to your price point and play style.
          </p>
          <div className="mat-points">
            {[
              'Carbon fiber in 3K, 12K, 18K, and 24K grades',
              'EVA foam cores in multiple hardness levels',
              'Several surface textures for spin and control',
              'Molded and hybrid frame options',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--hp-red)', fontFamily: 'var(--hp-body)', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.5, flexShrink: 0 }}>—</span>
                <span style={{ fontFamily: 'var(--hp-body)', fontSize: '0.88rem', color: 'var(--hp-ink-70)', lineHeight: 1.55 }}>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Catalogue reference sheet */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1536/1024', border: '1px solid var(--hp-ink-line)', overflow: 'hidden', background: '#f4f3ef', boxShadow: 'var(--shadow-sm)' }}>
            <Image
              src="/images/catalogue1.png"
              alt="SIAL Athletics materials reference catalogue — carbon types, paint and coating options, EVA core options"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hp-ink-45)', marginTop: '0.85rem', textAlign: 'center' }}>
            SIAL Athletics — Materials Reference Catalogue
          </p>
        </motion.div>

        {/* Material families — tabbed reference panel (distinct from the
            alternating image/text rows used elsewhere on the site) */}
        <MaterialTabs />

        {/* Frame & Spec + Shapes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ background: 'var(--surface)', border: '1px solid var(--hp-ink-line)', borderTop: '3px solid var(--hp-red)', boxShadow: 'var(--shadow-sm)', padding: '2rem' }}
        >
          <h3 style={{ fontFamily: 'var(--hp-body)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--hp-ink)', marginBottom: '1.5rem', marginTop: 0 }}>
            FRAME & SPEC
          </h3>
          <div className="materials-spec-grid" style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { label: 'Construction', value: 'Integrated frame and protector construction as standard; composite bonding available for multi-material hybrids' },
              { label: 'Thickness', value: '38mm standard' },
              { label: 'Weight', value: '350–380g (350–360g lightweight, 370g+ power)' },
              { label: 'Balance', value: 'Low / Mid / High, 260–275mm' },
            ].map((spec) => (
              <div key={spec.label}>
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--hp-red)', textTransform: 'uppercase', margin: 0, marginBottom: '0.4rem' }}>
                  {spec.label}
                </p>
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.85rem', color: 'var(--hp-ink)', lineHeight: 1.6, margin: 0 }}>
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--hp-ink-line)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            {shapes.map((shape) => (
              <div key={shape.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Image src={`/images/${shape.key}_icon.png`} alt={`${shape.name} racket shape icon`} width={48} height={48} />
                <div>
                  <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--hp-ink)', margin: 0 }}>{shape.name}</p>
                  <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.78rem', color: 'var(--hp-ink-70)', margin: 0 }}>{shape.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .mat-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 1.5rem;
        }
        .materials-spec-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .materials-spec-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .mat-points {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 520px) {
          .materials-spec-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function MaterialTabs() {
  const [active, setActive] = useState<typeof materialFamilies[number]['key']>('carbon');
  const current = materialFamilies.find((m) => m.key === active)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '3rem' }}
    >
      <div className="mat-tabs" role="tablist" aria-label="Material families">
        {materialFamilies.map((m) => (
          <button
            key={m.key}
            role="tab"
            type="button"
            aria-selected={active === m.key}
            className={`mat-tabs__btn${active === m.key ? ' is-active' : ''}`}
            onClick={() => setActive(m.key)}
          >
            {m.tab}
          </button>
        ))}
      </div>

      <div className="mat-panel">
        <motion.div
          key={current.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mat-panel__media">
            <Image src={current.image} alt={current.alt} fill sizes="(max-width: 900px) 100vw, 1100px" style={{ objectFit: 'contain' }} priority={current.key === 'carbon'} />
          </div>
          <div className="mat-panel__body">
            <span className="mat-panel__tag">{current.tag}</span>
            <h3 className="mat-panel__title">{current.title}</h3>
            <p className="mat-panel__desc">{current.desc}</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .mat-tabs { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.5rem; }
        .mat-tabs__btn {
          font-family: var(--hp-body); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--hp-ink-70); background: transparent;
          border: 1px solid var(--hp-ink-line); padding: 0.7rem 1.3rem; cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .mat-tabs__btn:hover { color: var(--hp-ink); border-color: var(--hp-ink); }
        .mat-tabs__btn.is-active { color: #fff; background: var(--hp-red); border-color: var(--hp-red); }
        .mat-panel { background: var(--surface); border: 1px solid var(--hp-ink-line); box-shadow: var(--shadow-sm); }
        .mat-panel__media { position: relative; width: 100%; aspect-ratio: 16 / 9; background: var(--surface-sunken); }
        .mat-panel__body { padding: 1.5rem 1.75rem 1.85rem; border-top: 1px solid var(--hp-ink-line); }
        .mat-panel__tag {
          display: block; font-family: var(--hp-body); font-size: 0.66rem; font-weight: 800;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--hp-red); margin-bottom: 0.5rem;
        }
        .mat-panel__title { font-family: var(--hp-display); font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em; font-size: clamp(1.3rem, 2.4vw, 1.7rem); color: var(--hp-ink); margin: 0 0 0.6rem; }
        .mat-panel__desc { font-family: var(--hp-body); font-size: 0.88rem; line-height: 1.65; color: var(--hp-ink-70); margin: 0; max-width: 46rem; }
        @media (max-width: 640px) {
          .mat-panel__media { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </motion.div>
  );
}
