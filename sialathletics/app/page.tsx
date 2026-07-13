import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { AboutSection } from '@/components/landing/AboutSection';
import { Capabilities } from '@/components/landing/Capabilities';
import { ProductTeaser } from '@/components/landing/ProductTeaser';
import { CTABanner } from '@/components/landing/CTABanner';
import { Contact } from '@/components/landing/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Header Section */}
      <Hero />
      
      {/* Trust Strip features */}
      <TrustStrip />
      
      {/* Brand story section */}
      <AboutSection />
      
      {/* OEM/ODM Capabilities */}
      <Capabilities />
      
      {/* Products teaser */}
      <ProductTeaser />
      
      {/* Full-width call-to-action */}
      <CTABanner />
      
      {/* B2B contact form */}
      <Contact />
    </main>
  );
}
