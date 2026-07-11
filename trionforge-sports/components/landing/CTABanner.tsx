'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  headline = 'READY TO BUILD YOUR NEXT PRODUCT WITH US?',
  subtext = "Let's talk manufacturing, private label, and wholesale.",
  primaryLabel = 'GET A QUOTE TODAY',
  primaryHref = '/contact',
  secondaryLabel = 'VIEW CATALOGUE',
  secondaryHref = '/catalogue',
}: CTABannerProps) {
  return (
    <section className="relative min-h-[420px] flex items-center justify-center py-20 font-body overflow-hidden border-y border-white/8">
      {/* Background Cinematic Image */}
      {/* TODO: Replace with real product lifestyle image — place file at /public/images/cta_background.jpg */}
      <Image
        src="/images/cta_background.jpg"
        alt="SIAL Athletics Manufacturing Background"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay (rgba(10,10,10,0.85)) */}
      <div className="absolute inset-0 bg-[#0a0a0a]/85 z-10" />

      {/* Subtle Steel/Noise Textures */}
      <div className="absolute inset-0 texture-steel pointer-events-none z-10" />
      <div className="absolute inset-0 texture-noise pointer-events-none z-10" />

      {/* Content centered */}
      <div className="container-custom relative z-20 text-center space-y-6 max-w-4xl">
        <AnimatedSection direction="up" className="space-y-6">
          <h2 className="font-display text-[44px] sm:text-[64px] text-white leading-[1.0] uppercase select-none">
            {headline}
          </h2>
          
          <p className="text-[#C8C8C8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={primaryHref}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                {primaryLabel}
              </Button>
            </Link>
            <Link href={secondaryHref}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default CTABanner;
