'use client';

import React from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { ProductImageSlider } from '@/components/ui/ProductImageSlider';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onInquire: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails, onInquire }: ProductCardProps) {
  const getBadgeStyle = (badge: string) => {
    if (badge === 'NEW') {
      return 'bg-[#141414] border border-white/20 text-white';
    }
    return 'bg-brand-red text-white';
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="bg-[#1a1a1a] border border-white/8 rounded-none group hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between overflow-hidden font-body h-full cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] bg-[#0f0f0f] overflow-hidden border-b border-white/8">
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 right-3 z-10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none ${getBadgeStyle(product.badge)}`}>
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
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="text-brand-red text-[11px] font-semibold uppercase tracking-[0.15em] mb-1">
            {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
          </div>

          {/* Name & Tagline */}
          <h3 className="font-display text-[24px] sm:text-[26px] text-white leading-tight uppercase mb-1">
            {product.name}
          </h3>
          <p className="text-[#8A8A8A] text-xs sm:text-[13px] leading-relaxed mb-4">
            {product.tagline}
          </p>

          {/* Key Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="border-t border-white/8 pt-4 mb-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {product.specs.slice(0, 4).map((spec, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-center text-[12px] py-0.5">
                    <span className="text-[#8A8A8A] font-medium">{spec.label}</span>
                    <span className="text-white font-semibold truncate max-w-[80px]" title={spec.value}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MOQ Label */}
          {product.moq && (
            <div className="text-[11px] text-white font-medium bg-[#0f0f0f] border border-white/5 inline-block px-3 py-1 uppercase tracking-wider mb-6">
              MOQ: <span className="text-brand-red font-semibold">{product.moq}</span>
            </div>
          )}
        </div>

        {/* Buttons / Actions */}
        <div className="flex items-center justify-between gap-4 mt-auto">
          {/* VIEW DETAILS — stops propagation so it doesn't double-fire */}
          <button
            onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
            className="text-xs text-[#8A8A8A] group-hover:text-white transition-colors duration-200 uppercase font-semibold tracking-wider flex items-center gap-1.5 cursor-pointer"
          >
            View Details →
          </button>

          {/* INQUIRE — stops propagation so clicking it doesn't also open details */}
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => { e.stopPropagation(); onInquire(product); }}
            className="!px-4 !py-2 sm:!px-5 sm:!py-2.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-[1.02] duration-200"
          >
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
