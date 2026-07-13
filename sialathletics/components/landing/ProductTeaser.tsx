'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { products } from '@/data/products';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ProductTeaser() {
  const featured = products.slice(0, 3);
  return (
    <section style={{ background: 'var(--bg-base)', padding: '8rem 1.5rem', borderTop: '1px solid var(--white-08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <SectionLabel>WHAT WE MAKE</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--white)', lineHeight: 0.9, marginTop: '0.75rem' }}>
              OUR SIGNATURE LINE
            </h2>
          </div>
          <Link href="/catalogue" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white-60)', textDecoration: 'none', borderBottom: '1px solid var(--white-30)', paddingBottom: '3px' }} className="hide-mobile">
            VIEW ALL →
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--white-08)' }}>
          {featured.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              whileHover="hover"
            >
              {/* Red top border that slides in on hover */}
              <motion.div variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }} initial="initial"
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--red)', transformOrigin: 'left', zIndex: 2 }} />

              {/* Image area */}
              <div style={{ aspectRatio: '4/3', background: 'var(--bg-card)', overflow: 'hidden', position: 'relative' }}>
                <motion.div variants={{ hover: { scale: 1.05 }, initial: { scale: 1 } }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Swap for next/image when photos ready */}
                  <span style={{ color: 'var(--white-30)', fontSize: '0.7rem', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>PRODUCT IMAGE</span>
                </motion.div>
                {/* Badge */}
                {p.badge && (
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--red)', color: 'var(--white)', padding: '4px 10px', fontSize: '0.6rem', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '0.6rem', color: 'var(--red)', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {p.category === 'pickleball' ? 'PICKLEBALL' : 'PADEL'}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '0.4rem', letterSpacing: '0.03em' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white-60)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{p.tagline}</p>
                <motion.div variants={{ hover: { x: 4 }, initial: { x: 0 } }} transition={{ duration: 0.2 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--white)', fontWeight: 600, letterSpacing: '0.1em' }}>VIEW DETAILS →</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="show-mobile">
          <Link href="/catalogue" style={{ display: 'inline-block', border: '1px solid var(--white-30)', color: 'var(--white)', padding: '12px 28px', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
