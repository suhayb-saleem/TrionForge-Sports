'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function AboutStory() {
  return (
    <section style={{ background: '#050505', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ aspectRatio: '4/3', background: '#141414', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}
        >
          {/* Replace with next/image when photo available */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#9A9A9A', fontSize: '0.75rem', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>FACTORY PHOTO</span>
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SectionLabel>ABOUT TRIONFORGE SPORTS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 0.95, margin: '1rem 0 1.5rem' }}>
            FROM SIALKOT<br />TO YOUR SHELVES.
          </h2>
          <p style={{ color: '#9A9A9A', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '1.25rem' }}>
            TrionForge Sports was born from a simple belief: premium sports equipment shouldn&apos;t require a premium middleman. We manufacture pickleball paddles and padel rackets in Sialkot, Pakistan — the city that supplies the world with sporting goods, from footballs to cricket bats to rackets.
          </p>
          <p style={{ color: '#9A9A9A', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '1.25rem' }}>
            Our facility combines time-tested Sialkot craftsmanship with modern carbon fiber hot-press molding, advanced surface treatment, and strict quality control protocols aligned with USAPA standards. Every paddle leaves our factory ready for the US market.
          </p>
          <p style={{ color: '#9A9A9A', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '2rem' }}>
            We work with brands, retailers, and distributors who want factory-direct quality without compromise — OEM to your exact spec, or ODM private label built on our proven designs.
          </p>
          <Button href="/catalogue" variant="primary">EXPLORE OUR PRODUCTS →</Button>
        </motion.div>
      </div>
    </section>
  );
}
