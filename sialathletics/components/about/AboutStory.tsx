'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function AboutStory() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-base)' }}>
      <div className="about-story-grid container-custom" style={{ display: 'grid', gap: '4rem', alignItems: 'center' }}>
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}
        >
          <Image
            src="/images/warehouse.png"
            alt="SIAL Athletics facility exterior in Sialkot, Pakistan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SectionLabel>About SIAL Athletics</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--white)', margin: '1rem 0 1.5rem' }}>
            From Sialkot<br />to your shelves.
          </h2>
          <p className="body-copy" style={{ color: 'var(--white-90)', marginBottom: '1.25rem' }}>
            SIAL Athletics was born from a simple belief: premium sports equipment shouldn&apos;t require a premium middleman. We manufacture padel rackets and pickleball paddles in Sialkot, Pakistan — a city with over a century of sporting-goods manufacturing behind it, from hand-stitched footballs to the composite equipment of today.
          </p>
          <p className="body-copy" style={{ color: 'var(--white-90)', marginBottom: '1.25rem' }}>
            Our facility pairs that craftsmanship heritage with modern composite engineering: 3K–24K carbon fiber layups, precision molding, controlled drilling processes, and{' '}
            <Link href="/quality" style={{ color: 'var(--white)', textDecorationColor: 'var(--red)' }}>stage-by-stage quality control</Link>{' '}
            that gates every step of the line. Every racket and paddle leaves the factory verified against its build tolerances.
          </p>
          <p className="body-copy" style={{ color: 'var(--white-90)', marginBottom: '2rem' }}>
            We work as a manufacturing partner, not just a supplier — brands, retailers, and distributors come to us for{' '}
            <Link href="/capabilities" style={{ color: 'var(--white)', textDecorationColor: 'var(--red)' }}>OEM builds to their exact spec</Link>{' '}
            or ODM private-label programs on our proven geometries, factory-direct from the source.
          </p>
          <Button href="/catalogue" variant="primary">Explore our products <span className="hp-btn__arrow" aria-hidden="true">→</span></Button>
        </motion.div>
      </div>

      <style>{`
        .about-story-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
}
