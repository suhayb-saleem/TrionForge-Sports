'use client';
import { motion } from 'motion/react';
import { Award, Layers, Globe, Zap } from 'lucide-react';

const items = [
  { Icon: Layers, label: 'OEM & ODM PROGRAMS' },
  { Icon: Award, label: 'CARBON FIBER BUILD' },
  { Icon: Globe, label: 'US MARKET READY' },
  { Icon: Zap, label: 'DIRECT FACTORY PRICING' },
];

export default function TrustStrip() {
  return (
    <div style={{ background: 'var(--bg-light)', borderTop: '2px solid var(--red)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="trust-strip-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid' }}>
        {items.map(({ Icon, label }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.08 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.25rem 2rem' }}
            className="trust-strip-item">
            <Icon size={18} color="var(--red)" style={{ flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dark)' }}>{label}</span>
          </motion.div>
        ))}
      </div>
      <style>{`
        .trust-strip-grid { grid-template-columns: repeat(4, 1fr); }
        .trust-strip-item { border-right: 1px solid var(--border-light); }
        .trust-strip-item:last-child { border-right: none; }
        @media (max-width: 768px) {
          .trust-strip-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-strip-item:nth-child(2) { border-right: none; }
          .trust-strip-item:nth-child(1), .trust-strip-item:nth-child(2) { border-bottom: 1px solid var(--border-light); }
        }
        @media (max-width: 480px) {
          .trust-strip-grid { grid-template-columns: 1fr; }
          .trust-strip-item { border-right: none; border-bottom: 1px solid var(--border-light); }
          .trust-strip-item:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}
