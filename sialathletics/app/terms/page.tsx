import Link from 'next/link';
import type { CSSProperties } from 'react';

export const metadata = { title: 'Terms & Conditions' };

const sections = [
  {
    h: '1. Introduction',
    body: [
      `Welcome to sialathletics.com (the "Site"), operated by SIAL Athletics ("we," "us," or "our"), a padel racket and pickleball paddle manufacturer based in Sialkot, Pakistan. By accessing or using this Site, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use the Site.`,
    ],
  },
  {
    h: '2. Purpose of This Site',
    body: [
      'This Site is provided for informational and business-to-business (B2B) purposes, including showcasing our manufacturing capabilities, product catalogue, and facilitating inquiries from potential business partners, distributors, and retailers. This Site does not currently support direct online purchases or payment processing.',
    ],
  },
  {
    h: '3. No Binding Offer',
    body: [
      'Information presented on this Site — including product specifications, catalogue content, pricing indications (if any), and capabilities — is for general informational purposes only and does not constitute a legally binding offer to sell. Any quote, proposal, or order is subject to a separate written agreement between SIAL Athletics and the requesting party, including agreed specifications, pricing, minimum order quantities, payment terms, and delivery terms.',
    ],
  },
  {
    h: '4. Intellectual Property',
    body: [
      'All content on this Site — including but not limited to text, images, graphics, logos, product designs, animations, and layout — is the property of SIAL Athletics or its licensors and is protected by applicable copyright, trademark, and intellectual property laws.',
      'You may not reproduce, distribute, modify, publicly display, or create derivative works from any content on this Site without our prior written consent, except for the purpose of reasonable business evaluation (e.g., saving a page to review internally before contacting us).',
    ],
  },
  {
    h: '5. Custom Manufacturing and Product Accuracy',
    body: [
      'We manufacture padel rackets and pickleball paddles, including custom molds, specifications, and private-label products upon request. While we strive to ensure the accuracy of technical information, material descriptions, and capabilities presented on this Site, actual production specifications, tolerances, and outcomes will be governed by the specific terms agreed upon in a formal order agreement, not by general statements made on this Site.',
    ],
  },
  {
    h: '6. Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable law, SIAL Athletics shall not be liable for any indirect, incidental, special, or consequential damages arising from: your use of, or inability to use, this Site; any reliance placed on information presented on this Site prior to a formal agreement being executed; or errors, inaccuracies, or omissions in Site content.',
      'This Site and its content are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied.',
    ],
  },
  {
    h: '7. Third-Party Links',
    body: [
      'This Site may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of any third-party websites linked from our Site.',
    ],
  },
  {
    h: '8. User Conduct',
    body: [
      'When using this Site, including our contact form, you agree not to: submit false, misleading, or fraudulent information; attempt to gain unauthorized access to any part of the Site or its underlying systems; or use the Site for any unlawful purpose or in violation of these Terms.',
    ],
  },
  {
    h: '9. Privacy',
    body: [],
    custom: true,
  },
  {
    h: '10. Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of Pakistan, unless otherwise agreed in writing as part of a specific business agreement.',
    ],
  },
  {
    h: '11. Changes to These Terms',
    body: [
      'We reserve the right to update or modify these Terms at any time without prior notice. The "Last Updated" date at the top of this page will reflect the most recent changes. Continued use of the Site after changes constitutes acceptance of the updated Terms.',
    ],
  },
];

const headingStyle: CSSProperties = {
  fontSize: '1.1rem',
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  color: 'var(--hp-ink)',
  marginBottom: '0.9rem',
  paddingBottom: '0.6rem',
  borderBottom: '1px solid var(--hp-ink-line)',
};

export default function TermsPage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--hp-paper)' }}>
      <div className="hp-shell" style={{ maxWidth: '760px', padding: '4rem 1.5rem 6rem' }}>
        <span className="hp-eyebrow hp-eyebrow--ink">Legal</span>
        <h1 className="hp-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--hp-ink)', margin: '1rem 0 0.5rem' }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ fontFamily: 'var(--hp-body)', color: 'var(--hp-ink-45)', fontSize: '0.85rem', marginBottom: '3rem' }}>
          Last updated: 21 July 2026
        </p>

        {sections.map((s) => (
          <section key={s.h} style={{ marginBottom: '2.4rem' }}>
            <h2 className="hp-display" style={headingStyle}>{s.h}</h2>
            {s.custom ? (
              <p style={{ fontFamily: 'var(--hp-body)', color: 'var(--hp-ink-70)', lineHeight: 1.75, fontSize: '0.92rem', margin: 0 }}>
                Your use of this Site is also governed by our{' '}
                <Link href="/privacy" className="hp-link hp-link--ink">Privacy Policy</Link>, which explains how we collect, use, and protect your information.
              </p>
            ) : (
              s.body.map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--hp-body)', color: 'var(--hp-ink-70)', lineHeight: 1.75, fontSize: '0.92rem', margin: i === 0 ? 0 : '0.9rem 0 0' }}>
                  {p}
                </p>
              ))
            )}
          </section>
        ))}

        <section>
          <h2 className="hp-display" style={headingStyle}>12. Contact Us</h2>
          <p style={{ fontFamily: 'var(--hp-body)', color: 'var(--hp-ink-70)', lineHeight: 1.75, fontSize: '0.92rem', margin: 0 }}>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p style={{ fontFamily: 'var(--hp-body)', color: 'var(--hp-ink-70)', lineHeight: 1.75, fontSize: '0.92rem', margin: '0.9rem 0 0' }}>
            <strong style={{ color: 'var(--hp-ink)' }}>SIAL Athletics</strong>
            <br />
            Email: <a href="mailto:info@sialathletics.com" className="hp-link hp-link--ink">info@sialathletics.com</a>
          </p>
        </section>

        <p style={{ marginTop: '3.5rem' }}>
          <Link href="/privacy" className="hp-link hp-link--ink">View our Privacy Policy →</Link>
        </p>
      </div>
    </main>
  );
}
