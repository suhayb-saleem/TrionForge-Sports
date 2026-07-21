'use client';

import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import type { ContactPrefill } from '@/lib/contactModal';

const PRODUCT_LINES = ['Padel Rackets', 'Pickleball Paddles', 'Both Lines', 'Other Accessories'];

// Shared form state, validation, and /api/contact submission logic used by
// both the standalone /contact page and the site-wide ContactModal — the
// submission path (honeypot, Resend notification + client PDF confirmation)
// lives only in app/api/contact/route.ts; this component just calls it.
export default function ContactFormFields({ compact = false, theme = 'dark', prefill }: { compact?: boolean; theme?: 'dark' | 'light'; prefill?: ContactPrefill | null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productLine: 'Padel Rackets',
    orderVolume: 'Sample Only (1-5 units)',
    message: '',
    website: '', // honeypot
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!prefill) return;
    setFormData((prev) => ({
      ...prev,
      message: prefill.message ?? prev.message,
      productLine: prefill.productLine && PRODUCT_LINES.includes(prefill.productLine) ? prefill.productLine : prev.productLine,
    }));
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (formData.website) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          country: formData.country.trim(),
          productLine: formData.productLine,
          orderVolume: formData.orderVolume,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: '', email: '', phone: '', company: '', country: '',
          productLine: 'Padel Rackets', orderVolume: 'Sample Only (1-5 units)', message: '', website: '',
        });
      } else {
        setError(result.error || 'Failed to submit inquiry. Please check the fields and try again.');
      }
    } catch {
      setError('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const idPrefix = compact ? 'modal' : 'form';
  const themeClass = theme === 'light' ? 'hp-form--light' : '';

  if (submitted) {
    return (
      <div className={`hp-form__success ${themeClass}`}>
        <div className="hp-form__success-icon"><Check size={30} /></div>
        <h3>Inquiry received.</h3>
        <p>
          Thank you. Your inquiry report has been compiled and emailed to you as a PDF. Our factory team
          will reach out with pricing and sample options within 24 hours.
        </p>
        <button type="button" className="hp-btn hp-btn--primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
          <span>Send another inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`hp-form__grid ${themeClass}`} style={compact ? { gridTemplateColumns: '1fr' } : undefined} noValidate>
      {error && <div className="hp-form__error" style={{ gridColumn: '1 / -1' }}>{error}</div>}

      <div style={{ display: 'none' }}>
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input
          id={`${idPrefix}-website`}
          type="text"
          name="website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="hp-field">
        <label htmlFor={`${idPrefix}-name`}>Your name</label>
        <input id={`${idPrefix}-name`} type="text" required placeholder="e.g. John Doe"
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </div>

      <div className="hp-field">
        <label htmlFor={`${idPrefix}-email`}>Work email</label>
        <input id={`${idPrefix}-email`} type="email" required placeholder="john@company.com"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>

      <div className="hp-field">
        <label htmlFor={`${idPrefix}-phone`}>Contact number</label>
        <input id={`${idPrefix}-phone`} type="tel" placeholder="+1 (555) 000-0000"
          value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      </div>

      <div className="hp-field">
        <label htmlFor={`${idPrefix}-company`}>Company name</label>
        <input id={`${idPrefix}-company`} type="text" required placeholder="e.g. Pro Padel Inc"
          value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
      </div>

      <div className="hp-field">
        <label htmlFor={`${idPrefix}-country`}>Country / region</label>
        <input id={`${idPrefix}-country`} type="text" placeholder="e.g. United States"
          value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
      </div>

      <div className="hp-field">
        <label htmlFor={`${idPrefix}-interest`}>Product line</label>
        <select id={`${idPrefix}-interest`} value={formData.productLine} onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}>
          {PRODUCT_LINES.map((line) => (
            <option key={line} value={line}>{line}</option>
          ))}
        </select>
      </div>

      <div className="hp-field" style={compact ? undefined : undefined}>
        <label htmlFor={`${idPrefix}-volume`}>Order volume</label>
        <select id={`${idPrefix}-volume`} value={formData.orderVolume} onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}>
          <option value="Sample Only (1-5 units)">Sample Only (1-5 units)</option>
          <option value="50-100 Units (Starter)">50-100 Units (Starter)</option>
          <option value="100-500 Units (Growth)">100-500 Units (Growth)</option>
          <option value="500+ Units (Enterprise)">500+ Units (Enterprise)</option>
        </select>
      </div>

      <div className="hp-field" style={{ gridColumn: '1 / -1' }}>
        <label htmlFor={`${idPrefix}-message`}>Message</label>
        <textarea id={`${idPrefix}-message`} required rows={compact ? 4 : (formData.message.length > 160 ? 10 : 5)}
          placeholder="Specify target specifications, material preferences, logo engraving, or custom request details…"
          style={{ resize: 'vertical' }}
          value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      </div>

      <div className="hp-form__submit" style={{ gridColumn: '1 / -1' }}>
        <button type="submit" className="hp-btn hp-btn--primary" disabled={submitting} style={{ width: '100%', maxWidth: compact ? undefined : '300px' }}>
          <span>{submitting ? 'Submitting inquiry…' : 'Submit inquiry'}</span>
        </button>
        {!compact && (
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.75rem', color: 'var(--hp-ink-45)', textAlign: 'center', marginTop: '1.5rem', letterSpacing: '0.1em' }}>
            We typically respond within 1 business day.
          </p>
        )}
      </div>
    </form>
  );
}
