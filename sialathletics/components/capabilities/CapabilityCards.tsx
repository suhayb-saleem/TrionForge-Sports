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
    <section style={{ background: 'var(--bg-light-alt)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <SectionLabel showSlash={true}>OUR CAPABILITIES</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-dark)', lineHeight: 0.95, marginTop: '0.75rem' }}>
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
              style={{
                background: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                borderLeft: '3px solid var(--red)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                justifyContent: 'flex-start'
              }}
              className="group hover:border-r-[var(--red)]/40 hover:border-y-[var(--red)]/40 hover:shadow-[0_20px_45px_rgba(232,0,28,0.06)] transition-all duration-300"
            >
              <Icon size={24} color="var(--red)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-dark)', margin: 0, textTransform: 'uppercase' }} className="group-hover:text-[var(--red)] transition-colors duration-200">{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.75 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
