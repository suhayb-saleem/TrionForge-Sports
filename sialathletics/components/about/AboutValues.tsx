'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import ScrollShowcase, { type ShowcaseItem } from '@/components/ui/ScrollShowcase';

const values: ShowcaseItem[] = [
  {
    title: 'Precision',
    desc: 'Every gram and millimeter built to spec. No shortcuts.',
    image: '/images/holemachine.png',
    alt: 'Precision drilling machine boring the face of a padel racket',
  },
  {
    title: 'Craftsmanship',
    desc: "Sialkot has made sporting goods for 100 years. We build on that experience.",
    image: '/images/warehouse_interior.png',
    alt: 'Factory floor with hydraulic presses and finished rackets staged for the next stage of production',
  },
  {
    title: 'Transparency',
    desc: 'You work with the factory directly. No middlemen, no hidden markups.',
    image: '/images/rack.png',
    alt: 'Rows of finished padel rackets staged on a factory rack',
  },
  {
    title: 'Reliability',
    desc: 'On-time delivery, every order, every time.',
    image: '/images/forklift.png',
    alt: 'Forklift loading export cartons at the SIAL Athletics facility',
  },
];

export default function AboutValues() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)' }}>
      <div className="container-custom" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div style={{ maxWidth: '640px' }}>
          <SectionLabel>What drives us</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hp-ink)', marginTop: '0.9rem' }}>
            Our core values.
          </h2>
          <p className="body-copy" style={{ marginTop: '1rem' }}>
            What we stand for, on every order.
          </p>
        </div>
      </div>

      <div className="container-custom">
        <ScrollShowcase items={values} />
      </div>
    </section>
  );
}
