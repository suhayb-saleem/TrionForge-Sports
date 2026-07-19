'use client';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const checks = [
  'Surface Roughness & Finish Consistency Testing',
  'Deflection & Compression Testing',
  'Weight Consistency ± 0.1oz per batch',
  'Edge Guard Seal & Adhesion Test',
  'Handle Torque Strength Test',
  'Visual Inspection — Zero defect tolerance',
];

export default function QualityChecklist() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-panel)' }}>
      <div className="qc-checklist-grid container-custom" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>

        {/* Left - Checklist */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <SectionLabel>Our QC process</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--hp-ivory)', lineHeight: 0.92, margin: '1.25rem 0 2rem' }}>
            Tested.<br />Certified.<br />Shipped.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {checks.map((check, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--hp-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-80)', fontWeight: 600, lineHeight: 1.5 }}>{check}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Quality Assurance panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            aspectRatio: '4/3',
            background: 'linear-gradient(180deg, var(--hp-card-2), var(--hp-card))',
            border: '1px solid var(--hp-hair)', borderTop: '2px solid var(--hp-red)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '1.5rem', position: 'relative', overflow: 'hidden',
          }}
        >
          <span className="hp-infocard__icon" style={{ width: '4rem', height: '4rem' }}>
            <ShieldCheck size={30} />
          </span>
          <span style={{ color: 'var(--hp-ivory)', fontSize: '0.72rem', fontFamily: 'var(--hp-body)', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Every batch inspected</span>
        </motion.div>
      </div>

      <style>{`
        .qc-checklist-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .qc-checklist-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
