import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import CapabilityCards from '@/components/capabilities/CapabilityCards';
import EngineeringDisciplines from '@/components/capabilities/EngineeringDisciplines';
import ProcessTimeline from '@/components/capabilities/ProcessTimeline';
import MaterialsBadges from '@/components/capabilities/MaterialsBadges';

export const metadata: Metadata = {
  title: 'Padel Racket & Pickleball Paddle Manufacturing — OEM/ODM Capabilities',
  description: 'How SIAL Athletics builds padel rackets and pickleball paddles: 3K–24K carbon layups, EVA and polypropylene honeycomb cores, precision molding, mold design, QC testing, and export logistics from Sialkot.',
};

export default function CapabilitiesPage() {
  return (
    <main>
      <PageHero
        crumb="Manufacturing"
        eyebrow="What we do"
        title="End-to-end manufacturing."
        subtitle="Padel rackets and pickleball paddles, from concept to courier — we handle the full production cycle."
      />
      <CapabilityCards />
      <EngineeringDisciplines />
      <ProcessTimeline />
      <MaterialsBadges />
      <CTABanner
        headline="Ready to spec your first order?"
        subtext="Send us your requirements and we'll respond within 24 hours."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 04"
      />
    </main>
  );
}
