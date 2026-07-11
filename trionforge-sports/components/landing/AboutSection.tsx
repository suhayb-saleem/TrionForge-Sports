'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

function StatCounter({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress * (2 - progress); // Ease out quad
        
        if (isDecimal) {
          setCount(Math.floor(easeProgress * (target * 10)));
        } else {
          setCount(Math.floor(easeProgress * target));
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, target, isDecimal]);

  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const stats = [
    { target: 10, suffix: '+', label1: 'Years', label2: 'Mfg.' },
    { target: 300, suffix: '+', label1: 'Happy', label2: 'Clients' },
    { target: 50, suffix: '+', label1: 'Countries', label2: 'Reached' },
    { target: 1, suffix: 'M+', isDecimal: true, label1: 'Products', label2: 'Built' },
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 texture-steel pointer-events-none" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text & Content */}
          <AnimatedSection direction="up" className="space-y-6">
            <SectionLabel showDash={true}>
              ABOUT SIAL ATHLETICS
            </SectionLabel>
            
            <h2 className="font-display text-[40px] sm:text-[56px] text-white leading-[1.05] uppercase">
              YOUR EDGE STARTS<br />AT THE SOURCE.
            </h2>
            
            <p className="font-body text-[#C8C8C8] text-base leading-[1.7] max-w-[480px]">
              SIAL Athletics manufactures premium pickleball paddles and padel rackets in Sialkot — Pakistan&apos;s sporting goods capital. We combine decades of craftsmanship with modern carbon fiber technology to deliver pro-grade equipment at factory-direct pricing. Precision. Performance. Durability. Innovation.
            </p>
            
            <div className="pt-4">
              <Link href="/catalogue">
                <Button variant="primary" size="md">
                  Explore Our Products &rarr;
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column: Image & Stats Card */}
          <AnimatedSection direction="up" delay={0.2} className="relative">
            {/* Main Lifestyle Image Container */}
            <div className="relative w-full aspect-[4/3] bg-brand-secondary overflow-hidden border border-white/8">
              {/* TODO: Replace with real product lifestyle image — place file at /public/images/about_lifestyle.jpg */}
              <Image
                src="/images/about_lifestyle.jpg"
                alt="SIAL Athletics Premium Manufacturing Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Stat Overlay Card */}
            {/* Positioned bottom-left, offset outward on desktop */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-12 lg:-left-12 bg-white text-[#101010] p-8 w-full sm:w-[320px] shadow-2xl z-10 border border-white/10 rounded-none">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-display text-[42px] text-brand-red leading-none font-bold">
                      <StatCounter target={stat.target} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                    </div>
                    <div className="font-body text-[10px] sm:text-[12px] font-semibold text-[#101010] uppercase tracking-wider leading-tight">
                      {stat.label1}
                      <br />
                      {stat.label2}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

