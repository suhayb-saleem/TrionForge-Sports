'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Check } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productLine: 'Pickleball Paddles',
    orderVolume: 'Sample Only (1-5 units)',
    message: '',
    website: '', // honeypot
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          productLine: 'Pickleball Paddles',
          orderVolume: 'Sample Only (1-5 units)',
          message: '',
          website: '',
        });
      } else {
        setError(result.error || 'Failed to submit inquiry. Please check the fields and try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ background: 'var(--bg-base)', padding: '6rem 1.5rem' }}>
      <div className="contact-form-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '4rem', alignItems: 'start' }}>

        {/* Left — Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>REACH US DIRECTLY</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--white)', lineHeight: 0.95, marginBottom: '2.5rem' }}>
            WE RESPOND<br />WITHIN 24 HOURS.
          </h2>
          {[
            { Icon: MapPin, label: 'FACTORY HQ', value: 'Sialkot, Punjab, Pakistan' },
            { Icon: Mail, label: 'EMAIL', value: 'info@sialathletics.com' },
            { Icon: Phone, label: 'PHONE', value: '+923355933174' },
          ].map(({ Icon, label, value }, i) => (
            <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: i < 2 ? '1px solid var(--white-08)' : 'none' }}>
              <Icon size={18} color="var(--red)" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{label}</p>
                {label === 'EMAIL' ? (
                  <a href={`mailto:${value}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                     onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
                     onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}>
                    {value}
                  </a>
                ) : label === 'PHONE' ? (
                  <a href={`tel:${value}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                     onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
                     onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}>
                    {value}
                  </a>
                ) : (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)', margin: 0 }}>{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right — Form / Success panel */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)', padding: '2.5rem' }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3.5rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', border: '1px solid var(--red)', background: 'rgba(227, 27, 35, 0.1)', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Check size={32} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--white)', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inquiry Received</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--white-60)', lineHeight: 1.6, maxWidth: '385px', margin: '0 0 2rem 0' }}>
                Thank you. Your inquiry report has been compiled and emailed to you as a PDF. Our factory team will reach out with pricing and sample options within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid var(--white-20)', 
                  padding: '0.75rem 1.5rem', 
                  color: 'var(--white)', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--red)';
                  e.currentTarget.style.color = 'var(--red)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--white-20)';
                  e.currentTarget.style.color = 'var(--white)';
                }}
              >
                Send Another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div style={{ background: 'rgba(227, 27, 35, 0.1)', border: '1px solid var(--red)', padding: '0.8rem 1rem', color: 'var(--red)', fontSize: '0.85rem', fontFamily: 'var(--font-body)', marginBottom: '1.25rem' }}>
                  {error}
                </div>
              )}

              {/* Honeypot field (hidden from users, targeted by bots) */}
              <div style={{ display: 'none' }}>
                <label htmlFor="form-website">Website</label>
                <input 
                  id="form-website"
                  type="text" 
                  name="website"
                  value={formData.website}
                  onChange={e => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="form-name" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Your Name *</label>
                  <input 
                    id="form-name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="form-email" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Work Email *</label>
                  <input 
                    id="form-email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%' }} 
                  />
                </div>
              </div>

              <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="form-company" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Company Name *</label>
                  <input 
                    id="form-company"
                    type="text" 
                    required
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="form-country" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Country / Region</label>
                  <input 
                    id="form-country"
                    type="text" 
                    value={formData.country}
                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%' }} 
                  />
                </div>
              </div>

              <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="form-interest" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Product Line</label>
                  <select 
                    id="form-interest"
                    value={formData.productLine}
                    onChange={e => setFormData({ ...formData, productLine: e.target.value })}
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', height: '43px' }}
                  >
                    <option value="Pickleball Paddles">Pickleball Paddles</option>
                    <option value="Padel Rackets">Padel Rackets</option>
                    <option value="Both Lines">Both Lines</option>
                    <option value="Other Accessories">Other Accessories</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="form-volume" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Order Volume</label>
                  <select 
                    id="form-volume"
                    value={formData.orderVolume}
                    onChange={e => setFormData({ ...formData, orderVolume: e.target.value })}
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', height: '43px' }}
                  >
                    <option value="Sample Only (1-5 units)">Sample Only (1-5 units)</option>
                    <option value="50-100 Units (Starter)">50-100 Units (Starter)</option>
                    <option value="100-500 Units (Growth)">100-500 Units (Growth)</option>
                    <option value="500+ Units (Enterprise)">500+ Units (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
                <label htmlFor="form-message" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Message *</label>
                <textarea 
                  id="form-message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', width: '100%' }} 
                />
              </div>

              <button 
                type="submit"
                disabled={submitting}
                style={{ 
                  marginTop: '1.5rem', 
                  width: '100%', 
                  background: submitting ? 'var(--white-20)' : 'var(--red)', 
                  color: 'var(--white)', 
                  border: 'none', 
                  padding: '1rem', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  fontWeight: 600, 
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
              >
                {submitting ? 'SUBMITTING INQUIRY...' : 'SUBMIT INQUIRY'}
              </button>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--white-60)', textAlign: 'center', marginTop: '1rem' }}>
                We typically respond within 1 business day.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .contact-form-grid { grid-template-columns: 1fr 1.5fr; }
        .contact-fields-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .contact-form-grid { grid-template-columns: 1fr; }
          .contact-fields-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

