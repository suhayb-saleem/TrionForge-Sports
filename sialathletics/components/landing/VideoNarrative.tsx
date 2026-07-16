'use client';

import { motion } from 'motion/react';

const NARRATIVE_BLOCKS = [
  {
    title: 'Precision Face',
    subtitle: '12K Carbon Fiber',
    desc: 'Woven for maximum power transfer and absolute surface durability under repeated explosive impact.',
    align: 'left',
  },
  {
    title: 'The Core',
    subtitle: 'Closed-Cell EVA Foam',
    desc: 'Precision-cut density provides optimal touch, eliminating vibration while perfectly balancing power and control.',
    align: 'right',
  },
  {
    title: 'The Chassis',
    subtitle: 'Composite Perimeter Frame',
    desc: 'Reinforced fiberglass-carbon bumper for extreme torsional rigidity and long-term structural integrity.',
    align: 'left',
  },
  {
    title: 'The Hold',
    subtitle: 'Ergonomic Shock-Grip',
    desc: 'Anti-slip micro-perforated PU grip layered with shock-absorbing polyurethane for a firm, match-long hold.',
    align: 'right',
  },
];

export default function VideoNarrative() {
  return (
    <section id="video-narrative" style={{ position: 'relative', width: '100%', zIndex: 1 }}>
      {/* 
        This wrapper creates the scroll height. 
        It is transparent, allowing the fixed GlobalVideoScrubber to show through.
      */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* We pad the top significantly so the video can just play for a bit without text */}
        <div style={{ height: '100vh' }} />

        {NARRATIVE_BLOCKS.map((block, index) => {
          const isLeft = block.align === 'left';
          // Make the last block push down to ensure we have scroll room at the end of the video
          const isLast = index === NARRATIVE_BLOCKS.length - 1;

          return (
            <div
              key={index}
              style={{
                minHeight: '120vh', // Massive vertical spacing for slow, deliberate scrubbing
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: isLeft ? 'flex-start' : 'flex-end',
                paddingBottom: isLast ? '50vh' : 0
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  maxWidth: '420px',
                  // Apple style: deeply frosted dark glass or ultra-clean light glass.
                  // Since the video is likely light, we use a sleek dark frosted glass for maximum contrast.
                  background: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: '3rem 2.5rem',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#E8001C'
                  }}>
                    {block.subtitle}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  margin: '0 0 1rem 0'
                }}>
                  {block.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.7)',
                  margin: 0
                }}>
                  {block.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
