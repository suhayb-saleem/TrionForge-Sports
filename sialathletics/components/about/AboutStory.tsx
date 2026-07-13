'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function AboutStory() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '6rem 1.5rem' }}>
      <div className="about-story-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '4rem', alignItems: 'center' }}>
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ aspectRatio: '4/3', background: 'var(--bg-card)', border: '1px solid var(--white-08)', position: 'relative', overflow: 'hidden' }}
        >
          <Image
            src="/images/about_lifestyle.jpg"
            alt="SIAL Athletics Factory in Sialkot"
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
          <SectionLabel>ABOUT SIAL ATHLETICS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--white)', lineHeight: 0.95, margin: '1rem 0 1.5rem' }}>
            FROM SIALKOT<br />TO YOUR SHELVES.
          </h2>
          <p style={{ color: 'var(--white-90)', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '1.25rem' }}>
            SIAL Athletics was born from a simple belief: premium sports equipment shouldn&apos;t require a premium middleman. We manufacture pickleball paddles and padel rackets in Sialkot, Pakistan — the city that supplies the world with sporting goods.
          </p>
          <p style={{ color: 'var(--white-90)', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '1.25rem' }}>
            Our facility combines time-tested Sialkot craftsmanship with modern carbon fiber hot-press molding, advanced surface treatment, and strict quality control protocols aligned with USAPA standards. Every paddle leaves our factory ready for the US market.
          </p>
          <p style={{ color: 'var(--white-90)', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '2rem' }}>
            We work with brands, retailers, and distributors who want factory-direct quality without compromise — OEM to your exact spec, or ODM private label built on our proven designs.
          </p>
          <Button href="/catalogue" variant="primary">EXPLORE OUR PRODUCTS →</Button>
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
