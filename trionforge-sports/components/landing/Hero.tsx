'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const leftPanelVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: shouldReduceMotion ? 0 : custom * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const imageVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const h1Lines = [
    ['FORGED', 'FOR'],
    ['CHAMPIONS.'],
    ['BUILT', 'IN'],
    ['SIALKOT.'],
  ];

  // Flatten to get absolute index for staggered word delays
  let wordIndexCounter = 0;

  return (
    <section className="relative min-h-screen bg-brand-dark flex flex-col justify-between overflow-hidden pt-20 md:pt-0">
      {/* Background steel texture */}
      <div className="absolute inset-0 texture-steel pointer-events-none" />
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      {/* Main hero grid */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-[45fr_55fr] w-full">
        {/* Left Content Panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={leftPanelVariants}
          className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 lg:py-24 z-10"
        >
          <SectionLabel showDash={true} className="mb-6">
            Precision Built. Performance Driven.
          </SectionLabel>

          {/* Staggered Heading */}
          <h1 className="font-display text-[56px] sm:text-[72px] lg:text-[88px] text-white leading-[0.95] uppercase mb-6 select-none">
            {h1Lines.map((line, lineIdx) => (
              <div key={lineIdx} className="block overflow-hidden">
                {line.map((word, wordIdx) => {
                  const currentIdx = wordIndexCounter++;
                  return (
                    <motion.span
                      key={wordIdx}
                      custom={currentIdx}
                      variants={wordVariants}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </div>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="font-body text-[#C8C8C8] text-base sm:text-lg max-w-[420px] leading-relaxed mb-10"
            style={{ transitionDelay: '300ms' }}
          >
            Premium pickleball paddles and padel rackets. Factory-direct from Sialkot to the US market.
          </motion.p>

          {/* Two buttons side-by-side */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
            style={{ transitionDelay: '500ms' }}
          >
            <Link href="/catalogue">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Our Products
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Get A Quote
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visual Panel */}
        <div className="relative bg-[#0f0f0f] min-h-[380px] lg:min-h-0 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/8">
          {/* Subtle Ambient Red Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(232,0,28,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Hero Product Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative w-[75%] h-[75%] min-h-[300px] flex items-center justify-center z-10 filter drop-shadow-[0_40px_80px_rgba(232,0,28,0.15)]"
          >
            <motion.div
              className="relative w-full h-full"
              animate={shouldReduceMotion ? {} : {
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* TODO: Replace with real product image — place file at /public/images/products/sa-alpha-16mm.jpg */}
              <Image
                src="/images/products/sa-alpha-16mm.jpg"
                alt="Featured SA Alpha Carbon Paddle"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
