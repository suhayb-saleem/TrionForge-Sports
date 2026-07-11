import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import QualityHero from '@/components/quality/QualityHero';
import QualityChecklist from '@/components/quality/QualityChecklist';
import QualityStandards from '@/components/quality/QualityStandards';

export const metadata: Metadata = {
  title: 'Quality Standards — SIAL Athletics',
  description: 'USAPA-compliant manufacturing. Every SIAL Athletics paddle meets strict surface roughness, deflection, and dimensional standards.',
};

export default function QualityPage() {
  return (
    <main>
      <QualityHero />
      <QualityChecklist />
      <QualityStandards />
      <CTABanner
        headline="QUALITY YOU CAN PUT YOUR BRAND ON."
        subtext="Let's discuss your requirements and manufacturing specs."
        primaryLabel="GET A QUOTE"
        primaryHref="/contact"
        secondaryLabel="VIEW PRODUCTS"
        secondaryHref="/catalogue"
      />
    </main>
  );
}
