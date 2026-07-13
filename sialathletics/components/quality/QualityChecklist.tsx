'use client';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const checks = [
  'Surface Roughness Testing (USAPA ≤ 30µm limit)',
  'Deflection & Compression Testing',
  'Weight Consistency ± 0.1oz per batch',
  'Edge Guard Seal & Adhesion Test',
  'Handle Torque Strength Test',
  'Visual Inspection — Zero defect tolerance',
];

export default function QualityChecklist() {
  return (
    <section style={{ background: 'var(--bg-raised)', padding: '6rem 1.5rem' }}>
      <div className="qc-checklist-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '5rem', alignItems: 'center' }}>
        
        {/* Left - Checklist */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <SectionLabel showSlash={true}>OUR QC PROCESS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--white)', lineHeight: 0.9, margin: '1.25rem 0 2rem' }}>
            TESTED.<br />CERTIFIED.<br />SHIPPED.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {checks.map((check, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white-90)', fontWeight: 600, lineHeight: 1.5 }}>{check}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right - Quality Assurance graphic block */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, var(--bg-card), var(--bg-base))', border: '1px solid var(--white-08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}
          className="shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        >
          <ShieldCheck size={56} color="var(--red)" />
          <span style={{ color: 'var(--white)', fontSize: '0.75rem', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>QUALITY CERTIFICATION ACTIVE</span>
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
