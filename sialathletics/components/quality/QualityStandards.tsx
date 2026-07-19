import SectionLabel from '@/components/ui/SectionLabel';
import InfoCard from '@/components/ui/InfoCard';

const standards = [
  { title: 'Built to your specification', desc: 'Every order is manufactured to the dimensions, surface texture, and performance targets you specify. Certification and third-party testing requirements can be accommodated on a per-project basis.' },
  { title: 'Padel build tolerances', desc: 'Padel rackets are held to a standard 38mm thickness ceiling, a 350–380g weight range, and 260–275mm balance depending on shape — verified batch by batch before shipment.' },
  { title: 'US import ready', desc: 'SIAL Athletics products are manufactured and documented for smooth US Customs clearance. HTS classification and compliance docs included.' },
  { title: 'Batch-level reporting', desc: 'Every production order comes with a QC report documenting tested samples, pass rates, and any corrective actions taken.' },
];

export default function QualityStandards() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-black)', borderTop: '1px solid var(--hp-hair)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <SectionLabel>What we comply with</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem' }}>
            The standards we build to.
          </h2>
        </div>
        <div className="hp-infocard-grid">
          {standards.map(({ title, desc }, i) => (
            <InfoCard key={title} num={`0${i + 1}`} title={title} desc={desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
