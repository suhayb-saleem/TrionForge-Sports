'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { X, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Product } from '@/data/products';
import Button from '@/components/ui/Button';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (product: Product) => void;
}

export function ProductModal({ product, isOpen, onClose, onInquire }: ProductModalProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [direction, setDirection] = useState(1);

  // Reset image index when product changes
  useEffect(() => {
    setActiveImg(0);
    setDirection(1);
  }, [product]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, activeImg, product]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!product) return null;

  const slideImages = product.images && product.images.length > 0
    ? product.images
    : [product.imagePath];

  const goNext = () => {
    setDirection(1);
    setActiveImg((prev) => (prev + 1) % slideImages.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveImg((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const goTo = (idx: number) => {
    setDirection(idx > activeImg ? 1 : -1);
    setActiveImg(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '60%' : '-60%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-60%' : '60%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-body" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Drawer */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 240, mass: 0.8 }}
              className="w-screen max-w-5xl relative flex flex-col"
              style={{ background: 'var(--bg-base)', borderLeft: '1px solid var(--white-08)' }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-30 hover:text-white hover:bg-brand-red transition-all duration-200 cursor-pointer p-2"
                style={{ color: 'var(--white-60)', background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-full">

                  {/* ═══ LEFT: IMAGE GALLERY ═══ */}
                  <div className="relative flex flex-col min-h-[300px] lg:min-h-0 lg:sticky lg:top-0 lg:h-screen" style={{ background: 'var(--bg-base)', borderRight: '1px solid var(--white-04)' }}>

                    {/* Main image area */}
                    <div className="relative flex-1 overflow-hidden flex items-center justify-center p-6 pb-2 min-h-[280px] sm:min-h-[360px]">
                      {/* Ambient glow */}
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,0,28,0.06) 0%, transparent 70%)' }}
                      />

                      {/* Animated image */}
                      <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                          key={activeImg}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="absolute inset-4 flex items-center justify-center"
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={slideImages[activeImg]}
                              alt={`${product.name} - Image ${activeImg + 1}`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                              priority
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Prev / Next arrows */}
                      {slideImages.length > 1 && (
                        <>
                          <button
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 hover:bg-brand-red hover:border-brand-red text-white hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
                            style={{ background: 'rgba(22,22,22,0.9)', border: '1px solid var(--white-08)' }}
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            onClick={goNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 hover:bg-brand-red hover:border-brand-red text-white hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
                            style={{ background: 'rgba(22,22,22,0.9)', border: '1px solid var(--white-08)' }}
                            aria-label="Next image"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </>
                      )}

                      {/* Image counter */}
                      <div className="absolute bottom-3 right-4 z-20 text-[10px] tracking-widest" style={{ color: 'var(--white-60)' }}>
                        {activeImg + 1} / {slideImages.length}
                      </div>
                    </div>

                    {/* Progress dots */}
                    {slideImages.length > 1 && (
                      <div className="flex gap-1.5 justify-center pb-3 px-4">
                        {slideImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className="cursor-pointer transition-all duration-200 rounded-none"
                            aria-label={`Go to image ${idx + 1}`}
                          >
                            <motion.div
                              animate={{
                                width: idx === activeImg ? 20 : 6,
                                backgroundColor: idx === activeImg ? 'var(--red)' : 'var(--white-30)',
                              }}
                              transition={{ duration: 0.25 }}
                              className="h-[3px] rounded-full"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Thumbnail strip */}
                    {slideImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto px-4 pb-4 pt-1 scrollbar-hide">
                        {slideImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`relative flex-shrink-0 w-14 h-14 border-2 transition-all duration-200 cursor-pointer overflow-hidden ${
                              idx === activeImg
                                ? 'border-brand-red'
                                : 'border-white/10 hover:border-white/30'
                            }`}
                            aria-label={`View image ${idx + 1}`}
                          >
                            <Image
                              src={img}
                              alt={`${product.name} thumbnail ${idx + 1}`}
                              fill
                              sizes="56px"
                              className="object-contain p-1"
                            />
                            {idx === activeImg && (
                              <div className="absolute inset-0 bg-brand-red/10" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* ═══ RIGHT: INFO ═══ */}
                  <div className="flex flex-col">
                    <div className="flex-1 p-6 md:p-10 space-y-7 overflow-y-auto">

                      {/* Category + Name */}
                      <div className="pt-8 lg:pt-10">
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="text-brand-red text-[11px] font-semibold uppercase tracking-[0.2em] mb-2"
                        >
                          {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
                        </motion.div>
                        <motion.h2
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="font-display text-[36px] sm:text-[44px] text-white uppercase leading-none mb-2"
                        >
                          {product.name}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25, duration: 0.4 }}
                          className="text-sm italic font-medium"
                          style={{ color: 'var(--white-60)' }}
                        >
                          &ldquo;{product.tagline}&rdquo;
                        </motion.p>
                      </div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="text-sm leading-relaxed text-[var(--white-90)] border-l-2 border-brand-red/40 pl-4"
                      >
                        {product.description}
                      </motion.p>

                      {/* Spec Table */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                        className="space-y-3"
                      >
                        <h4 className="text-[11px] text-white uppercase tracking-widest font-semibold border-b border-white/8 pb-2">
                          Specifications
                        </h4>
                        <table className="w-full text-xs text-left">
                          <tbody>
                            {product.specs.map((spec, sIdx) => (
                              <tr
                                key={sIdx}
                                className="border-b border-white/5 last:border-b-0 hover:bg-white/2 transition-colors duration-150"
                              >
                                <td className="py-3 pr-4 font-medium w-1/2" style={{ color: 'var(--white-60)' }}>{spec.label}</td>
                                <td className="py-3 text-white font-semibold w-1/2">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>

                      {/* MOQ */}
                      {product.moq && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                          className="p-4 flex justify-between items-center"
                          style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                        >
                          <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                            Minimum Order Quantity
                          </span>
                          <span className="text-sm text-brand-red font-bold uppercase tracking-wider">
                            {product.moq}
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Sticky Bottom Action Bar */}
                    <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-center justify-between shrink-0" style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--white-08)' }}>
                      <div className="text-center sm:text-left">
                        <div className="text-[11px] uppercase tracking-wider" style={{ color: 'var(--white-60)' }}>Interested in private label?</div>
                        <div className="text-xs text-white mt-0.5">OEM / Custom mold options available for this model.</div>
                      </div>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => { onInquire(product); onClose(); }}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 !px-6"
                      >
                        <Mail size={15} />
                        <span>Request Factory Quote</span>
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProductModal;
