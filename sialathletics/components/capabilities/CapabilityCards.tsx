'use client';

import { Settings, Layers, PenTool, ShieldCheck, Package, Globe } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import InfoCard from '@/components/ui/InfoCard';

const capabilities = [
  { Icon: Settings, title: 'OEM manufacturing', desc: 'Send us your CAD files and tolerances. We build to spec using precision carbon fiber molding — frame and protector formed to your tolerances — with precision-engineered molds for teardrop, round, and diamond geometries.' },
  { Icon: Layers, title: 'ODM private label', desc: 'Choose from proven teardrop (all-rounder), round (control), or diamond (power) padel shapes — or standard and elongated pickleball profiles. Customize graphics, colorways, surface texture, edge guard branding, and packaging.' },
  { Icon: PenTool, title: 'Mold design & prototyping', desc: 'Need a new shape? Our R&D team handles mold design and produces physical prototypes within 3-4 weeks for your approval.' },
  { Icon: ShieldCheck, title: 'Quality control & testing', desc: 'Every batch is tested for surface roughness and finish consistency, deflection tolerance, and edge seal integrity — padel weight held to 350–380g with balance calibrated to 260–275mm, and batch weight consistency to ±0.1oz.' },
  { Icon: Package, title: 'Custom packaging', desc: 'Retail-ready packaging design and production included. Gift boxes, hang tags, QR code labels, and poly bags — all customizable.' },
  { Icon: Globe, title: 'Global logistics', desc: 'We handle export documentation and US customs compliance, with export experience to North America, Europe, and Central America.' },
];

export default function CapabilityCards() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-panel)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <SectionLabel>Our capabilities</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem' }}>
            Built for brands who demand more.
          </h2>
        </div>
        <div className="hp-infocard-grid">
          {capabilities.map(({ Icon, title, desc }, i) => (
            <InfoCard key={title} icon={Icon} title={title} desc={desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
