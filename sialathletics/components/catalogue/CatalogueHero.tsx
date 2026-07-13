import React from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

export function CatalogueHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden font-body" style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="absolute inset-0 texture-steel pointer-events-none opacity-30" />
      <div className="absolute inset-0 texture-noise pointer-events-none opacity-30" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-wider mb-8 text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors duration-200">
            Home
          </Link>
          <span className="mx-2 text-black/20">/</span>
          <span className="text-[var(--text-dark)] font-bold">Products</span>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <SectionLabel showSlash={true} className="justify-center mb-1">
            OUR PRODUCTS
          </SectionLabel>
          <h1 className="font-display text-[56px] sm:text-[72px] text-[var(--text-dark)] leading-none uppercase select-none">
            THE FULL LINEUP
          </h1>
          <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-[var(--text-muted)]">
            Premium pickleball paddles and padel rackets. Factory-direct. Pro-grade. US-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
