'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

// B2B buyer segmentation band — each tile answers "is this factory for me?"
// for a specific buyer type before they ever reach the contact form.
const segments = [
  {
    num: '01',
    title: 'Brands',
    desc: 'Build your own padel and pickleball product line. We handle production, materials, and quality.',
    tags: ['OEM & Private Label', 'Flexible Customization'],
    image: '/images/home/brands.png',
    alt: 'Padel and pickleball equipment representing a brand product line',
    span: 'wide',
  },
  {
    num: '02',
    title: 'Distributors & Wholesalers',
    desc: 'Grow your product line with steady supply and consistent quality, at any volume.',
    tags: ['Scalable Production', 'Consistent Quality'],
    image: '/images/home/distributors.png',
    alt: 'Wholesale distribution of padel and pickleball equipment',
  },
  {
    num: '03',
    title: 'Clubs & Academies',
    desc: 'Equip your coaches and players with rackets and paddles built for regular training and club programs.',
    tags: ['Club Branding', 'Training & Retail'],
    image: '/images/home/clubs.png',
    alt: 'Club and academy players training with padel and pickleball equipment',
  },
  {
    num: '04',
    title: 'Retailers',
    desc: 'Launch your own branded products, with packaging and shipping handled for you.',
    tags: ['Retail Packaging', 'Global Shipping Support'],
    image: '/images/home/retailers.png',
    alt: 'Retail-ready packaged padel and pickleball products',
    span: 'wide',
  },
];

// Image-overlay bento grid — matches the pattern used on the Manufacturing
// page's capability tiles: full-bleed photo, scrim, copy on top.
export default function WhoWeWorkWith() {
  return (
    <section className="hp-audience" style={{ background: 'var(--hp-paper)', borderTop: '1px solid var(--hp-ink-line)', padding: 'var(--hp-gap) 0' }}>
      <div className="hp-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ marginBottom: '3rem', maxWidth: '640px' }}
        >
          <span className="hp-eyebrow hp-eyebrow--ink">Who we work with</span>
          <h2 className="hp-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--hp-ink)', margin: '0.9rem 0 1.1rem' }}>
            One factory.<br />Four kinds of partner.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ink-70)', lineHeight: 1.7 }}>
            Same factory, same quality — we just tailor volume and branding to your business.
          </p>
        </motion.div>

        <div className="who-bento">
          {segments.map((seg, i) => (
            <motion.article
              key={seg.num}
              className={`who-bento__tile${seg.span === 'wide' ? ' who-bento__tile--wide' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              <Image src={seg.image} alt={seg.alt} fill sizes="(max-width: 860px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="who-bento__scrim" aria-hidden="true" />
              <div className="who-bento__body">
                <span className="who-bento__num">{seg.num}</span>
                <h3 className="who-bento__title">{seg.title}</h3>
                <p className="who-bento__desc">{seg.desc}</p>
                <div className="who-bento__tags">
                  {seg.tags.map((t) => (
                    <span key={t} className="who-bento__tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/faq" className="hp-link hp-link--ink">
            Common buyer questions, answered <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </div>

      <style>{`
        .who-bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 300px;
          gap: 1.25rem;
        }
        .who-bento__tile--wide { grid-column: span 2; }
        .who-bento__tile {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--hp-ink-line);
          display: flex;
          align-items: flex-end;
        }
        .who-bento__tile img { transition: transform 0.7s ease; }
        .who-bento__tile:hover img { transform: scale(1.06); }
        .who-bento__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,8,10,0) 30%, rgba(8,8,10,0.6) 68%, rgba(8,8,10,0.92) 100%);
        }
        .who-bento__body { position: relative; z-index: 1; padding: 1.35rem 1.5rem; }
        .who-bento__num {
          display: block;
          font-family: var(--hp-display);
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--hp-red);
          margin-bottom: 0.4rem;
        }
        .who-bento__title {
          font-family: var(--hp-display);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          font-size: 1.2rem;
          color: var(--hp-ivory);
          margin: 0 0 0.45rem;
        }
        .who-bento__desc {
          font-family: var(--hp-body);
          font-size: 0.8rem;
          line-height: 1.55;
          color: var(--hp-ivory-60);
          margin: 0 0 0.9rem;
          max-width: 30rem;
        }
        .who-bento__tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .who-bento__tag {
          font-family: var(--hp-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--hp-ivory-60);
          border: 1px solid rgba(240,237,230,0.3);
          padding: 0.26rem 0.5rem;
        }
        @media (max-width: 860px) {
          .who-bento { grid-template-columns: 1fr; grid-auto-rows: 280px; }
          .who-bento__tile--wide { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
