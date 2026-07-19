import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import QualityChecklist from '@/components/quality/QualityChecklist';
import QualityProcess from '@/components/quality/QualityProcess';
import QualityStandards from '@/components/quality/QualityStandards';

export const metadata: Metadata = {
  title: 'Quality Control & Testing Standards — Padel & Pickleball Manufacturing',
  description: 'Stage-by-stage quality control for padel rackets and pickleball paddles: incoming material inspection, layup control, surface finish testing, weight consistency to ±0.1oz, and batch-level QC reports.',
};

export default function QualityPage() {
  return (
    <main>
      <PageHero
        crumb="Quality"
        eyebrow="Our promise"
        title="Quality without compromise."
        subtitle="Every padel racket and pickleball paddle we ship meets its build tolerances — dimension, weight, and balance verified batch by batch."
      />
      <QualityChecklist />
      <QualityProcess />
      <QualityStandards />
      <CTABanner
        headline="Quality you can put your brand on."
        subtext="Let's discuss your requirements and manufacturing specs."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 05"
      />
    </main>
  );
}
