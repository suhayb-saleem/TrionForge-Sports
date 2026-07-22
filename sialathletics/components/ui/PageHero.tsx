'use client';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
  /** Full-bleed backdrop photo; a white wash keeps the ink type legible over it. */
  image?: string;
  imageAlt?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PageHero({ eyebrow, title, subtitle, crumb, image, imageAlt }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const words = title.split(' ');

  return (
    <section className={`hp-pagehero${image ? ' hp-pagehero--media' : ''}`}>
      {image && (
        <>
          <div className="hp-pagehero__bg">
            <Image src={image} alt={imageAlt ?? ''} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center right' }} />
          </div>
          <div className="hp-pagehero__scrim" aria-hidden="true" />
        </>
      )}
      <div className="hp-shell">
        <nav aria-label="Breadcrumb" className="hp-pagehero__crumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="hp-pagehero__crumb-current">{crumb}</span>
        </nav>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <SectionLabel>{eyebrow}</SectionLabel>
        </motion.div>

        <h1 className="hp-display hp-pagehero__title">
          {words.map((word, i) => (
            <span key={i} className="hp-pagehero__word">
              <motion.span
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            className="hp-pagehero__subtitle"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
