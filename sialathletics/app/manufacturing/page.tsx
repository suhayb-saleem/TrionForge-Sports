import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import CapabilityCards from '@/components/capabilities/CapabilityCards';
import ProcessTimeline from '@/components/capabilities/ProcessTimeline';
import MaterialsBadges from '@/components/capabilities/MaterialsBadges';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'OEM/ODM Padel & Pickleball Paddle Manufacturing',
  description: 'How SIAL Athletics builds padel rackets and pickleball paddles: carbon layups, precision molding, mold design, QC testing, and export logistics.',
  alternates: { canonical: '/manufacturing' },
};

export default function ManufacturingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('Manufacturing', '/manufacturing')} />
      <PageHero
        crumb="Manufacturing"
        eyebrow="What we do"
        title="End-to-end manufacturing."
        subtitle="Padel rackets and pickleball paddles, made start to finish in our factory."
        image="/images/manufacturing/manufacturing_section.png"
        imageAlt="Studio product photo of a SIAL Athletics carbon fiber padel racket"
      />
      <CapabilityCards />
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
