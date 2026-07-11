'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProductImageSlider } from '@/components/ui/ProductImageSlider';

export function ProductTeaser() {
  // Select 3 signature products for teaser (e.g. Bestsellers and Pro models)
  const teaserProducts = products.filter(p => 
    p.id === 'sa-alpha-16mm' || p.id === 'sa-forge-padel-round' || p.id === 'sa-forge-padel-diamond'
  );

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 texture-steel pointer-events-none" />
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel showDash={false} className="justify-center mb-3">
            WHAT WE MAKE
          </SectionLabel>
          <h2 className="font-display text-[44px] sm:text-[52px] text-white leading-none uppercase mb-4">
            OUR SIGNATURE LINE
          </h2>
          <p className="font-body text-[#C8C8C8] text-base">
            Precision-built paddles and rackets for every level of play.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teaserProducts.map((product, idx) => (
            <AnimatedSection
              key={product.id}
              direction="up"
              delay={idx * 0.1}
              className="bg-[#1a1a1a] border border-white/8 rounded-none group hover:-translate-y-1 hover:border-brand-red/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Slider */}
              <ProductImageSlider
                images={product.images}
                defaultImage={product.imagePath}
                name={product.name}
                className="w-full h-full border-b border-white/8"
              />

              {/* Bottom Content Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-brand-red text-[11px] font-semibold uppercase tracking-widest mb-2 font-body">
                    {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
                  </div>
                  <h3 className="font-display text-[26px] sm:text-[28px] text-white uppercase leading-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-[#8A8A8A] text-[13px] leading-relaxed mb-6">
                    {product.tagline}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/catalogue?product=${product.id}`}
                    className="font-body text-xs text-white hover:text-brand-red transition-colors duration-200 uppercase font-semibold tracking-wider inline-flex items-center gap-1.5"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/catalogue">
            <Button variant="outline" size="md" className="!border-brand-red hover:!bg-brand-red hover:!text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
