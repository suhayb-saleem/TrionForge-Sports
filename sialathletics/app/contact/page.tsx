import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { contactFaqs } from '@/data/contactFaq';

export const metadata: Metadata = {
  title: 'Contact — Get an OEM Padel/Pickleball Quote',
  description: 'Request a factory-direct quote for OEM padel rackets or wholesale pickleball paddles. Private-label programs and sample orders. We respond within 24 hours.',
  alternates: { canonical: '/contact' },
};

const contactFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('Contact', '/contact')} />
      <JsonLd data={contactFaqJsonLd} />
      <PageHero
        crumb="Contact"
        eyebrow="Let's talk"
        title="Get in touch."
        image="/images/contactpage_section.png"
        imageAlt="A SIAL Athletics padel racket leaning against the net on an outdoor court at sunset"
      />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}
