import React from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

export function CatalogueHero() {
  return (
    <section className="relative overflow-hidden font-body" style={{ background: 'var(--bg-raised)', borderBottom: '1px solid var(--white-08)', paddingTop: '160px', paddingBottom: '4rem' }}>
      <div className="absolute inset-0 texture-steel pointer-events-none opacity-30" />
      <div className="absolute inset-0 texture-noise pointer-events-none opacity-30" />

      <div className="container-custom relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white-60)', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color 0.2s' }}
             onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
             onMouseLeave={e => (e.currentTarget.style.color = 'var(--white-60)')}>
            Home
          </Link>
          <span style={{ color: 'var(--red)', fontWeight: 'bold' }}>/</span>
          <span style={{ color: 'var(--white)', fontWeight: 700 }}>Products</span>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <SectionLabel showSlash={true} className="justify-center mb-1">
            OUR PRODUCTS
          </SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', lineHeight: 0.95, textTransform: 'uppercase', margin: '0.5rem 0 1rem' }} className="select-none">
            THE FULL LINEUP
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--white-60)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.65, textAlign: 'center' }}>
            Premium pickleball paddles and padel rackets. Factory-direct. Pro-grade. US-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
