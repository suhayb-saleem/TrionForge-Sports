'use client';

import React from 'react';
import { Product } from '@/data/products';
import Button from '@/components/ui/Button';
import { ProductImageSlider } from '@/components/ui/ProductImageSlider';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onInquire: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails, onInquire }: ProductCardProps) {
  const getBadgeStyle = (badge: string) => {
    if (badge === 'NEW') {
      return 'bg-black border border-black text-white';
    }
    return 'bg-[var(--red)] text-white';
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="bg-[var(--bg-card)] border border-[var(--white-08)] group hover:-translate-y-1.5 hover:border-[var(--red)]/40 hover:shadow-[0_24px_50px_rgba(232,0,28,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden font-body h-full cursor-pointer"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '16px' }}
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--white-08)]" style={{ padding: '0.75rem', background: 'var(--bg-raised)' }}>
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3.5 right-3.5 z-10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-none ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </div>
        )}

        {/* Product Image Slider */}
        <ProductImageSlider
          images={product.images}
          defaultImage={product.imagePath}
          name={product.name}
          className="w-full h-full"
        />
      </div>

      {/* Info & Spec Content */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Category */}
          <div className="text-[var(--red)] text-[10px] font-bold uppercase tracking-[0.16em]" style={{ margin: 0 }}>
            {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
          </div>

          {/* Name & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <h3 className="font-display text-[26px] sm:text-[28px] text-white leading-[1.1] uppercase tracking-tight group-hover:text-[var(--red)] transition-colors duration-200" style={{ margin: 0 }}>
              {product.name}
            </h3>
            <p className="text-[var(--white-60)] text-[13px] leading-relaxed font-normal" style={{ margin: 0 }}>
              {product.tagline}
            </p>
          </div>

          {/* Key Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="border-t border-[var(--white-08)]" style={{ paddingTop: '1rem', marginTop: '0.25rem' }}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {product.specs.slice(0, 4).map((spec, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-center text-[12px] py-0.5 border-b border-dashed border-white/10 last:border-b-0">
                    <span className="text-[var(--white-60)] font-medium">{spec.label}</span>
                    <span className="text-white font-bold truncate max-w-[90px]" title={spec.value}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MOQ Label */}
          {product.moq && (
            <div style={{ marginTop: '0.25rem' }}>
              <div style={{ borderRadius: '6px' }} className="text-[10px] text-[var(--white-60)] font-bold bg-[var(--bg-base)] border border-[var(--white-08)] inline-block px-3 py-1 uppercase tracking-wider">
                MOQ: <span className="text-[var(--red)] font-extrabold">{product.moq}</span>
              </div>
            </div>
          )}
        </div>

        {/* Buttons / Actions */}
        <div className="flex items-center justify-between gap-4 border-t border-[var(--white-08)]" style={{ paddingTop: '1.25rem', marginTop: 'auto' }}>
          {/* VIEW DETAILS — stops propagation */}
          <button
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); onViewDetails(product); }}
            className="text-xs text-[var(--white-60)] hover:text-white transition-colors duration-200 uppercase font-bold tracking-wider flex items-center gap-1 cursor-pointer"
          >
            View Details →
          </button>

          {/* INQUIRE — stops propagation */}
          <Button
            variant="primary"
            size="sm"
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); onInquire(product); }}
            className="!px-4 !py-2 sm:!px-5 sm:!py-2.5 opacity-100 duration-200 !font-bold"
          >
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
