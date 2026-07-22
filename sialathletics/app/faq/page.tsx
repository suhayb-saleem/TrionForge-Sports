import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import FaqSections from '@/components/faq/FaqSections';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { faqCategories } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ — Padel & Pickleball OEM Manufacturing',
  description: 'Answers for B2B buyers: minimum order quantities, sampling and lead times, private-label branding, quality control, and shipping from Sialkot, Pakistan.',
  alternates: { canonical: '/faq' },
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
      <JsonLd data={breadcrumbJsonLd('FAQ', '/faq')} />
      <PageHero
        crumb="FAQ"
        eyebrow="Buyer questions"
        title="Frequently asked questions."
        subtitle="Answers to what buyers ask us most."
      />
      <FaqSections />
      <CTABanner
        headline="Question not covered here?"
        subtext="Send it to us directly — we respond within 24 hours."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Explore capabilities"
        secondaryHref="/manufacturing"
        index="SIAL / 06"
      />
    </main>
  );
}
