'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    title: 'OEM Manufacturing',
    desc: 'Send us your CAD designs and specifications. We build to your exact measurements, tolerances, and stiffness profiles using 3K–24K carbon fiber monoblock hot-press molding.',
    tags: ['CAD to mold', 'Hot-press', 'Custom stiffness'],
  },
  {
    title: 'ODM Private Label',
    desc: 'Leverage our proven teardrop, round, and diamond geometries and core configurations. Customize graphics, colorways, surface textures, and grip accessories to own the shelf.',
    tags: ['Proven geometries', 'Colorways', 'Grip options'],
  },
  {
    title: 'Quality & Compliance',
    desc: 'Every batch undergoes rigorous quality assurance at our Sialkot facility. All paddles meet global guidelines for surface roughness, deflection, and dimensional limits.',
    tags: ['Batch QA', 'Compliance', 'Dimensional checks'],
  },
];

export function Capabilities() {
  return (
    <section className="hp-craft" id="capabilities">
      <div className="hp-shell hp-craft__inner">
        <motion.div
          className="hp-craft__media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="hp-craft__media-frame">
            <Image
              src="/images/materials/carbon-fiber-weave.jpg"
              alt="Macro detail of woven carbon fiber sheet"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="hp-craft__media-cap"><b>Raw material</b> — 3K–24K carbon weave</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          <span className="hp-eyebrow hp-eyebrow--ink">Manufacturing power</span>
          <h2 className="hp-display hp-craft__title">Engineered<br />at the source.</h2>
          <p className="hp-craft__intro">
            B2B OEM manufacturing, private-label ODM, and white-label fulfillment — from raw
            material selection to final landed delivery, handled under one roof.
          </p>

          <div className="hp-craft__list">
            {capabilities.map((cap, i) => (
              <motion.article
                className="hp-cap"
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              >
                <span className="hp-cap__num">0{i + 1}</span>
                <div>
                  <h3 className="hp-cap__title">{cap.title}</h3>
                  <p className="hp-cap__desc">{cap.desc}</p>
                  <div className="hp-cap__tags">
                    {cap.tags.map((t) => <span className="hp-cap__tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="hp-craft__foot">
            <Link href="/capabilities" className="hp-btn hp-btn--ink">
              Explore capabilities <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Capabilities;
