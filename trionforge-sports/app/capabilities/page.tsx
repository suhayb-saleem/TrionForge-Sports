import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import CapabilitiesHero from '@/components/capabilities/CapabilitiesHero';
import CapabilityCards from '@/components/capabilities/CapabilityCards';
import ProcessTimeline from '@/components/capabilities/ProcessTimeline';
import MaterialsBadges from '@/components/capabilities/MaterialsBadges';

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities — TrionForge Sports',
  description: 'End-to-end sports equipment manufacturing: OEM, ODM, private label, carbon fiber molding, quality control, and global logistics from Sialkot.',
};

export default function CapabilitiesPage() {
  return (
    <main>
      <CapabilitiesHero />
      <CapabilityCards />
      <ProcessTimeline />
      <MaterialsBadges />
      <CTABanner
        headline="READY TO SPEC YOUR FIRST ORDER?"
        subtext="Send us your requirements and we'll respond within 24 hours."
        primaryLabel="GET A QUOTE"
        primaryHref="/contact"
        secondaryLabel="VIEW PRODUCTS"
        secondaryHref="/catalogue"
      />
    </main>
  );
}
