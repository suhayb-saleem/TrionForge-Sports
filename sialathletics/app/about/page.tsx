import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutStats from '@/components/about/AboutStats';
import AboutValues from '@/components/about/AboutValues';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us — Padel & Pickleball Manufacturer',
  description: 'SIAL Athletics manufactures carbon fiber padel rackets and pickleball paddles in Sialkot, Pakistan, with factory-direct OEM/ODM programs.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('About', '/about')} />
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="Who we are."
        image="/images/about/aboutpage_section.png"
        imageAlt="SIAL Athletics factory exterior at sunset, with a branded delivery truck and forklift loading cargo"
      />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <CTABanner
        headline="Want to know more about our process?"
        subtext="Let's talk manufacturing, samples, and timelines."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 03"
      />
    </main>
  );
}
