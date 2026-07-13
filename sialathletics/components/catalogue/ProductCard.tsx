'use client';

import React from 'react';
import { motion } from 'motion/react';
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
    <motion.div
      onClick={() => onViewDetails(product)}
      whileHover={{
        y: -6,
        scale: 1.015,
        boxShadow: '0 24px 60px rgba(232, 0, 28, 0.18)',
        borderColor: 'rgba(232, 0, 28, 0.35)',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--white-08)',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
      }}
      className="group product-card"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--white-08)]" style={{ padding: '0.75rem', background: 'var(--bg-raised)' }}>
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3.5 right-3.5 z-10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-[4px] ${getBadgeStyle(product.badge)}`}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.specs.slice(0, 4).map((spec, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', height: '20px' }}>
                    <span style={{ color: 'var(--white-60)', fontWeight: 500 }}>{spec.label}</span>
                    <div style={{ flexGrow: 1, borderBottom: '1px dashed rgba(255, 255, 255, 0.1)', margin: '0 8px' }} />
                    <span style={{ color: 'var(--white)', fontWeight: 700 }} title={spec.value}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MOQ Label without block background/border */}
          {product.moq && (
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)' }} />
                MOQ: <span style={{ color: 'var(--white)', fontWeight: 800 }}>{product.moq}</span>
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
            style={{ background: 'none', border: 'none', padding: 0 }}
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
    </motion.div>
  );
}

export default ProductCard;
