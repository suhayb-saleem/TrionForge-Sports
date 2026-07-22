import './home.css';
import type { Metadata } from 'next';
import Hero from '@/components/landing/Hero';
import CredentialMarquee from '@/components/landing/TrustStrip';
import { Range } from '@/components/landing/ProductTeaser';
import { Capabilities } from '@/components/landing/Capabilities';
import WhoWeWorkWith from '@/components/landing/WhoWeWorkWith';
import GlobalReach from '@/components/landing/GlobalReach';
import HomeCTA from '@/components/landing/HomeCTA';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'SIAL Athletics — Padel & Pickleball Paddle OEM Manufacturer' },
  description: 'Factory-direct padel racket and pickleball paddle manufacturing from Sialkot, Pakistan. OEM/ODM private-label programs, low MOQs for brands and distributors.',
  alternates: { canonical: '/' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SIAL Athletics',
  url: 'https://www.sialathletics.com',
  logo: 'https://www.sialathletics.com/images/logo.png',
  description: 'OEM/ODM manufacturer of carbon fiber padel rackets and pickleball paddles, based in Sialkot, Pakistan.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sialkot',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@sialathletics.com',
    availableLanguage: ['English'],
  },
  foundingDate: '2026',
};

export default function Home() {
  return (
    <div className="hp">
      <JsonLd data={organizationJsonLd} />
      <Hero />
      <CredentialMarquee />
      <Range />
      <Capabilities />
      <WhoWeWorkWith />
      <GlobalReach />
      <HomeCTA />
    </div>
  );
}
