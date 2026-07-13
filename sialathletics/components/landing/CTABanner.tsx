'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const marqueeText = 'PRECISION · PERFORMANCE · DURABILITY · INNOVATION · ';

export default function CTABanner({
  headline = 'READY TO BUILD YOUR NEXT PRODUCT WITH US?',
  subtext = "Let's talk manufacturing, private label, and wholesale.",
  primaryLabel = 'GET A QUOTE',
  primaryHref = '/contact',
  secondaryLabel = 'VIEW PRODUCTS',
  secondaryHref = '/catalogue',
}: CTABannerProps) {
  return (
    <section style={{ position: 'relative', background: 'var(--bg-base)', borderTop: '1px solid var(--white-08)', overflow: 'hidden', padding: '8rem 1.5rem' }}>

      {/* Background marquee text */}
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <motion.div animate={{ x: [0, -2000] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', whiteSpace: 'nowrap', fontFamily: 'var(--font-display)', fontSize: '8rem', color: 'var(--white-04)', letterSpacing: '0.05em', lineHeight: 1 }}>
          {Array(8).fill(marqueeText).join('')}
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          {/* Red line accent */}
          <div style={{ width: '40px', height: '2px', background: 'var(--red)', margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', color: 'var(--white)', lineHeight: 0.9, marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
            {headline}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--white-60)', lineHeight: 1.7, marginBottom: '3rem' }}>
            {subtext}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={primaryHref} style={{ background: 'var(--red)', color: 'var(--white)', padding: '16px 40px', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s ease' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} style={{ border: '1px solid var(--white-30)', color: 'var(--white)', padding: '16px 40px', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s ease' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--white-30)')}>
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
