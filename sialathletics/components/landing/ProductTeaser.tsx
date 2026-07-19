'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

const EASE = [0.16, 1, 0.3, 1] as const;

// Ordered control → power, with the balance-meter position for each shape.
const ORDER: { id: string; meter: number }[] = [
  { id: 'sa-forge-padel-round', meter: 16 },
  { id: 'sa-forge-padel-teardrop', meter: 52 },
  { id: 'sa-forge-padel-diamond', meter: 88 },
];

const specOf = (id: string, label: string) =>
  products.find((p) => p.id === id)?.specs.find((s) => s.label === label)?.value ?? '';

export function Range() {
  const cards = ORDER.map(({ id, meter }) => {
    const product = products.find((p) => p.id === id)!;
    return { product, meter, shape: specOf(id, 'Shape'), core: specOf(id, 'Core'), level: specOf(id, 'Level') };
  });

  return (
    <section className="hp-range" id="range">
      <div className="hp-shell">
        <div className="hp-range__head">
          <div>
            <span className="hp-eyebrow">The padel range</span>
            <h2 className="hp-display hp-range__title">
              Three shapes.<br />
              <span>One exacting standard.</span>
            </h2>
          </div>
          <p className="hp-lede hp-range__intro">
            A focused platform tuned across the control-to-power spectrum — ready for your
            materials, graphics, and market.
          </p>
        </div>

        <div className="hp-spectrum" aria-hidden="true">
          <div className="hp-spectrum__bar" />
          <div className="hp-spectrum__labels">
            <b>Control</b>
            <span>Balance</span>
            <b>Power</b>
          </div>
        </div>

        <div className="hp-range__grid">
          {cards.map(({ product, meter, shape, core, level }, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              <Link href="/catalogue#padel" className="hp-shape">
                <span className="hp-shape__num">0{i + 1}</span>
                {product.badge && <span className="hp-shape__badge">{product.badge}</span>}
                <div className="hp-shape__media">
                  <span className="hp-shape__watermark" aria-hidden="true">{shape}</span>
                  <Image src={product.imagePath} alt={`${product.name} carbon fiber ${shape.toLowerCase()} padel racket`} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="hp-shape__body">
                  <span className="hp-shape__kicker">Padel / {shape}</span>
                  <h3 className="hp-shape__name">{product.name.replace('SA ', '')}</h3>
                  <p className="hp-shape__tagline">{product.tagline}</p>
                  <div className="hp-shape__meta">
                    <span className="hp-shape__chip">{core}</span>
                    <span className="hp-shape__chip">{level}</span>
                  </div>
                  <div className="hp-shape__meter">
                    <div className="hp-shape__meter-labels"><span>Control</span><span>Power</span></div>
                    <div className="hp-shape__meter-track">
                      <span className="hp-shape__meter-dot" style={{ left: `${meter}%` }} />
                    </div>
                  </div>
                  <span className="hp-shape__cta">View specification <b aria-hidden="true">↗</b></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hp-range__foot" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/catalogue#padel" className="hp-btn hp-btn--ghost">
            View all padel rackets <span className="hp-btn__arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/catalogue#pickleball" className="hp-btn hp-btn--ghost">
            View pickleball paddles <span className="hp-btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Range;
