'use client';

import { motion } from 'motion/react';
import { useContactModal } from '@/lib/contactModal';

const EASE = [0.16, 1, 0.3, 1] as const;

// Dot-matrix world map, one char per dot on a 60x24 equirectangular grid.
// '.' water · 'x' land (dim) · lit served regions: 'n' North America ·
// 's' South America · 'e' Europe · 'm' Middle East · 'a' Africa ·
// 'p' Asia-Pacific · 'h' Sialkot HQ hub.
const GRID = [
  '........nnnnnnnnn...xxxxx.......xxxxxxxxxxxxxxxxxxxxxxxxx...',
  '..nnnnn.nnnnnnnnnnn.xxxxx....eeeexxxxxxxxxxxxxxxxxxxxxxxx..',
  '.nnnnnnnnnnnnnnnnnn..xxx..e..eeeeexxxxxxxxxxxxxxxxxxxxxxx..',
  '......nnnnnnnnnnnnn.........e.eeexxxxxxxxxxxxxxxxxxxxxxx...',
  '......nnnnnnnnnnnn.........eeeeeeexxxxxxxxxxxxxxxxxxxxxx....',
  '.....nnnnnnnnnnnn...........eeeeeexxxxxxxxxxxpppppppp.......',
  '....nnnnnnnnnnnnn..........eeeeeeemmxxxxxxxxxpppppppp.......',
  '.....nnnnnnnnnnn...........eeeemmmmmmmmxxxxxpppppppppp......',
  '.....nnnnnnnnn............aaaaaaaammmmmxhxxxppppppp.........',
  '......nnnnnn.............aaaaaaaaaammmm..xxxx.pppp..........',
  '.......nnnnn............aaaaaaaaaaaamm...xxx..ppppp.........',
  '........nnnnn..........aaaaaaaaaaaaa....xx...pppppp........',
  '..........ssss...........aaaaaaaaaaaa.....x...ppppppp.......',
  '...........sssss..........aaaaaaaaaa.........ppppppppp......',
  '...........ssssss..........aaaaaaaa...........ppppppppp.....',
  '...........ssssss...........aaaaaaa............pppppppp.....',
  '...........sssss............aaaaaa..............pppppp......',
  '...........sssss.............aaaaa.a...........pppppppp.....',
  '...........ssss..............aaaa..............pppppppp.....',
  '...........ssss..............aaa................pppppp......',
  '...........sss......................................pppp......',
  '...........ss..........................................pp...',
  '...........ss.........................................p....',
  '...........ss.................................................',
];

const SPACING = 12;
const HUB = { x: 40 * SPACING + 6, y: 8 * SPACING + 6 };

const regions = [
  { name: 'North America', markets: ['United States', 'Canada', 'Mexico'] },
  { name: 'Europe', markets: ['Spain', 'France', 'Germany', 'Italy', 'United Kingdom', 'Netherlands', 'Sweden'] },
  { name: 'Middle East', markets: ['United Arab Emirates', 'Saudi Arabia', 'Qatar'] },
  { name: 'Asia-Pacific', markets: ['Australia', 'South Korea', 'Singapore'] },
  { name: 'South America', markets: ['Key markets across the region'] },
  { name: 'Africa', markets: ['Key markets across the region'] },
];

export default function GlobalReach() {
  const { open: openContactModal } = useContactModal();
  const dots: { cx: number; cy: number; kind: string }[] = [];
  GRID.forEach((row, r) => {
    row.split('').forEach((ch, c) => {
      if (ch === '.' || c >= 60) return;
      dots.push({ cx: c * SPACING + 6, cy: r * SPACING + 6, kind: ch });
    });
  });

  return (
    <section style={{ position: 'relative', background: 'var(--hp-black)', borderTop: '1px solid var(--hp-hair)', padding: 'var(--hp-gap) 0', overflow: 'hidden' }}>
      <div className="hp-weave" aria-hidden="true" />
      <div className="hp-shell" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ marginBottom: '3rem', maxWidth: '640px' }}
        >
          <span className="hp-eyebrow">Global reach</span>
          <h2 className="hp-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--hp-ivory)', margin: '0.9rem 0 1.1rem' }}>
            Built in Sialkot.<br /><span style={{ color: 'var(--hp-ivory-60)' }}>Shipped worldwide.</span>
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
            One factory, six regions. From North America and Europe to the Middle East and
            Asia-Pacific, we ship worldwide through trusted logistics partners — export
            documentation and freight handled from our side, door to warehouse.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
          style={{ position: 'relative' }}
        >
          <svg
            viewBox="0 0 720 300"
            role="img"
            aria-label="Stylized world map showing SIAL Athletics export regions: North America, South America, Europe, the Middle East, Africa, and Asia-Pacific, shipped from Sialkot, Pakistan"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            {/* export arcs from the Sialkot hub */}
            <path className="gr-arc" d={`M ${HUB.x} ${HUB.y} Q 300 -20 150 62`} fill="none" stroke="var(--hp-red)" strokeWidth="1.2" opacity="0.55" />
            <path className="gr-arc gr-arc--2" d={`M ${HUB.x} ${HUB.y} Q 430 10 368 56`} fill="none" stroke="var(--hp-red)" strokeWidth="1.2" opacity="0.55" />
            <path className="gr-arc gr-arc--3" d={`M ${HUB.x} ${HUB.y} Q 560 140 612 216`} fill="none" stroke="var(--hp-red)" strokeWidth="1.2" opacity="0.55" />

            {dots.map((d, i) =>
              d.kind === 'h' ? null : (
                <circle
                  key={i}
                  cx={d.cx}
                  cy={d.cy}
                  r={d.kind === 'x' ? 2.4 : 2.8}
                  fill={d.kind === 'x' ? 'rgba(240, 237, 230, 0.14)' : 'var(--hp-red)'}
                  opacity={d.kind === 'x' ? 1 : 0.9}
                />
              ),
            )}

            {/* Sialkot HQ hub */}
            <circle className="gr-pulse" cx={HUB.x} cy={HUB.y} r="5" fill="none" stroke="var(--hp-red)" strokeWidth="1.5" />
            <circle cx={HUB.x} cy={HUB.y} r="4" fill="var(--hp-ivory)" />
            <line x1={HUB.x} y1={HUB.y + 8} x2={HUB.x} y2={HUB.y + 22} stroke="rgba(240,237,230,0.4)" strokeWidth="1" />
            <text x={HUB.x} y={HUB.y + 34} textAnchor="middle" fill="var(--hp-ivory)" style={{ font: '700 9px var(--hp-body)', letterSpacing: '0.18em' }}>
              SIALKOT HQ
            </text>
          </svg>
        </motion.div>

        <div className="gr-legend">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              style={{ borderTop: '1px solid var(--hp-hair)', paddingTop: '1.2rem', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}
            >
              <span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--hp-red)', flexShrink: 0, marginTop: '0.4rem', boxShadow: '0 0 8px rgba(226,27,45,0.8)' }} />
              <div>
                <h3 style={{ fontFamily: 'var(--hp-body)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hp-ivory)', margin: '0 0 0.6rem' }}>
                  {region.name}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {region.markets.map((m) => (
                    <span key={m} style={{ fontFamily: 'var(--hp-body)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--hp-ivory-60)', border: '1px solid var(--hp-hair)', padding: '0.25rem 0.55rem', whiteSpace: 'nowrap' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '2.25rem' }}>
          <button type="button" onClick={() => openContactModal()} className="hp-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            Don&apos;t see your region? Ask us <b aria-hidden="true">↗</b>
          </button>
        </div>
      </div>

      <style>{`
        .gr-legend {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem 1.5rem;
          margin-top: 2.5rem;
        }
        @media (max-width: 1024px) {
          .gr-legend { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .gr-legend { grid-template-columns: 1fr; gap: 1.25rem; }
        }
        .gr-arc {
          stroke-dasharray: 4 6;
          animation: gr-dash 2.6s linear infinite;
        }
        .gr-arc--2 { animation-duration: 2s; }
        .gr-arc--3 { animation-duration: 3s; }
        @keyframes gr-dash {
          to { stroke-dashoffset: -20; }
        }
        .gr-pulse {
          animation: gr-pulse 2.4s ease-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes gr-pulse {
          0% { transform: scale(1); opacity: 0.9; }
          70% { transform: scale(3); opacity: 0; }
          100% { transform: scale(3); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gr-arc, .gr-pulse { animation: none; }
        }
      `}</style>
    </section>
  );
}
