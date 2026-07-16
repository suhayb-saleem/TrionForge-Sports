'use client';
import React from 'react';
import Hero from '@/components/landing/Hero';
import GlobalRacketAnimation from '@/components/landing/GlobalRacketAnimation';
import VideoNarrative from '@/components/landing/VideoNarrative';
import ProductTeaser from '@/components/landing/ProductTeaser';
import TrustStrip from '@/components/landing/TrustStrip';
import AboutSection from '@/components/landing/AboutSection';
import CTABanner from '@/components/landing/CTABanner';
import { Contact } from '@/components/landing/Contact';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 
        This is fixed to the viewport and sits behind everything (z-index: -1).
        It will be visible anywhere the page has a transparent background.
      */}
      <GlobalRacketAnimation />

      {/* Transparent Foreground Content (The Journey) */}
      <div style={{ position: 'relative' }}>
        {/* Minimal Hero Header Section */}
        <Hero />

        {/* The Live Video Scrubbing Narrative */}
        <VideoNarrative />
      </div>

      {/* Solid "Aftermath" Content (The Sales Funnel) */}
      <div className="relative z-20 bg-black shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">

        {/* Products teaser slides up immediately after the video to capture interest */}
        <ProductTeaser />

        {/* Reinforce with Trust & About */}
        <TrustStrip />
        <AboutSection />

        {/* Close the deal */}
        <CTABanner />
        <Contact />
      </div>
    </main>
  );
}
