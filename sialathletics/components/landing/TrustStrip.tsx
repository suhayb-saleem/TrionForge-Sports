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
    <div style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--white-08)', borderBottom: '1px solid var(--white-08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {items.map(({ Icon, label }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.08 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.25rem 2rem', borderRight: i < 3 ? '1px solid var(--white-08)' : 'none' }}>
            <Icon size={16} color="var(--red)" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white-60)' }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
