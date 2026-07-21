import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SectionLabel from '@/components/ui/SectionLabel';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';

export const metadata: Metadata = {
  title: 'Padel & Pickleball Manufacturing Platforms — OEM Product Range',
  description: 'Configure your padel racket or pickleball paddle line on SIAL Athletics manufacturing platforms: round, teardrop, diamond, and hybrid padel molds plus control, balanced, and power paddle builds — every material, finish, and spec customizable.',
};

/* ------------------------------------------------------------------ */
/* Platform data                                                       */
/* ------------------------------------------------------------------ */

type Platform = {
  name: string;
  tag: string;
  desc: string;
  meter: number | null; // 0-100 control→power position; null = custom/to-spec
  image?: string;
};

const padelPlatforms: Platform[] = [
  {
    name: 'Round',
    tag: 'Control',
    desc: 'The control platform — largest sweet spot and lowest balance for precision, defense, and consistency. The natural base for club, academy, and beginner-to-intermediate lines.',
    meter: 14,
    image: '/images/products/round_padel.png',
  },
  {
    name: 'Teardrop',
    tag: 'Balanced Performance',
    desc: 'The all-round platform — a mid balance that bridges control and power. The most versatile base geometry, and the most common choice for a flagship model.',
    meter: 50,
    image: '/images/products/teardrop_padel.png',
  },
  {
    name: 'Diamond',
    tag: 'Maximum Power',
    desc: 'The power platform — head-weighted with a higher sweet spot for aggressive, attacking play. Built for advanced and competition-tier lines.',
    meter: 88,
    image: '/images/products/Diamond_padel.png',
  },
  {
    name: 'Hybrid',
    tag: 'To Your Specification',
    desc: 'A blended geometry developed around your target play profile — sitting anywhere between round and diamond. Custom molds can be developed on demand for fully exclusive shapes.',
    meter: null,
    image: '/images/products/hybrid_padel.png',
  },
];

const pickleballPlatforms: Platform[] = [
  {
    name: 'Control',
    tag: 'Touch & Placement',
    desc: 'Thicker-core builds tuned for feel, dwell time, and placement — the platform for players who win the soft game. Configured to your face material, weight, and grip spec.',
    meter: 14,
    image: '/images/products/pickleball_widebody.png',
  },
  {
    name: 'Balanced',
    tag: 'All-Court Performance',
    desc: 'The versatile middle of the range — pop without sacrificing touch. The typical base for a brand’s core model, customized end to end to your requirements.',
    meter: 50,
    image: '/images/products/pickleball_hybrid.png',
  },
  {
    name: 'Power',
    tag: 'Drive & Speed',
    desc: 'Thinner-core, firmer-faced builds engineered for drive, speed, and put-aways. Specified to your weight target and swing profile — never a fixed retail model.',
    meter: 86,
    image: '/images/products/pickleball elongated.png',
  },
];

/* ------------------------------------------------------------------ */
/* Manufacturing options                                               */
/* ------------------------------------------------------------------ */

const padelOptions: { title: string; items: string[] }[] = [
  {
    title: 'Shape',
    items: ['Round', 'Teardrop', 'Diamond', 'Hybrid', 'Custom Mold'],
  },
  {
    title: 'Carbon Options',
    items: ['3K Carbon Fiber', '12K Carbon Fiber', '18K Carbon Fiber', '24K Carbon Fiber', 'Silver Carbon Fiber', 'Kevlar Carbon Hybrid', '100% Full Carbon'],
  },
  {
    title: 'Core Options',
    items: ['Black EVA', 'EVA Soft', 'White EVA', 'Memory EVA', 'Super Soft EVA', 'High-Rebound EVA', 'EVA 15 (Soft)', 'EVA 20 (Hard)', 'High-Density EVA'],
  },
  {
    title: 'Frame Construction',
    items: ['Monoblock Carbon Frame', 'Carbon Frame + Glass Fiber Face', 'Reinforced Frame', 'Integrated Protectors', 'Composite Bonding'],
  },
  {
    title: 'Surface Textures',
    items: ['Smooth Finish', 'Sand Grit / Sandy Finish', 'Sandpaper / Rough Finish', '3D Grain', '3D Hexagon', 'Molded 3D Texture'],
  },
  {
    title: 'Paint & Coating',
    items: ['Matte Finish', 'Glossy Finish', 'UV-Resistant Paint', 'Chameleon Paint', 'Metallic Decals', 'Water-Transfer Decals', 'High-Contrast Neon Colors', 'Sublimation'],
  },
  {
    title: 'Weight',
    items: ['350 g', '355 ±10 g', '360 g', '370 g', '375 g', '380 g'],
  },
  {
    title: 'Balance',
    items: ['Low', 'Medium', 'High', 'Custom (260–275 mm)'],
  },
];

const pickleballOptions: { title: string; items: string[] }[] = [
  {
    title: 'Face Materials',
    items: ['Carbon Fiber (T300 / T700)', 'Raw T700 Carbon Fiber', '3K Carbon Fiber', 'Graphite', 'Fiberglass', 'Kevlar', 'Composite Materials'],
  },
  {
    title: 'Core Options',
    items: ['Polypropylene (PP) Honeycomb', 'Polymer Honeycomb', 'Nomex Honeycomb', 'Aluminum Honeycomb'],
  },
  {
    title: 'Thickness Options',
    items: ['10 mm', '13 mm', '14 mm', '16 mm'],
  },
  {
    title: 'Weight Options',
    items: ['Lightweight', 'Middleweight', 'Standard', 'Custom Weight'],
  },
  {
    title: 'Edge Construction',
    items: ['Low Profile Edge Guard', 'TPU Edge Guard', 'Slim Edge Protection', 'Integrated Thermoformed Edges', 'Edgeless Design'],
  },
  {
    title: 'Grip Options',
    items: ['Perforated Cushion Grip', 'Sweat-Absorbent Grip', 'PU Leather Grip', 'Synthetic Rubber Grip', 'Ergonomic Ribbed Grip', 'Moisture-Wicking Grip', 'Anti-Slip Grip'],
  },
  {
    title: 'Surface Finishes',
    items: ['Raw Carbon Texture', 'Micro Texture', 'Sandblasted Grit Finish', 'Friction-Enhanced Grit Paint'],
  },
  {
    title: 'Branding & Printing',
    items: ['UV Printing', 'Silk Screen Printing', 'Water Decals', 'Digital Printing', 'Laser Engraving', 'Full Surface Sublimation', 'Heat Transfer Printing'],
  },
];

const services: { title: string; items: string[] }[] = [
  {
    title: 'Manufacturing Services',
    items: ['OEM Manufacturing', 'ODM Manufacturing', 'Private Label', 'Bespoke Production', 'Thermoforming'],
  },
  {
    title: 'Customization',
    items: ['Logo', 'Colors', 'Graphics', 'Size', 'Brand Personalization', 'Edge Guard', 'Handle Wrap', 'Custom Packaging'],
  },
  {
    title: 'Sampling & MOQ',
    items: ['Custom Sample Development', 'Low MOQ Options', 'Flexible Production Quantities'],
  },
];

/* ------------------------------------------------------------------ */
/* Static building blocks (server-rendered, CSS-only effects)          */
/* ------------------------------------------------------------------ */

function PlatformCard({ platform, index }: { platform: Platform; index: number }) {
  return (
    <article className="plat-card">
      <div className="plat-card__media" aria-hidden="true" style={{ position: 'relative' }}>
        {platform.image ? (
          <Image src={platform.image} alt={platform.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'contain', padding: '1.5rem' }} />
        ) : (
          <span className="plat-card__media-label">Visual coming soon</span>
        )}
      </div>
      <div className="plat-card__body">
        <span className="plat-card__num">0{index + 1}</span>
        <h3 className="display-title plat-card__name">{platform.name}</h3>
        <p className="plat-card__tag">{platform.tag}</p>
        <p className="plat-card__desc">{platform.desc}</p>
        <div className="plat-card__meter">
          <div className="plat-card__meter-labels"><span>Control</span><span>Power</span></div>
          <div className="plat-card__meter-track">
            {platform.meter === null
              ? <span className="plat-card__meter-fill" />
              : <span className="plat-card__meter-dot" style={{ left: `${platform.meter}%` }} />}
          </div>
          {platform.meter === null && <p className="plat-card__meter-note">Tuned anywhere on the spectrum</p>}
        </div>
      </div>
    </article>
  );
}

function OptionGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="opt-group">
      <h4 className="opt-group__title">{title}</h4>
      <div className="opt-group__chips">
        {items.map((item) => (
          <span key={item} className="opt-group__chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CataloguePage() {
  return (
    <main style={{ background: 'var(--hp-black)' }}>
      <PageHero
        crumb="Products"
        eyebrow="Manufacturing platforms"
        title="Your product. Our platform."
        subtitle="You aren't choosing from pre-designed retail products. You're selecting a manufacturing platform, then customizing materials, construction, performance, branding, and packaging to your own brand's requirements."
      />

      {/* How the platform model works */}
      <section className="site-section" style={{ background: 'var(--hp-panel)', borderTop: '1px solid var(--hp-hair)' }}>
        <div className="container-custom">
          <div className="plat-steps">
            {[
              { num: '01', title: 'Choose your platform', desc: 'Start from a proven playing geometry — the shape and performance character of the product.' },
              { num: '02', title: 'Spec the build', desc: 'Select face materials, core, construction, texture, weight, and balance from the full options list.' },
              { num: '03', title: 'Make it yours', desc: 'Apply your logo, graphics, colors, grip, and packaging. We sample it, you approve it, we produce it.' },
            ].map((step) => (
              <div key={step.num} className="plat-step">
                <span className="plat-step__num">{step.num}</span>
                <div>
                  <h3 className="display-title plat-step__title">{step.title}</h3>
                  <p className="plat-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- PADEL ------------------------- */}
      <section id="padel" className="site-section plat-anchor" style={{ background: 'var(--hp-black)', borderTop: '1px solid var(--hp-hair)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <SectionLabel>Category 01</SectionLabel>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
              Padel rackets.
            </h2>
            <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
              Four standard playing platforms cover the full control-to-power spectrum. Every one is
              fully configurable — and if your line needs a shape that doesn&apos;t exist yet, custom
              molds can be developed on demand.
            </p>
          </div>

          <div className="plat-grid plat-grid--4">
            {padelPlatforms.map((p, i) => <PlatformCard key={p.name} platform={p} index={i} />)}
          </div>

          <div className="opt-section">
            <h3 className="display-title opt-section__title">Padel manufacturing options</h3>
            <p className="opt-section__intro">
              Tap the specifications you want for your line — then send the whole configuration
              straight to our team. It arrives pre-filled in your inquiry, ready for a quote.
            </p>
            <SpecConfigurator category="Padel racket" productLine="Padel Rackets" groups={padelOptions} />
          </div>
        </div>
      </section>

      {/* ----------------------- PICKLEBALL ----------------------- */}
      <section id="pickleball" className="site-section plat-anchor" style={{ background: 'var(--hp-panel)', borderTop: '1px solid var(--hp-hair)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <SectionLabel>Category 02</SectionLabel>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
              Pickleball paddles.
            </h2>
            <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
              Three performance platforms — control, balanced, and power — rather than fixed retail
              models. Every paddle is fully customizable to your requirements: face, core,
              thickness, weight, edge, grip, finish, and branding.
            </p>
          </div>

          <div className="plat-grid plat-grid--3">
            {pickleballPlatforms.map((p, i) => <PlatformCard key={p.name} platform={p} index={i} />)}
          </div>

          <div className="opt-section">
            <h3 className="display-title opt-section__title">Pickleball manufacturing options</h3>
            <p className="opt-section__intro">
              Tap to configure each model from the full options list — from raw carbon faces to
              honeycomb core chemistry, edge construction, and print method — then send the
              configuration to us as a quote request.
            </p>
            <SpecConfigurator category="Pickleball paddle" productLine="Pickleball Paddles" groups={pickleballOptions} />
          </div>
        </div>
      </section>

      {/* ----------------------- SERVICES ----------------------- */}
      <section className="site-section" style={{ background: 'var(--hp-black)', borderTop: '1px solid var(--hp-hair)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <SectionLabel>Beyond the build</SectionLabel>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--hp-ivory)', marginTop: '0.9rem', marginBottom: '1.25rem' }}>
              A manufacturing program, not a product list.
            </h2>
            <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ivory-60)', lineHeight: 1.7 }}>
              Platform, spec, branding, sampling, and production quantities are all structured
              around your brand — see{' '}
              <Link href="/manufacturing" className="hp-link">how we manufacture</Link> or check{' '}
              <Link href="/faq" className="hp-link">common buyer questions</Link>.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.9rem', color: 'var(--hp-ivory-60)', marginBottom: '1rem', maxWidth: '400px', lineHeight: 1.6 }}>
                Download our full technical catalogue for an offline reference of all available platform geometries, material compositions, and manufacturing capabilities.
              </p>
              <a href="/images/catalogue.zip" download className="hp-btn hp-btn--outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Download size={16} style={{ marginRight: '0.5rem' }} />
                <span>DOWNLOAD CATALOGUE (.ZIP)</span>
              </a>
            </div>
          </div>
          <div className="opt-grid opt-grid--services">
            {services.map((group) => <OptionGroup key={group.title} {...group} />)}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to configure your line?"
        subtext="Tell us your platform, target price point, and volume — we'll respond within 24 hours."
        primaryLabel="Start an inquiry"
        primaryHref="/contact"
        secondaryLabel="Explore capabilities"
        secondaryHref="/manufacturing"
        index="SIAL / 02"
      />

      <style>{`
        .plat-anchor { scroll-margin-top: 90px; }

        /* --- how-it-works steps --- */
        .plat-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .plat-step { display: flex; gap: 1rem; align-items: flex-start; }
        .plat-step__num {
          font-family: var(--hp-display);
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--hp-red);
          flex-shrink: 0;
        }
        .plat-step__title { font-size: 1.1rem; color: var(--hp-ivory); margin: 0 0 0.45rem; }
        .plat-step__desc {
          font-family: var(--hp-body);
          font-size: 0.85rem;
          color: var(--hp-ivory-60);
          line-height: 1.6;
          margin: 0;
        }

        /* --- platform cards --- */
        .plat-grid { display: grid; gap: 1.5rem; }
        .plat-grid--4 { grid-template-columns: repeat(4, 1fr); }
        .plat-grid--3 { grid-template-columns: repeat(3, 1fr); }
        .plat-card {
          background: var(--hp-card);
          border: 1px solid var(--hp-hair);
          border-top: 3px solid var(--hp-red);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .plat-card:hover { transform: translateY(-4px); }
        .plat-card__media {
          aspect-ratio: 1 / 1;
          border-bottom: 1px solid var(--hp-hair);
          background:
            repeating-linear-gradient(-45deg, transparent 0 14px, rgba(240, 237, 230, 0.035) 14px 15px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .plat-card__media-label {
          font-family: var(--hp-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--hp-ivory-60);
          opacity: 0.6;
          border: 1px dashed var(--hp-hair);
          padding: 0.5rem 0.9rem;
        }
        .plat-card__body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
        .plat-card__num {
          font-family: var(--hp-display);
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--hp-red);
          margin-bottom: 0.7rem;
        }
        .plat-card__name { font-size: 1.35rem; color: var(--hp-ivory); margin: 0 0 0.25rem; }
        .plat-card__tag {
          font-family: var(--hp-body);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-red);
          margin: 0 0 0.8rem;
        }
        .plat-card__desc {
          font-family: var(--hp-body);
          font-size: 0.83rem;
          color: var(--hp-ivory-60);
          line-height: 1.65;
          margin: 0 0 1.4rem;
          flex: 1;
        }
        .plat-card__meter-labels {
          display: flex;
          justify-content: space-between;
          font-family: var(--hp-body);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--hp-ivory-60);
          margin-bottom: 0.45rem;
        }
        .plat-card__meter-track {
          position: relative;
          height: 2px;
          background: var(--hp-hair);
        }
        .plat-card__meter-dot {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--hp-red);
          box-shadow: 0 0 8px rgba(226, 27, 45, 0.7);
        }
        .plat-card__meter-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, var(--hp-red), transparent);
        }
        .plat-card__meter-note {
          font-family: var(--hp-body);
          font-size: 0.66rem;
          color: var(--hp-ivory-60);
          margin: 0.5rem 0 0;
          letter-spacing: 0.04em;
        }

        /* --- option groups --- */
        .opt-section { margin-top: clamp(3rem, 6vw, 4.5rem); }
        .opt-section__title { font-size: clamp(1.4rem, 2.6vw, 1.8rem); color: var(--hp-ivory); margin: 0 0 0.8rem; }
        .opt-section__intro {
          font-family: var(--hp-body);
          font-size: 0.9rem;
          color: var(--hp-ivory-60);
          line-height: 1.65;
          max-width: 620px;
          margin: 0 0 2rem;
        }
        .opt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .opt-grid--services { grid-template-columns: repeat(3, 1fr); }
        .opt-group {
          background: var(--hp-card);
          border: 1px solid var(--hp-hair);
          padding: 1.5rem;
        }
        .opt-group__title {
          font-family: var(--hp-body);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--hp-ivory);
          margin: 0 0 1rem;
        }
        .opt-group__chips { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .opt-group__chip {
          font-family: var(--hp-body);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--hp-ivory-60);
          border: 1px solid var(--hp-hair);
          padding: 0.32rem 0.6rem;
        }
        button.opt-group__chip {
          background: transparent;
          cursor: pointer;
          transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
        }
        button.opt-group__chip:hover { border-color: rgba(226, 27, 45, 0.55); color: var(--hp-ivory); }
        .opt-group__chip.is-selected {
          border-color: var(--hp-red);
          color: var(--hp-ivory);
          background: rgba(226, 27, 45, 0.14);
        }
        .spec-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .spec-bar .hp-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .spec-bar__count { font-family: var(--hp-body); font-size: 0.8rem; color: var(--hp-ivory-60); }
        .spec-bar__clear {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--hp-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--hp-red);
          padding: 0;
        }

        /* --- responsive --- */
        @media (max-width: 1100px) {
          .plat-grid--4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .opt-grid { grid-template-columns: repeat(2, 1fr); }
          .plat-steps { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        @media (max-width: 860px) {
          .plat-grid--3 { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .plat-grid--4 { grid-template-columns: 1fr; }
          .opt-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
