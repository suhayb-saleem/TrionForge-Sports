'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface ProductImageSliderProps {
  images?: string[];
  defaultImage: string;
  name: string;
  aspectRatioClass?: string;
  className?: string;
}

export function ProductImageSlider({
  images = [],
  defaultImage,
  name,
  aspectRatioClass = 'aspect-[16/10]',
  className = ''
}: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideImages = images && images.length > 0 ? images : [defaultImage];
  const hasMultiple = slideImages.length > 1;

  const goTo = useCallback((nextIndex: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(nextIndex);
  }, []);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % slideImages.length, 1);
  }, [currentIndex, slideImages.length, goTo]);

  // Auto-play when hovered (desktop) or in view (mobile)
  useEffect(() => {
    if (!hasMultiple) return;

    if (isHovered) {
      intervalRef.current = setInterval(goNext, 1400);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Reset to first image after a short delay when hover leaves
      const t = setTimeout(() => setCurrentIndex(0), 300);
      return () => clearTimeout(t);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, hasMultiple, goNext]);

  // Intersection observer for mobile auto-play
  useEffect(() => {
    if (!hasMultiple) return;
    const isMobile = () => window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isMobile()) {
            if (entry.isIntersecting) {
              setIsHovered(true);
            } else {
              setIsHovered(false);
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasMultiple]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${aspectRatioClass} overflow-hidden ${className}`}
      style={{ background: 'var(--bg-raised)' }}
    >
      {/* Progress bars — shown when hovered & multiple images */}
      {hasMultiple && isHovered && (
        <div className="absolute top-2.5 left-0 w-full px-3 z-20 flex gap-1 pointer-events-none">
          {slideImages.map((_, idx) => (
            <div key={idx} className="h-[2px] bg-white/15 flex-1 relative overflow-hidden rounded-full">
              {idx < currentIndex && (
                <div className="h-full bg-brand-red w-full" />
              )}
              {idx === currentIndex && (
                <motion.div
                  key={`bar-${currentIndex}`}
                  className="h-full bg-brand-red absolute left-0 top-0 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.4, ease: 'linear' }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Image count badge when not hovered */}
      {hasMultiple && !isHovered && (
        <div className="absolute bottom-2 right-2 z-20 bg-black/50 text-white text-[10px] font-body tracking-wider px-2 py-0.5 rounded-sm pointer-events-none">
          1 / {slideImages.length}
        </div>
      )}

      {/* Animated slides */}
      <div className="absolute inset-0 p-3">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-3"
          >
            <Image
              src={slideImages[currentIndex]}
              alt={`${name} - View ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-contain transition-transform duration-500 ease-out ${isHovered ? 'scale-[1.03]' : 'scale-100'}`}
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProductImageSlider;
