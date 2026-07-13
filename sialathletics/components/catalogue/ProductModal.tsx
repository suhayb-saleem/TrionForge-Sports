'use client';

import React, { useEffect, useState } from 'react';
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

  // Lock body scroll is removed here to allow selecting background cards freely

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
        <div
          className="fixed inset-0 overflow-hidden font-body"
          role="dialog"
          aria-modal="true"
          style={{ zIndex: 120, pointerEvents: 'none' }} // passes clicks through to background
        >
          {/* Drawer Container (Floating margin and padding on desktop, clickable details) */}
          <div className="absolute inset-y-0 right-0 flex p-0 sm:p-4 sm:pl-10 w-screen sm:w-[480px]" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 240, mass: 0.8 }}
              className="w-full relative flex flex-col product-drawer sm:rounded-[20px] rounded-none overflow-hidden"
              style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--white-08)',
                boxShadow: '-20px 20px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(232, 0, 28, 0.04)',
              }}
            >
              {/* 1. FIXED TOP HEADER BAR */}
              <div
                className="flex items-center justify-between px-6 py-5 shrink-0"
                style={{
                  background: 'rgba(10, 10, 10, 0.55)',
                  backdropFilter: 'blur(12px)',
                  borderBottom: '1px solid var(--white-08)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[12px] font-bold uppercase tracking-[0.2em] text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Product Profile
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--white-20)' }} />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full animate-pulse"
                    style={{ fontFamily: 'var(--font-display)', boxShadow: '0 0 10px rgba(232,0,28,0.1)' }}
                  >
                    {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="hover:text-white hover:bg-brand-red transition-all duration-200 cursor-pointer p-2 flex items-center justify-center animate-none"
                  style={{
                    color: 'var(--white-60)',
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  }}
                  aria-label="Close details"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Scrollable Content (Single-Column Vertical Stacking) */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                
                {/* ═══ TOP: IMAGE GALLERY ═══ */}
                <div className="relative flex flex-col h-[260px] sm:h-[300px] w-full shrink-0" style={{ background: 'var(--bg-base)', borderBottom: '1px solid var(--white-08)' }}>
                  {/* Main image area */}
                  <div className="relative flex-1 overflow-hidden flex items-center justify-center p-6 pb-2">
                    {/* Ambient glow */}
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,0,28,0.05) 0%, transparent 70%)' }}
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
                            sizes="420px"
                            className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
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
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 hover:bg-brand-red hover:border-brand-red text-white hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
                          style={{ background: 'rgba(22,22,22,0.9)', border: '1px solid var(--white-08)', borderRadius: '6px' }}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={goNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 hover:bg-brand-red hover:border-brand-red text-white hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
                          style={{ background: 'rgba(22,22,22,0.9)', border: '1px solid var(--white-08)', borderRadius: '6px' }}
                          aria-label="Next image"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {/* Image counter */}
                    <div className="absolute bottom-3 right-4 z-20 text-[10px] tracking-widest" style={{ color: 'var(--white-60)' }}>
                      {activeImg + 1} / {slideImages.length}
                    </div>
                  </div>

                  {/* Thumbnail strip */}
                  {slideImages.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto px-4 pb-3 pt-0.5 scrollbar-hide justify-center">
                      {slideImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => goTo(idx)}
                          className={`relative flex-shrink-0 w-11 h-11 border transition-all duration-200 cursor-pointer overflow-hidden ${
                            idx === activeImg
                              ? 'border-brand-red'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                          style={{ borderRadius: '4px' }}
                          aria-label={`View image ${idx + 1}`}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} thumbnail ${idx + 1}`}
                            fill
                            sizes="44px"
                            className="object-contain p-0.5"
                          />
                          {idx === activeImg && (
                            <div className="absolute inset-0 bg-brand-red/10" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* ═══ BOTTOM: INFO AREA ═══ */}
                <div className="p-5 md:p-6 space-y-6">
                  {/* Name & Tagline */}
                  <div>
                    <span
                      className="text-brand-red text-[9px] font-bold uppercase tracking-[0.25em] mb-1.5 block"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
                    </span>
                    <h2
                      className="font-display text-[24px] sm:text-[28px] text-white uppercase leading-tight mb-2 tracking-wide"
                    >
                      {product.name}
                    </h2>
                    <p
                      className="text-xs italic font-semibold tracking-wider"
                      style={{ color: 'var(--white-50)' }}
                    >
                      &ldquo;{product.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Description Card */}
                  <div className="text-xs leading-relaxed text-[var(--white-80)] border-l-2 border-brand-red/40 pl-4 py-1">
                    {product.description}
                  </div>

                  {/* 2. SPECIFICATIONS HUD PANEL */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.015)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '16px',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                    }}
                  >
                    {/* Panel Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        paddingBottom: '0.65rem',
                        marginBottom: '0.15rem',
                      }}
                    >
                      <span style={{ width: '3px', height: '11px', background: 'var(--red)', borderRadius: '2px' }} />
                      <h4
                        className="text-[9px] text-white uppercase tracking-[0.2em] font-bold"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Technical Specifications
                      </h4>
                    </div>

                    {/* Specifications List */}
                    <div className="space-y-3">
                      {product.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between text-xs py-0.5 hover:text-white transition-colors duration-150"
                        >
                          <span className="font-semibold text-white-45 uppercase tracking-wider">{spec.label}</span>
                          <div style={{ flexGrow: 1, borderBottom: '1px dashed rgba(255, 255, 255, 0.08)', margin: '0 12px' }} />
                          <span className="font-bold text-white uppercase tracking-wide">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Integrated MOQ Highlight Row */}
                    {product.moq && (
                      <div
                        style={{
                          marginTop: '0.15rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              display: 'inline-block',
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: 'var(--red)',
                              boxShadow: '0 0 8px var(--red), 0 0 15px var(--red)',
                            }}
                            className="animate-pulse"
                          />
                          <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-white-45">
                            Minimum Order Quantity
                          </span>
                        </div>
                        <span className="text-xs text-brand-red font-bold uppercase tracking-wider">
                          {product.moq}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* 3. STICKY BOTTOM ACTION BAR */}
              <div
                className="p-5 flex flex-col gap-4 shrink-0"
                style={{
                  background: 'rgba(15, 15, 15, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderTop: '1px solid var(--white-08)',
                }}
              >
                {/* Customization label */}
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-[0.15em] font-bold text-brand-red mb-0.5">
                    Private Label / OEM Customization
                  </div>
                  <div className="text-[10.5px] text-white-60 leading-normal">
                    Custom mold shapes, logo integration, and specifications available.
                  </div>
                </div>
                {/* Two side-by-side action buttons */}
                <div className="flex items-center gap-3 w-full">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={onClose}
                    className="flex-1 flex items-center justify-center !py-2.5"
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => { onInquire(product); onClose(); }}
                    className="flex-1 flex items-center justify-center gap-2 !py-2.5"
                  >
                    <Mail size={14} />
                    <span>Request Quote</span>
                  </Button>
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
