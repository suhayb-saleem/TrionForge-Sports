'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function AboutStory() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)' }}>
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
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hp-ink)', margin: '1rem 0 1.5rem' }}>
            From Sialkot<br />to your shelves.
          </h2>
          <p className="body-copy" style={{ color: 'var(--hp-ink-70)', marginBottom: '1.25rem' }}>
            We manufacture padel rackets and pickleball paddles in Sialkot, Pakistan — a city with
            over a century of experience making sporting goods.
          </p>
          <p className="body-copy" style={{ color: 'var(--hp-ink-70)', marginBottom: '1.25rem' }}>
            Our factory combines that experience with modern materials and equipment. Every racket
            and paddle is checked before it leaves the factory.
          </p>
          <p className="body-copy" style={{ color: 'var(--hp-ink-70)', marginBottom: '2rem' }}>
            Brands, retailers, and distributors come to us for{' '}
            <Link href="/manufacturing" style={{ color: 'var(--hp-ink)', textDecorationColor: 'var(--hp-red)' }}>custom builds to their own spec</Link>{' '}
            or one of our own designs with their branding.
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
