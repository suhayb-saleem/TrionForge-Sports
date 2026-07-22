'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

// Homepage-only light CTA band. The shared <CTABanner> is intentionally left
// untouched so /about and /manufacturing keep their existing design.
export default function HomeCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="hp-cta">
      <span className="hp-cta__mark" aria-hidden="true">SA</span>
      <div className="hp-shell hp-cta__inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <span className="hp-eyebrow hp-eyebrow--ink">Start at the source</span>
          <h2 className="hp-display hp-cta__title">Build a better<br />racket line<em>.</em></h2>
          <p className="hp-cta__copy">
            Tell us what you want to build and your budget. We&apos;ll send samples, specs, and a quote.
          </p>
          <div className="hp-cta__actions">
            <Link href="/contact" className="hp-btn hp-btn--ink">
              Start an inquiry <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/manufacturing" className="hp-btn hp-btn--outline-ink">
              Explore capabilities <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

