'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: false as const }
      : { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, delay, ease: EASE } };

  return (
    <section className="hp-hero">
      <div className="hp-hero__bg">
        <Image
          src="/images/home/home_section_white_background.png"
          alt="A carbon padel racket and pickleball paddle on a floodlit court"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
        />
      </div>
      <div className="hp-hero__scrim" aria-hidden="true" />

      <div className="hp-shell">
       <div className="hp-hero__inner">
        <motion.p className="hp-eyebrow" {...rise(0)}>Padel &amp; pickleball manufacturing</motion.p>

        <motion.h1 className="hp-display hp-hero__title" {...rise(0.08)}>
          <span className="is-solid">The edge</span>
          <span className="is-outline">behind your</span>
          <span className="is-solid">brand<em>.</em></span>
        </motion.h1>

        <motion.p className="hp-hero__copy" {...rise(0.18)}>
          Performance padel rackets and pickleball paddles, engineered for brands, clubs, and
          distributors — built at the source, from carbon layup to retail-ready delivery.
        </motion.p>

        <motion.div className="hp-hero__actions" {...rise(0.26)}>
          <Link href="/catalogue" className="hp-btn hp-btn--primary">
            Explore the range <span className="hp-btn__arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/manufacturing" className="hp-link">
            How we manufacture <b aria-hidden="true">↗</b>
          </Link>
        </motion.div>
       </div>
      </div>

      <div className="hp-shell">
        <motion.div className="hp-hero__scroll" {...rise(0.5)} aria-hidden="true">
          <span /> Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
