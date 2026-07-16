'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

export default function GlobalRacketAnimation({ onFramesReady }: { onFramesReady?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const tickingRef = useRef(false);
  const narrativeRectRef = useRef({ top: 0, height: 0 });

  const [isReady, setIsReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const FRAME_COUNT = 205;

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const getFramePath = (index: number) => {
    // index is 1-based, padded to 3 digits: 001, 002, ..., 205
    const paddedIndex = index.toString().padStart(3, '0');
    return `/racket_animation/frame_${paddedIndex}.webp`;
  };

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        // Trigger ready when at least 20 frames are loaded to prevent massive delay
        // but keep loading the rest in the background
        if (loadedCount === 20 && !isReady) {
          setIsReady(true);
          onFramesReady?.();
          drawFrame(1);
        } else if (loadedCount === FRAME_COUNT && !isReady) {
          setIsReady(true);
          onFramesReady?.();
          drawFrame(1);
        }
      };
      frames.push(img);
    }
    framesRef.current = frames;
  }, [isReady, onFramesReady]);

  // Setup Canvas Context
  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const measureSection = useCallback(() => {
    const narrativeEl = document.getElementById('video-narrative');
    if (!narrativeEl) return;
    const rect = narrativeEl.getBoundingClientRect();
    narrativeRectRef.current = {
      top: rect.top + window.scrollY,
      height: rect.height,
    };
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const img = framesRef.current[frameIndex - 1]; // 0-based array

    if (!canvas || !ctx || !img || !img.complete) return;

    // Handle high DPI displays for crispness
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Only resize canvas backing store if it doesn't match
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);
    // Draw white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Calculate "contain" aspect ratio
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image -> match height, center horizontally
      drawHeight = rect.height;
      drawWidth = img.width * (rect.height / img.height);
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Canvas is taller than image -> match width, center vertically
      drawWidth = rect.width;
      drawHeight = img.height * (rect.width / img.width);
      offsetX = 0;
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  const updateFrame = useCallback(() => {
    if (reducedMotion) return;

    const { top, height } = narrativeRectRef.current;
    const viewH = window.innerHeight;

    const scrollStart = top;
    const scrollRange = height - viewH;

    if (scrollRange <= 0) return;

    let progress = (window.scrollY - scrollStart) / scrollRange;
    progress = Math.min(1, Math.max(0, progress));

    const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.floor(progress * FRAME_COUNT) + 1));

    drawFrame(currentFrame);
  }, [reducedMotion, drawFrame]);

  useEffect(() => {
    if (!isReady || reducedMotion) return;

    measureSection();

    const onScroll = () => {
      if (!tickingRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          updateFrame();
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    const onResize = () => {
      measureSection();
      updateFrame();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initial draw
    setTimeout(() => {
      measureSection();
      onScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isReady, reducedMotion, measureSection, updateFrame]);

  // If reduced motion is preferred, we could animate on a timer, 
  // but for a strict scroll sequence, it's safer to just show the first frame.
  useEffect(() => {
    if (reducedMotion && isReady) {
      drawFrame(1);
    }
  }, [reducedMotion, isReady, drawFrame]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#ffffff',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
    </div>
  );
}
