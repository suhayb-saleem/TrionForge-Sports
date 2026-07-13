import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function CatalogueHero() {
  return (
    <section className="bg-[#0f0f0f] pt-32 pb-16 border-b border-white/8 relative overflow-hidden font-body">
      <div className="absolute inset-0 texture-steel pointer-events-none" />
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <div className="text-xs text-[#8A8A8A] uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          <span className="mx-2 text-white/20">/</span>
          <span className="text-white">Products</span>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <SectionLabel showDash={false} className="justify-center mb-1">
            OUR PRODUCTS
          </SectionLabel>
          <h1 className="font-display text-[56px] sm:text-[72px] text-white leading-none uppercase select-none">
            THE FULL LINEUP
          </h1>
          <p className="text-[#C8C8C8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Premium pickleball paddles and padel rackets. Factory-direct. Pro-grade. US-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
