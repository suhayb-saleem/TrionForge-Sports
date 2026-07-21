'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    num: '01',
    title: 'OEM Manufacturing',
    tag: 'Build to your spec',
    desc: 'Send us your designs and specifications. We build to your exact measurements, tolerances, and stiffness profiles using 3K–24K carbon fiber precision molding.',
    image: '/images/manufacturing/oem-manufacturing.png',
    alt: 'Macro detail of woven carbon fiber sheet — the raw material behind every build',
  },
  {
    num: '02',
    title: 'ODM Private Label',
    tag: 'Your brand, our platform',
    desc: 'Leverage our proven padel geometries and pickleball profiles with carbon fiber faces. Customize graphics, colorways, surface textures, and grip accessories to own the shelf.',
    image: '/images/manufacturing/odm-manufacturing.png',
    alt: 'Indoor padel court with blue playing surface',
  },
  {
    num: '03',
    title: 'Quality & Compliance',
    tag: 'Verified batch by batch',
    desc: 'Every batch undergoes rigorous quality assurance at our Sialkot facility. All paddles meet global guidelines for surface roughness, deflection, and dimensional limits.',
    image: '/images/manufacturing/quality-control.png',
    alt: 'Vernier caliper measuring a component during quality inspection',
  },
];

export function Capabilities() {
  return (
    <section className="hp-craft" id="capabilities">
      <div className="hp-shell">
        <motion.div
          className="cap-head"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <span className="hp-eyebrow hp-eyebrow--ink">Manufacturing power</span>
          <div className="cap-head__row">
            <h2 className="hp-display hp-craft__title">Engineered at the source.</h2>
            <p className="hp-craft__intro">
              B2B OEM manufacturing, private-label ODM, and white-label fulfillment for padel
              rackets and pickleball paddles — from raw material to final landed delivery,
              handled under one roof.
            </p>
          </div>
        </motion.div>

        <div className="cap-grid">
          {capabilities.map((cap, i) => (
            <motion.article
              key={cap.num}
              className="cap-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              <div className="cap-card__frame">
                <Image
                  src={cap.image}
                  alt={cap.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="cap-card__body">
                <div className="cap-card__meta">
                  <span className="cap-card__num">{cap.num}</span>
                  <span className="cap-card__tag">{cap.tag}</span>
                </div>
                <h3 className="cap-card__title">{cap.title}</h3>
                <p className="cap-card__desc">{cap.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="cap-foot"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <Link href="/manufacturing" className="hp-btn hp-btn--outline-ink">
            Explore full capabilities <span className="hp-btn__arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .cap-head {
          padding-top: var(--hp-gap);
          margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
        }
        .cap-head__row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: end;
          margin-top: 1rem;
        }
        .cap-craft__title,
        .hp-craft__title {
          font-size: clamp(2.2rem, 4.6vw, 3.4rem);
          line-height: 0.98;
          letter-spacing: -0.02em;
          color: var(--hp-ink);
          margin: 0;
        }
        .hp-craft__intro {
          font-family: var(--hp-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--hp-ink-70);
          margin: 0;
          padding-bottom: 0.3rem;
        }

        /* ---- card grid ---- */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--hp-ink-line);
          border: 1px solid var(--hp-ink-line);
        }
        .cap-card {
          background: var(--hp-paper);
          display: flex;
          flex-direction: column;
        }
        .cap-card__frame {
          position: relative;
          aspect-ratio: 5 / 4;
          overflow: hidden;
        }
        .cap-card__frame img {
          transition: transform 0.7s var(--hp-ease);
        }
        .cap-card:hover .cap-card__frame img {
          transform: scale(1.05);
        }
        .cap-card__body {
          padding: clamp(1.4rem, 2.4vw, 1.9rem);
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          flex: 1;
        }
        .cap-card__meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .cap-card__num {
          font-family: var(--hp-body);
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--hp-red);
        }
        .cap-card__tag {
          font-family: var(--hp-body);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-ink-45);
        }
        .cap-card__title {
          margin: 0;
          font-family: var(--hp-display);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.015em;
          font-size: 1.25rem;
          line-height: 1.05;
          color: var(--hp-ink);
        }
        .cap-card__desc {
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.86rem;
          line-height: 1.65;
          color: var(--hp-ink-70);
        }

        .cap-foot {
          margin-top: clamp(2rem, 4vw, 2.75rem);
        }

        @media (max-width: 900px) {
          .cap-head__row {
            grid-template-columns: 1fr;
          }
          .cap-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Capabilities;
