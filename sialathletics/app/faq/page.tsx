import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import FaqSections from '@/components/faq/FaqSections';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { faqCategories } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ — Padel Racket & Pickleball Paddle OEM Manufacturing',
  description: 'Answers for B2B buyers: MOQ for custom padel rackets and wholesale pickleball paddles, sampling and lead times, private-label branding, quality control, and shipping from Sialkot, Pakistan.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <PageHero
        crumb="FAQ"
        eyebrow="Buyer questions"
        title="Frequently asked questions."
        subtitle="Everything a brand, distributor, or club needs to know before starting a manufacturing program with us."
      />
      <FaqSections />
      <CTABanner
        headline="Question not covered here?"
        subtext="Send it to us directly — we respond within 24 hours."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="See our QC process"
        secondaryHref="/quality"
        index="SIAL / 06"
      />
    </main>
  );
}
