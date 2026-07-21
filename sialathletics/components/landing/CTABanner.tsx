'use client';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { useContactModal } from '@/lib/contactModal';

interface CTABannerProps { headline?: string; subtext?: string; primaryLabel?: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string; index?: string; }

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTABanner({ headline = 'Ready to build a better padel line?', subtext = 'Bring us your target player, price point, and design direction. We will shape the manufacturing program around it.', primaryLabel = 'Start an inquiry', primaryHref = '/contact', secondaryLabel = 'Explore capabilities', secondaryHref = '/manufacturing', index = 'SIAL / 02' }: CTABannerProps) {
  const reduceMotion = useReducedMotion();
  const { open: openContactModal } = useContactModal();
  const primaryIsContact = primaryHref === '/contact';

  return (
    <section className="hp-cta">
      <span className="hp-cta__mark" aria-hidden="true">SA</span>
      <div className="hp-shell">
        <motion.div
          className="hp-cta__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <span className="hp-eyebrow hp-eyebrow--ink">Start at the source</span>
          <h2 className="hp-display hp-cta__title">{headline}</h2>
          <p className="hp-cta__copy">{subtext}</p>
          <div className="hp-cta__actions">
            {primaryIsContact ? (
              <button type="button" onClick={() => openContactModal()} className="hp-btn hp-btn--ink hp-btn--lg">
                {primaryLabel} <span className="hp-btn__arrow" aria-hidden="true">→</span>
              </button>
            ) : (
              <Link href={primaryHref} className="hp-btn hp-btn--ink hp-btn--lg">
                {primaryLabel} <span className="hp-btn__arrow" aria-hidden="true">→</span>
              </Link>
            )}
            <Link href={secondaryHref} className="hp-btn hp-btn--outline-ink hp-btn--lg">
              {secondaryLabel} <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
        <p className="hp-cta__index" aria-hidden="true">{index}</p>
      </div>
    </section>
  );
}
