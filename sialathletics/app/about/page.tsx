import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutStats from '@/components/about/AboutStats';
import AboutValues from '@/components/about/AboutValues';

export const metadata: Metadata = {
  title: 'About Us — Padel & Pickleball Manufacturer in Sialkot, Pakistan',
  description: 'SIAL Athletics manufactures carbon fiber padel rackets and pickleball paddles in Sialkot, Pakistan — combining the city\'s sporting-goods heritage with modern manufacturing and factory-direct OEM/ODM programs.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="Who we are."
        subtitle="Built in Sialkot. Trusted worldwide."
        image="/images/about/aboutpage_section.png"
        imageAlt="SIAL Athletics about"
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
