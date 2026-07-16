'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function ProductTeaser() {
  const featured = products.slice(0, 3);
  return (
    <section style={{ background: '#ffffff', padding: '8rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionLabel showSlash={true}>WHAT WE MAKE</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: '#111', lineHeight: 0.9, marginTop: '0.75rem' }}>
              OUR SIGNATURE LINE
            </h2>
          </div>
          <Link href="/catalogue" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', textDecoration: 'none', borderBottom: '2px solid var(--red)', paddingBottom: '3px', transition: 'color 0.2s' }} className="hide-mobile hover:text-black">
            VIEW ALL →
          </Link>
        </div>

        {/* Grid */}
        <div className="product-teaser-grid" style={{ display: 'grid', gap: '1.5rem' }}>
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{
                y: -6,
                scale: 1.015,
                boxShadow: '0 24px 60px rgba(232, 0, 28, 0.18)',
                borderColor: 'rgba(232, 0, 28, 0.35)',
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 22
              }}
              style={{
                background: '#f5f5f5',
                border: '1px solid rgba(0,0,0,0.06)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer',
              }}
              className="group"
            >
              {/* Red top border that slides in on hover */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--red)', transformOrigin: 'left', zIndex: 2 }} />

              {/* Image area */}
              <div style={{ aspectRatio: '4/3', background: '#eeeeee', overflow: 'hidden', position: 'relative', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '100%', height: '100%', position: 'relative', padding: '1rem' }}>
                  <Image
                    src={p.imagePath}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    className="group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                  />
                </div>
                {/* Badge */}
                {p.badge && (
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--red)', color: 'var(--white)', padding: '4px 10px', fontSize: '0.6rem', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', zIndex: 3, borderRadius: '4px' }}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Content wrapper with flex layout for perfect alignment */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontSize: '0.6rem', color: 'var(--red)', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {p.category === 'pickleball' ? 'PICKLEBALL' : 'PADEL'}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#111', marginBottom: '0.4rem', letterSpacing: '0.03em', textTransform: 'uppercase' }} className="group-hover:text-[var(--red)] transition-colors duration-200">{p.name}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(0,0,0,0.55)', lineHeight: 1.6, margin: 0 }}>{p.tagline}</p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <Link href="/catalogue" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(0,0,0,0.45)', fontWeight: 700, letterSpacing: '0.1' + 'em', textDecoration: 'none' }} className="group-hover:text-black transition-colors duration-200">
                    VIEW DETAILS →
                  </Link>
                  <Button variant="primary" size="sm" className="!py-2 !px-4">Inquire</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="show-mobile">
          <Link href="/catalogue" style={{ display: 'inline-block', border: '1px solid #111', color: '#111', padding: '12px 28px', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>

      <style>{`
        .product-teaser-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 768px) {
          .product-teaser-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
