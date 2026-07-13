'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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
      // Quietly intercept and mock success for bots
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
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
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
              <div
                style={{
                  padding: '0.5rem',
                  background: 'linear-gradient(135deg, rgba(232, 0, 28, 0.08), transparent)',
                  border: '1px solid rgba(232, 0, 28, 0.25)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '3px',
                  flexShrink: 0
                }}
              >
                <Icon size={16} color="var(--red)" />
              </div>
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
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)', padding: '2.5rem', borderRadius: '16px' }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3.5rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', border: '1px solid var(--red)', background: 'rgba(227, 27, 35, 0.1)', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Check size={32} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--white)', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inquiry Received</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--white-60)', lineHeight: 1.6, maxWidth: '385px', margin: '0 0 2rem 0' }}>
                Thank you. We have successfully received your inquiry. A confirmation email has been sent to your address, and our team will get back to you soon.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                Send Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div style={{ background: 'rgba(227, 27, 35, 0.1)', border: '1px solid var(--red)', padding: '0.8rem 1rem', color: 'var(--red)', fontSize: '0.85rem', fontFamily: 'var(--font-body)', marginBottom: '1.25rem', borderRadius: '8px' }}>
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
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%', borderRadius: '8px' }} 
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
                    style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%', borderRadius: '8px' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
                <label htmlFor="form-phone" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Phone Number (Optional)</label>
                <input 
                  id="form-phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%', borderRadius: '8px' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
                <label htmlFor="form-message" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Message *</label>
                <textarea 
                  id="form-message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', width: '100%', borderRadius: '8px' }} 
                />
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Button type="submit" variant="primary" size="md" className="w-full" disabled={submitting}>
                  {submitting ? 'Submitting inquiry...' : 'Submit Inquiry'}
                </Button>
              </div>
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
