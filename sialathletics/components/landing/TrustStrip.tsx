'use client';

// Kinetic credential ribbon — replaces the old 4-icon trust strip with an
// infinite marquee of manufacturing credentials (premium racket-brand idiom).
const CREDENTIALS = [
  'Padel & Pickleball OEM',
  'Precision Carbon Molding',
  'MOQ from 24 Units',
  'Batch-Tested Quality',
  '3K–24K Carbon Layup',
  'Custom Private Label',
  'Teardrop · Round · Diamond',
  'Built in Sialkot',
  'Export-Ready Programs',
];

export default function CredentialMarquee() {
  const loop = [...CREDENTIALS, ...CREDENTIALS];
  return (
    <section className="hp-marquee" aria-label="SIAL Athletics manufacturing credentials">
      <div className="hp-marquee__track">
        {loop.map((item, i) => (
          <span className="hp-marquee__item" key={`${item}-${i}`} aria-hidden={i >= CREDENTIALS.length}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
