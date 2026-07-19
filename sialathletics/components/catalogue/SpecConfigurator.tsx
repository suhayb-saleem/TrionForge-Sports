'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type Group = { title: string; items: string[] };

// Interactive spec picker: option chips toggle on/off, then the whole
// selection is handed to the contact form as a pre-filled message via
// query params. Styles come from the catalogue page's shared style block.
export default function SpecConfigurator({
  category,
  productLine,
  groups,
}: {
  category: string;      // human label used in the generated message
  productLine: string;   // must match a ContactForm "Product line" option value
  groups: Group[];
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  // Single-select per block: picking an option replaces any previous pick in
  // that group; clicking the active one clears it.
  const toggle = (group: string, item: string) => {
    setSelected((prev) => {
      const current = prev[group] ?? [];
      const next = current.includes(item) ? [] : [item];
      return { ...prev, [group]: next };
    });
  };

  const count = useMemo(
    () => Object.values(selected).reduce((n, arr) => n + arr.length, 0),
    [selected],
  );

  const submitSpec = () => {
    const lines = [`${category} specification request`, ''];
    for (const group of groups) {
      const picks = selected[group.title] ?? [];
      if (picks.length > 0) lines.push(`${group.title}: ${picks.join(', ')}`);
    }
    const message = lines.join('\n');
    router.push(`/contact?line=${encodeURIComponent(productLine)}&spec=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <div className="opt-grid">
        {groups.map((group) => (
          <div key={group.title} className="opt-group">
            <h4 className="opt-group__title">{group.title}</h4>
            <div className="opt-group__chips">
              {group.items.map((item) => {
                const isOn = (selected[group.title] ?? []).includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    className={`opt-group__chip${isOn ? ' is-selected' : ''}`}
                    aria-pressed={isOn}
                    onClick={() => toggle(group.title, item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="spec-bar">
        <button type="button" className="hp-btn hp-btn--primary" disabled={count === 0} onClick={submitSpec}>
          Request a quote with this spec <span className="hp-btn__arrow" aria-hidden="true">→</span>
        </button>
        <span className="spec-bar__count" aria-live="polite">
          {count === 0
            ? 'Tap options above to build your specification'
            : `${count} option${count === 1 ? '' : 's'} selected`}
        </span>
        {count > 0 && (
          <button type="button" className="spec-bar__clear" onClick={() => setSelected({})}>
            Clear all
          </button>
        )}
      </div>
    </>
  );
}
