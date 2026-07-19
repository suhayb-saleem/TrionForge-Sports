'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Check } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
  const formSectionRef = useRef<HTMLElement>(null);

  // Pre-fill from the catalogue spec configurator: /contact?line=...&spec=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get('spec');
    const line = params.get('line');
    if (!spec && !line) return;
    setFormData((prev) => ({
      ...prev,
      message: spec ?? prev.message,
      productLine:
        line && ['Padel Rackets', 'Pickleball Paddles', 'Both Lines', 'Other Accessories'].includes(line)
          ? line
          : prev.productLine,
    }));
    // Bring the pre-filled form into view so the hand-off is obvious.
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation: Required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Client-side validation: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    // Honeypot spam protection check
    if (formData.website) {
      // Quietly mock success for bots
      setSubmitted(true);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
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
          name: '',
          email: '',
          company: '',
          country: '',
          productLine: 'Padel Rackets',
          orderVolume: 'Sample Only (1-5 units)',
          message: '',
          website: '',
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

  const contactRows = [
    { Icon: MapPin, k: 'Factory HQ', v: 'Sialkot, Punjab, Pakistan', href: undefined as string | undefined },
    { Icon: Mail, k: 'Email', v: 'info@sialathletics.com', href: 'mailto:info@sialathletics.com' },
    { Icon: Phone, k: 'Phone', v: '+92 335 5933174', href: 'tel:+923355933174' },
  ];

  return (
    <section className="site-section" style={{ background: 'var(--hp-black)', scrollMarginTop: '90px' }} ref={formSectionRef}>
      <div className="contact-form-grid container-custom" style={{ display: 'grid', gap: '4rem', alignItems: 'start' }}>

        {/* Left — Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
          <SectionLabel>Reach us directly</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--hp-ivory)', margin: '0.9rem 0 2.5rem' }}>
            We respond<br />within 24 hours.
          </h2>
          <div className="hp-contact__rows">
            {contactRows.map(({ Icon, k, v, href }) => {
              const inner = (
                <>
                  <Icon size={18} strokeWidth={1.6} />
                  <div>
                    <div className="hp-contact__row-k">{k}</div>
                    <div className="hp-contact__row-v">{v}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={k} href={href} className="hp-contact__row">{inner}</a>
              ) : (
                <div key={k} className="hp-contact__row">{inner}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Right — Form / Success panel */}
        <motion.div className="hp-form" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}>
          {submitted ? (
            <div className="hp-form__success">
              <div className="hp-form__success-icon"><Check size={30} /></div>
              <h3>Inquiry received.</h3>
              <p>
                Thank you. Your inquiry report has been compiled and emailed to you as a PDF. Our factory team
                will reach out with pricing and sample options within 24 hours.
              </p>
              <button type="button" className="hp-btn hp-btn--ghost" onClick={() => setSubmitted(false)} style={{ marginTop: '0.6rem' }}>
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="hp-form__grid" noValidate>
              {error && <div className="hp-form__error">{error}</div>}

              {/* Honeypot field (hidden from users, targeted by bots) */}
              <div style={{ display: 'none' }}>
                <label htmlFor="form-website">Website</label>
                <input
                  id="form-website"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="hp-field">
                <label htmlFor="form-name">Your name</label>
                <input id="form-name" type="text" required placeholder="e.g. John Doe"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-email">Work email</label>
                <input id="form-email" type="email" required placeholder="john@company.com"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-company">Company name</label>
                <input id="form-company" type="text" required placeholder="e.g. Pro Padel Inc"
                  value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-country">Country / region</label>
                <input id="form-country" type="text" placeholder="e.g. United States"
                  value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-interest">Product line</label>
                <select id="form-interest" value={formData.productLine} onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}>
                  <option value="Padel Rackets">Padel Rackets</option>
                  <option value="Pickleball Paddles">Pickleball Paddles</option>
                  <option value="Both Lines">Both Lines</option>
                  <option value="Other Accessories">Other Accessories</option>
                </select>
              </div>

              <div className="hp-field">
                <label htmlFor="form-volume">Order volume</label>
                <select id="form-volume" value={formData.orderVolume} onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}>
                  <option value="Sample Only (1-5 units)">Sample Only (1-5 units)</option>
                  <option value="50-100 Units (Starter)">50-100 Units (Starter)</option>
                  <option value="100-500 Units (Growth)">100-500 Units (Growth)</option>
                  <option value="500+ Units (Enterprise)">500+ Units (Enterprise)</option>
                </select>
              </div>

              <div className="hp-field hp-field--full">
                <label htmlFor="form-message">Message</label>
                <textarea id="form-message" required rows={formData.message.length > 160 ? 10 : 4}
                  placeholder="Specify target specifications, material preferences, logo engraving, or custom request details…"
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              <div className="hp-form__submit">
                <button type="submit" className="hp-btn hp-btn--primary" disabled={submitting}>
                  <span>{submitting ? 'Submitting inquiry…' : 'Submit inquiry'}</span>
                </button>
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.75rem', color: 'var(--hp-ivory-60)', textAlign: 'center', marginTop: '1rem' }}>
                  We typically respond within 1 business day.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .contact-form-grid { grid-template-columns: 1fr 1.5fr; }
        @media (max-width: 768px) {
          .contact-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
