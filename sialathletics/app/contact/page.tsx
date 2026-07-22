import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact — Get an OEM Quote for Padel Rackets & Pickleball Paddles',
  description: 'Request a factory-direct quote for OEM padel rackets or wholesale pickleball paddles: private-label programs, sample orders, and custom specs. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        crumb="Contact"
        eyebrow="Let's talk"
        title="Get in touch."
        subtitle="Factory-direct quotes. Samples. Private label programs."
        image="/images/contactpage_section.png"
        imageAlt="SIAL Athletics contact"
      />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}
