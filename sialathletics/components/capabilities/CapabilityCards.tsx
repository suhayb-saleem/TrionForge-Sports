'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE = [0.16, 1, 0.3, 1] as const;

type Capability = { title: string; tag: string; desc: string; image: string; alt: string; span?: 'wide' };

const capabilities: Capability[] = [
  {
    title: 'OEM manufacturing',
    tag: 'Build to your spec',
    desc: 'Send us your design, and we build it exactly to your requirements.',
    image: '/images/manufacturing/oem-manufacturing.png',
    alt: 'OEM prototype padel racket freshly printed with its graphic design',
    span: 'wide',
  },
  {
    title: 'ODM private label',
    tag: 'Your brand, our platform',
    desc: 'Choose one of our racket or paddle designs, then customize it with your own branding.',
    image: '/images/manufacturing/odm-manufacturing.png',
    alt: 'Three padel racket private-label design variations laid out with material and color swatches',
  },
  {
    title: 'Product Development & Prototyping',
    tag: 'From concept to prototype',
    desc: 'We help you build and test a prototype before we go into full production.',
    image: '/images/manufacturing/product-prototyping.png',
    alt: 'Finished padel racket prototypes and a precision mold on the factory floor',
  },
  {
    title: 'Quality control',
    tag: 'Consistent at every stage',
    desc: 'We check materials, weight, and finish on every batch before it ships.',
    image: '/images/manufacturing/quality-control.png',
    alt: 'Padel racket undergoing precision testing on a quality control rig',
  },
  {
    title: 'Packaging & fulfillment',
    tag: 'Reliable & protected',
    desc: 'Packaging that keeps your products safe in storage and shipping.',
    image: '/images/manufacturing/packaging.png',
    alt: 'Padel racket carefully bubble-wrapped and boxed for shipment',
  },
  {
    title: 'Global logistics',
    tag: 'Door to warehouse',
    desc: 'We handle export paperwork and shipping to your warehouse, anywhere in the world.',
    image: '/images/manufacturing/cargo-ship.jpg',
    alt: 'Container ship loaded with export cargo at port',
    span: 'wide',
  },
];

// Image-overlay bento grid — a deliberately different pattern from the
// alternating text/image rows used elsewhere on the site: tiles of varying
// width, full-bleed photo with a scrim and the copy sitting on top.
export default function CapabilityCards() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', maxWidth: '640px' }}>
          <SectionLabel>Our capabilities</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--hp-ink)', marginTop: '0.9rem' }}>
            What we offer.
          </h2>
        </div>

        <div className="cap-bento">
          {capabilities.map((cap, i) => (
            <motion.article
              key={cap.title}
              className={`cap-bento__tile${cap.span === 'wide' ? ' cap-bento__tile--wide' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <Image src={cap.image} alt={cap.alt} fill sizes="(max-width: 860px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="cap-bento__scrim" aria-hidden="true" />
              <div className="cap-bento__body">
                <span className="cap-bento__tag">{cap.tag}</span>
                <h3 className="cap-bento__title">{cap.title}</h3>
                <p className="cap-bento__desc">{cap.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .cap-bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 300px;
          gap: 1.25rem;
        }
        .cap-bento__tile--wide { grid-column: span 2; }
        .cap-bento__tile {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--hp-ink-line);
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: flex-end;
        }
        .cap-bento__tile img { transition: transform 0.7s ease; }
        .cap-bento__tile:hover img { transform: scale(1.06); }
        .cap-bento__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,8,10,0) 35%, rgba(8,8,10,0.55) 70%, rgba(8,8,10,0.9) 100%);
        }
        .cap-bento__body { position: relative; z-index: 1; padding: 1.35rem 1.5rem; }
        .cap-bento__tag {
          display: block;
          font-family: var(--hp-body);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-red);
          margin-bottom: 0.4rem;
        }
        .cap-bento__title {
          font-family: var(--hp-display);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          font-size: 1.2rem;
          color: var(--hp-ivory);
          margin: 0 0 0.4rem;
        }
        .cap-bento__desc {
          font-family: var(--hp-body);
          font-size: 0.8rem;
          line-height: 1.55;
          color: var(--hp-ivory-60);
          margin: 0;
          max-width: 28rem;
        }
        @media (max-width: 860px) {
          .cap-bento { grid-template-columns: 1fr; grid-auto-rows: 280px; }
          .cap-bento__tile--wide { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
