'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

const categories = [
  {
    title: 'Padel Rackets',
    desc: 'Round, teardrop, diamond, hybrid — or a custom shape we build for you.',
    href: '/catalogue#padel',
    image: '/images/products/padel_backgroundless.png',
    alt: 'Carbon padel racket',
  },
  {
    title: 'Pickleball Paddles',
    desc: 'Control, balanced, and power builds in carbon and composite.',
    href: '/catalogue#pickleball',
    image: '/images/products/pickleball_backgroundless.png',
    alt: 'Carbon pickleball paddle',
  },
];

export function Range() {
  return (
    <section className="hp-range" id="range">
      <div className="hp-range__bg">
        <Image src="/images/home/about_lifestyle.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="hp-range__scrim" aria-hidden="true" />

      <div className="hp-shell hp-range__inner">
        <motion.div
          className="hp-range__head"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="hp-eyebrow">What we make</span>
          <h2 className="hp-display hp-range__title">
            Padel &amp; pickleball,<br /><span>made to order.</span>
          </h2>
          <p className="hp-range__intro">
            Pick your shape, materials, weight, and finish. We build it for you.
          </p>
        </motion.div>

        <div className="hp-range__cats">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            >
              <Link href={cat.href} className="hp-cat">
                <span className="hp-cat__label">0{i + 1}</span>
                <h3 className="hp-cat__title">{cat.title}</h3>
                <p className="hp-cat__desc">{cat.desc}</p>
                <span className="hp-cat__cta">Explore <b aria-hidden="true">→</b></span>
                <span className="hp-cat__media" aria-hidden="true">
                  <Image src={cat.image} alt={cat.alt} fill sizes="(max-width: 720px) 45vw, 22vw" style={{ objectFit: 'contain', objectPosition: 'bottom right' }} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Range;
