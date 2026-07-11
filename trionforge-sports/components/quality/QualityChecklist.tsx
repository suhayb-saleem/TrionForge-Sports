'use client';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
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
    <section style={{ background: '#0a0a0a', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <SectionLabel>OUR QC PROCESS</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 0.95, margin: '1rem 0 2rem' }}>
            TESTED.<br />CERTIFIED.<br />SHIPPED.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {checks.map((check, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="#E8001C" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#d0d0d0', lineHeight: 1.5 }}>{check}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.1 }} style={{ aspectRatio: '4/3', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#8A8A8A', fontSize: '0.75rem', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>QC PHOTO</span>
        </motion.div>
      </div>
    </section>
  );
}
