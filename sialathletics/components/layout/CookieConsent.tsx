'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'sial-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const dismiss = (choice: 'accepted' | 'declined') => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <div className="cookie-bar__inner">
        <p className="cookie-bar__text">
          We use cookies for site security and functionality.{' '}
          {managing && (
            <span className="cookie-bar__detail">
              Strictly necessary cookies (e.g. security and performance via Cloudflare) are always
              active and cannot be disabled. We currently use no analytics or marketing cookies —
              if that changes, this banner will ask for your consent before they load.
            </span>
          )}
          {' '}See our{' '}
          <Link href="/privacy" className="cookie-bar__link">Privacy Policy</Link> for details.
        </p>
        <div className="cookie-bar__actions">
          {!managing && (
            <button type="button" className="cookie-bar__btn cookie-bar__btn--ghost" onClick={() => setManaging(true)}>
              Manage preferences
            </button>
          )}
          <button type="button" className="cookie-bar__btn cookie-bar__btn--ghost" onClick={() => dismiss('declined')}>
            Decline
          </button>
          <button type="button" className="cookie-bar__btn cookie-bar__btn--primary" onClick={() => dismiss('accepted')}>
            Accept
          </button>
        </div>
      </div>

      <style>{`
        .cookie-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 200;
          background: var(--hp-black, #08090a);
          border-top: 1px solid var(--hp-ivory-25, rgba(246,245,241,0.22));
          padding: 1.1rem 1.5rem;
        }
        .cookie-bar__inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem 1.5rem;
        }
        .cookie-bar__text {
          flex: 1 1 480px;
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.82rem;
          line-height: 1.6;
          color: var(--hp-ivory-80, rgba(246,245,241,0.8));
        }
        .cookie-bar__detail {
          color: var(--hp-ivory-60, rgba(246,245,241,0.58));
        }
        .cookie-bar__link {
          color: var(--hp-ivory, #f6f5f1);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .cookie-bar__actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .cookie-bar__btn {
          font-family: var(--hp-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.65rem 1.1rem;
          border-radius: 999px;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .cookie-bar__btn:hover { opacity: 0.85; }
        .cookie-bar__btn--ghost {
          background: transparent;
          border: 1px solid var(--hp-ivory-25, rgba(246,245,241,0.22));
          color: var(--hp-ivory-80, rgba(246,245,241,0.8));
        }
        .cookie-bar__btn--primary {
          background: var(--hp-red, #e21b2d);
          border: 1px solid var(--hp-red, #e21b2d);
          color: #fff;
        }
        @media (max-width: 640px) {
          .cookie-bar {
            padding: 0.8rem 1rem calc(0.8rem + env(safe-area-inset-bottom, 0px));
          }
          .cookie-bar__inner {
            flex-direction: column;
            align-items: stretch;
            gap: 0.7rem;
            max-height: 65vh;
            overflow-y: auto;
          }
          .cookie-bar__text { font-size: 0.74rem; line-height: 1.45; flex: 0 0 auto; }
          .cookie-bar__actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }
          .cookie-bar__btn {
            padding: 0.6rem 0.5rem;
            font-size: 0.66rem;
            justify-content: center;
            text-align: center;
          }
          /* "Manage preferences" (only present when not yet managing) spans the row */
          .cookie-bar__actions .cookie-bar__btn:first-child:nth-last-child(3) { grid-column: 1 / -1; }
        }
      `}</style>
    </div>
  );
}
