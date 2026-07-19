'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    title: 'Precision',
    desc: 'Every gram, every millimeter engineered to spec. No shortcuts, no tolerance creep.',
    image: '/images/holemachine.png',
    alt: 'Precision drilling machine boring the face of a padel racket',
  },
  {
    title: 'Craftsmanship',
    desc: "Sialkot's 100-year legacy in sporting goods. That heritage lives in every racket we ship.",
    image: '/images/warehouse_interior.png',
    alt: 'Factory floor with hydraulic presses and finished rackets staged for the next stage of production',
  },
  {
    title: 'Transparency',
    desc: 'Direct factory relationships. No markup layers. You know exactly what you pay for and why.',
    image: '/images/rack.png',
    alt: 'Rows of finished padel rackets staged on a factory rack',
  },
  {
    title: 'Reliability',
    desc: 'On-time delivery. Every order. Every time. Your production schedule is our commitment.',
    image: '/images/forklift.png',
    alt: 'Forklift loading export cartons at the SIAL Athletics facility',
  },
];

export default function AboutValues() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="site-section" style={{ background: 'var(--hp-black)', paddingBottom: 0 }}>
      <div className="container-custom" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '640px' }}>
          <SectionLabel>What drives us</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem' }}>
            Our core values.
          </h2>
          <p className="body-copy" style={{ marginTop: '1rem' }}>
            Four principles that shape how we run the factory floor, quote a job, and ship an order.
          </p>
        </div>
      </div>

      <div className="value-slides">
        {values.map(({ title, desc, image, alt }, i) => (
          <motion.div
            className="value-slide"
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="value-slide__text">
              <span className="value-slide__num">0{i + 1}</span>
              <h3 className="value-slide__title">{title}</h3>
              <p className="value-slide__desc">{desc}</p>
            </div>
            <div className="value-slide__media-wrapper">
              <div className="value-slide__divider" aria-hidden="true" />
              <div className="value-slide__media">
                <Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .value-slides { display: flex; flex-direction: column; border-top: 1px solid var(--hp-hair); }
        .value-slide {
          position: relative; display: grid; grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
          align-items: stretch; min-height: 360px; border-bottom: 1px solid var(--hp-hair); overflow: hidden;
        }
        .value-slide__text {
          position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; gap: .9rem;
          padding: clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 4vw, 4rem);
        }
        .value-slide__num {
          font-family: var(--hp-display); font-weight: 800; font-size: .85rem; letter-spacing: .12em; color: var(--hp-red);
        }
        .value-slide__title {
          margin: 0; font-family: var(--hp-display); font-weight: 800; text-transform: uppercase;
          letter-spacing: -.02em; font-size: clamp(2rem, 4vw, 3rem); line-height: .95; color: var(--hp-ivory);
        }
        .value-slide__desc { margin: 0; max-width: 26rem; font-size: .92rem; line-height: 1.65; color: var(--hp-ivory-60); }
        .value-slide__media-wrapper {
          position: relative; grid-column: 2;
        }
        .value-slide__media {
          position: absolute; inset: 0; clip-path: polygon(9% 0, 100% 0, 100% 100%, 0 100%);
        }
        .value-slide__divider {
          position: absolute; inset: 0; z-index: 3; pointer-events: none; background: var(--hp-red);
          clip-path: polygon(calc(9% - 2px) 0, calc(9% + 2px) 0, calc(0% + 2px) 100%, calc(0% - 2px) 100%);
        }
        @media (max-width: 800px) {
          .value-slide { grid-template-columns: 1fr; min-height: 0; }
          .value-slide__media-wrapper { grid-column: 1; aspect-ratio: 4 / 3; border-top: 2px solid var(--hp-red); }
          .value-slide__media { position: absolute; inset: 0; clip-path: none; }
          .value-slide__divider { display: none; }
          .value-slide__text { padding-bottom: 1.75rem; }
        }
      `}</style>
    </section>
  );
}
