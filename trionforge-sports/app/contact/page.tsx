import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact SIAL Athletics — Get a Quote',
  description: 'Contact SIAL Athletics for OEM manufacturing quotes, private label inquiries, sample requests, and wholesale pricing. Factory direct from Sialkot.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}
