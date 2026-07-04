'use client';
import { motion } from 'motion/react';
import { Settings, Layers, PenTool, ShieldCheck, Package, Globe } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const capabilities = [
  { Icon: Settings, title: 'OEM MANUFACTURING', desc: 'Send us your CAD files and tolerances. We build to your exact spec using carbon fiber hot-press molding with CNC-precision molds.' },
  { Icon: Layers, title: 'ODM PRIVATE LABEL', desc: 'Choose from our proven paddle geometries. Customize graphics, colorways, grip texture, edge guard branding, and packaging.' },
  { Icon: PenTool, title: 'MOLD DESIGN & PROTOTYPING', desc: 'Need a new shape? Our R&D team handles mold design and produces physical prototypes within 3-4 weeks for your approval.' },
  { Icon: ShieldCheck, title: 'QUALITY CONTROL & TESTING', desc: 'Every batch is tested for USAPA surface roughness compliance, deflection tolerance, weight consistency, and edge seal integrity.' },
  { Icon: Package, title: 'CUSTOM PACKAGING', desc: 'Retail-ready packaging design and production included. Gift boxes, hang tags, QR code labels, and poly bags — all customizable.' },
  { Icon: Globe, title: 'GLOBAL LOGISTICS', desc: 'We handle export documentation, US customs compliance, and can coordinate freight to your US warehouse or 3PL.' },
];

export default function CapabilityCards() {
  return (
    <section style={{ background: '#050505', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <SectionLabel>OUR CAPABILITIES</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 0.95, marginTop: '0.75rem' }}>
            BUILT FOR BRANDS WHO DEMAND MORE.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {capabilities.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', padding: '2rem', borderLeft: '3px solid #D71920' }}
            >
              <Icon size={22} color="#D71920" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#9A9A9A', lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
