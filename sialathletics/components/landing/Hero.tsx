'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

const proof = [
  { value: 'OEM+ODM', label: 'Private label' },
  { value: '24+', label: 'Unit MOQ' },
  { value: '3K–24K', label: 'Carbon layup' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: false as const }
      : { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, delay, ease: EASE } };

  return (
    <section className="hp-hero">
      <span className="hp-hero__ghost" aria-hidden="true">SIAL</span>
      <div className="hp-grain" aria-hidden="true" />

      <div className="hp-shell hp-hero__grid">
        <div className="hp-hero__content">
          <motion.p className="hp-eyebrow" {...rise(0)}>Padel & pickleball manufacturing</motion.p>

          <motion.h1 className="hp-display hp-hero__title" {...rise(0.08)}>
            <span className="is-solid">The edge</span>
            <span className="is-outline">behind your</span>
            <span className="is-solid">brand<em>.</em></span>
          </motion.h1>

          <motion.p className="hp-hero__copy" {...rise(0.18)}>
            Performance padel rackets and pickleball paddles engineered for serious brands, clubs,
            and distributors. From carbon layup to retail-ready delivery, we build your next line
            at the source.
          </motion.p>

          <motion.div className="hp-hero__actions" {...rise(0.26)}>
            <Link href="/catalogue#padel" className="hp-btn hp-btn--primary">
              Explore padel rackets <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/capabilities" className="hp-link">
              How we manufacture <b aria-hidden="true">↗</b>
            </Link>
          </motion.div>

          <motion.dl className="hp-hero__proof" aria-label="SIAL Athletics highlights" {...rise(0.34)}>
            {proof.map((item) => (
              <li key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </li>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="hp-hero__visual"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
        >
          <span className="hp-hero__tag hp-hero__tag--tl"><b>01</b> Forge Series</span>
          <span className="hp-hero__tag hp-hero__tag--vert" aria-hidden="true">Teardrop · EVA</span>
          <div className="hp-hero__halo" aria-hidden="true" />
          <div className="hp-hero__img">
            <Image
              src="/images/products/sa-forge-padel-teardrop.jpg"
              alt="SIAL Athletics Forge teardrop padel racket"
              fill
              priority
              sizes="(max-width: 940px) 88vw, 48vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <Link href="/catalogue#padel" className="hp-hero__tag hp-hero__tag--br hp-link">
            View the range <b aria-hidden="true">↗</b>
          </Link>
        </motion.div>
      </div>

      <div className="hp-shell">
        <motion.div className="hp-hero__scroll" {...rise(0.5)} aria-hidden="true">
          <span /> Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
