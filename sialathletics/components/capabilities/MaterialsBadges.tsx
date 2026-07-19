'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';

const groups = [
  {
    title: 'CARBON FIBER GRADES',
    items: [
      { name: '3K Carbon Fiber', desc: 'Our standard weave — the most widely used grade across the range, balancing stiffness and cost for everyday builds.' },
      { name: '12K Carbon Fiber', desc: 'Heavier tow count than 3K, adding stiffness for a firmer, more powerful ball response.' },
      { name: '24K Carbon Fiber', desc: 'Our premium grade — higher fiber density for advanced, performance-tier builds that need more rigidity without added bulk.' },
      { name: 'Fiberglass/Carbon Hybrid', desc: 'Blends fiberglass flex with carbon rigidity for a softer feel, favored in control-oriented builds.' },
      { name: 'Kevlar-Carbon Blend', desc: "Silver/red premium line — Kevlar's impact resistance layered with carbon stiffness for our professional-tier rackets." },
    ],
  },
  {
    title: 'CORE (EVA FOAM)',
    items: [
      { name: 'Black EVA', desc: 'High-density foam, preferred for power and durability in harder-hitting builds.' },
      { name: 'Soft EVA (13–15° hardness)', desc: 'A softer compound tuned for comfort and shock absorption in control-oriented rackets.' },
      { name: 'Memory / High-Rebound EVA', desc: 'Engineered to return to shape rapidly after impact, holding consistent response across a long session.' },
    ],
  },
  {
    title: 'SURFACE TEXTURE',
    items: [
      { name: '3D Grain / Hexagon Mold', desc: 'Texture molded directly into the frame — permanent, won\'t wear off like a sprayed-on coating.' },
      { name: 'Sand Grit Finish', desc: 'A rough, gritty surface finish built for maximum spin generation.' },
      { name: '3D Decals', desc: 'Raised graphical elements that double as extra points of ball friction.' },
    ],
  },
];

const shapes: { key: 'teardrop' | 'round' | 'diamond'; name: string; desc: string }[] = [
  { key: 'teardrop', name: 'Teardrop', desc: 'All-rounder — balanced sweet spot and power.' },
  { key: 'round', name: 'Round', desc: 'Control-oriented, largest sweet spot.' },
  { key: 'diamond', name: 'Diamond', desc: 'Power-oriented, weight toward the head.' },
];

export default function MaterialsBadges() {
  return (
    <section style={{ background: 'var(--hp-black)', borderTop: '1px solid var(--hp-hair)', padding: 'var(--hp-gap) 0' }}>
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
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
            Materials we work with.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            Every grade, core, and finish below is available across our racket lines. We spec the combination to your target price point and play style — nothing here is a placeholder claim.
          </p>
          <div className="mat-points">
            {[
              'Carbon fiber face in 3K, 12K, 18K, and 24K grades',
              'EVA foam core options across hardness ratings',
              'Multiple surface textures for spin and control tuning',
              'Precision-molded and hybrid frame constructions',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--hp-red)', fontFamily: 'var(--hp-body)', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.5, flexShrink: 0 }}>—</span>
                <span style={{ fontFamily: 'var(--hp-body)', fontSize: '0.88rem', color: 'var(--hp-ivory-60)', lineHeight: 1.55 }}>{point}</span>
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
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1536/1024', border: '1px solid var(--hp-hair)', overflow: 'hidden', background: '#f4f3ef' }}>
            <Image
              src="/images/catalogue1.png"
              alt="SIAL Athletics materials reference catalogue — carbon types, paint and coating options, EVA core options"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hp-ivory-60)', marginTop: '0.85rem', textAlign: 'center' }}>
            SIAL Athletics — Materials Reference Catalogue
          </p>
        </motion.div>

        {/* Material group cards */}
        <div className="mat-groups" style={{ marginBottom: '1.5rem' }}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              style={{ background: 'var(--hp-card)', border: '1px solid var(--hp-hair)', borderTop: '3px solid var(--hp-red)', padding: '2rem' }}
            >
              <h3 style={{ fontFamily: 'var(--hp-body)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--hp-ivory)', marginBottom: '1.5rem', marginTop: 0 }}>
                {group.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {group.items.map((item) => (
                  <div key={item.name}>
                    <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--hp-ivory)', margin: 0, marginBottom: '0.3rem' }}>
                      {item.name}
                    </p>
                    <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.82rem', color: 'var(--hp-ivory-60)', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frame & Spec + Shapes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ background: 'var(--hp-card)', border: '1px solid var(--hp-hair)', borderTop: '3px solid var(--hp-red)', padding: '2rem' }}
        >
          <h3 style={{ fontFamily: 'var(--hp-body)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--hp-ivory)', marginBottom: '1.5rem', marginTop: 0 }}>
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
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.85rem', color: 'var(--hp-ivory)', lineHeight: 1.6, margin: 0 }}>
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--hp-hair)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            {shapes.map((shape) => (
              <div key={shape.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Image src={`/images/${shape.key}_icon.png`} alt={shape.name} width={48} height={48} />
                <div>
                  <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--hp-ivory)', margin: 0 }}>{shape.name}</p>
                  <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.78rem', color: 'var(--hp-ivory-60)', margin: 0 }}>{shape.desc}</p>
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
        .mat-groups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .materials-spec-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .mat-groups {
            grid-template-columns: repeat(2, 1fr);
          }
          .materials-spec-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .mat-points {
            grid-template-columns: 1fr;
          }
          .mat-groups {
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
