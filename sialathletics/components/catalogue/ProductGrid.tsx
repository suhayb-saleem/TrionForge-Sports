'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Product } from '@/data/products';
import { ProductCard } from '@/components/catalogue/ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onInquire: (product: Product) => void;
}

export function ProductGrid({ products, onViewDetails, onInquire }: ProductGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  if (products.length === 0) {
    return (
      <div className="py-24 text-center border border-white/8 bg-[#141414] z-10 relative">
        <p className="font-body text-[#8A8A8A] text-sm uppercase tracking-widest">
          No products found matching your filter selections.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={products.map((p) => p.id).join('-')} // Force re-animation when category filters change
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 z-10 relative"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={cardVariants} className="h-full">
          <ProductCard
            product={product}
            onViewDetails={onViewDetails}
            onInquire={onInquire}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
