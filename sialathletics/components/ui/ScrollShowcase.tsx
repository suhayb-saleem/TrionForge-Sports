import Image from 'next/image';

export type ShowcaseItem = {
  title: string;
  desc: string;
  tag?: string;          // small uppercase kicker under the title
  points?: string[];     // optional sub-list (e.g. material grades)
  image: string | null;  // null renders a labeled placeholder block
  alt?: string;
  placeholderLabel?: string; // what photo is needed, shown on the placeholder
};

/*
 * Feature-row showcase: each list item is a full-width row pairing a large
 * anchor image with its explanation, alternating sides row by row. Pure
 * CSS layout — no pinning, no scroll listeners — so it behaves identically
 * everywhere (including under Lenis smooth scroll).
 */
export default function ScrollShowcase({ items, tone = 'light' }: { items: ShowcaseItem[]; tone?: 'dark' | 'light' }) {
  const toneClass = tone === 'light' ? ' frows--light' : '';

  return (
    <div className={`frows${toneClass}`}>
      {items.map((item, i) => (
        <article className="frow" key={item.title}>
          <div className="frow__media">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                fill
                sizes="(max-width: 800px) 100vw, 58vw"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="frow__placeholder">
                <span>Visual coming soon{item.placeholderLabel ? ` — ${item.placeholderLabel}` : ''}</span>
              </div>
            )}
          </div>
          <div className="frow__body">
            <span className="frow__num">0{i + 1}</span>
            <h3 className="display-title frow__title">{item.title}</h3>
            {item.tag && <p className="frow__tag">{item.tag}</p>}
            <p className="frow__desc">{item.desc}</p>
            {item.points && (
              <ul className="frow__points">
                {item.points.map((p) => (
                  <li key={p}>
                    <span aria-hidden="true">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}

      <style>{`
        .frows {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--hp-hair);
        }
        .frow {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          align-items: stretch;
          border-bottom: 1px solid var(--hp-hair);
          min-height: 420px;
        }
        /* alternate image side */
        .frow:nth-child(even) .frow__media { order: 2; }
        .frow__media {
          position: relative;
          overflow: hidden;
          min-height: 300px;
          border-inline: 1px solid var(--hp-hair);
        }
        .frow__media img { transition: transform 0.8s ease; }
        .frow:hover .frow__media img { transform: scale(1.03); }
        .frow__placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: repeating-linear-gradient(-45deg, transparent 0 14px, rgba(240, 237, 230, 0.045) 14px 15px);
        }
        .frow__placeholder span {
          font-family: var(--hp-body);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-align: center;
          color: var(--hp-ivory-60);
          border: 1px dashed var(--hp-hair);
          padding: 0.6rem 1rem;
          max-width: 80%;
          line-height: 1.8;
        }
        .frow__body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.85rem;
          padding: clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 4vw, 4rem);
        }
        .frow__num {
          font-family: var(--hp-display);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--hp-red);
        }
        .frow__title {
          margin: 0;
          font-size: clamp(1.7rem, 3.2vw, 2.4rem);
          line-height: 0.98;
          color: var(--hp-ivory);
        }
        .frow__tag {
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-red);
        }
        .frow__desc {
          margin: 0;
          max-width: 28rem;
          font-family: var(--hp-body);
          font-size: 0.92rem;
          line-height: 1.68;
          color: var(--hp-ivory-60);
        }
        .frow__points {
          list-style: none;
          margin: 0.3rem 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          max-width: 28rem;
        }
        .frow__points li {
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          font-family: var(--hp-body);
          font-size: 0.82rem;
          line-height: 1.55;
          color: var(--hp-ivory-60);
        }
        .frow__points li > span:first-child { color: var(--hp-red); font-weight: 800; flex-shrink: 0; }

        /* --- light tone (paper sections) --- */
        .frows--light { border-color: var(--hp-ink-line); }
        .frows--light .frow { border-color: var(--hp-ink-line); }
        .frows--light .frow__media { border-color: var(--hp-ink-line); }
        .frows--light .frow__title { color: var(--hp-ink); }
        .frows--light .frow__desc,
        .frows--light .frow__points li { color: var(--hp-ink-70); }
        .frows--light .frow__placeholder { background: repeating-linear-gradient(-45deg, transparent 0 14px, rgba(20, 17, 15, 0.05) 14px 15px); }
        .frows--light .frow__placeholder span { color: var(--hp-ink-70); border-color: var(--hp-ink-line); }

        /* --- mobile: stack image above text --- */
        @media (max-width: 800px) {
          .frow { grid-template-columns: 1fr; min-height: 0; }
          .frow:nth-child(even) .frow__media { order: 0; }
          .frow__media { aspect-ratio: 4 / 3; min-height: 0; border-inline: none; border-bottom: 2px solid var(--hp-red); }
          .frow__body { padding: 1.5rem 0 2rem; }
        }
      `}</style>
    </div>
  );
}
