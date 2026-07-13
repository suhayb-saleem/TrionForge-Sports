'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '', // honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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
    <section id="contact" className="py-24 relative border-t border-[var(--white-08)]" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 texture-steel pointer-events-none opacity-30" />
      <div className="absolute inset-0 texture-noise pointer-events-none opacity-30" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-16 items-start">
          {/* Left Panel: Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionLabel showSlash={true}>
                START THE PROGRAM
              </SectionLabel>
              <h2 className="font-display text-[40px] sm:text-[56px] text-white leading-[1.05] uppercase" style={{ marginTop: '1rem' }}>
                GET A FACTORY<br />QUOTE DIRECT
              </h2>
              <p className="font-body text-[var(--white-60)] text-base leading-relaxed max-w-sm" style={{ marginTop: '1.25rem' }}>
                Connect with our product development team in Sialkot and US sales representatives to arrange sample delivery, pricing sheets, and custom mold quotes.
              </p>
            </div>

            <div className="space-y-6 pt-4 font-body" style={{ marginTop: '2rem' }}>
              <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--white-08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                  <MapPin size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--white-60)' }} className="text-[10px] font-bold uppercase tracking-wider">Factory HQ</div>
                  <div className="font-bold text-sm text-white">Sialkot, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--white-08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                  <Mail size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--white-60)' }} className="text-[10px] font-bold uppercase tracking-wider">Email Inquiry</div>
                  <a href="mailto:info@sialathletics.com" className="font-bold text-sm text-white hover:text-[var(--red)] transition-colors duration-200">
                    info@sialathletics.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--white-08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                  <Phone size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--white-60)' }} className="text-[10px] font-bold uppercase tracking-wider">Phone</div>
                  <a href="tel:+923355933174" className="font-bold text-sm text-white hover:text-[var(--red)] transition-colors duration-200">
                    +923355933174
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form Container with explicit padding & gaps */}
          <AnimatedSection
            direction="up"
            className="bg-[var(--bg-card)] border border-[var(--white-08)] shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: '16px'
            }}
          >
            {submitted ? (
              <div className="text-center" style={{ padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-none mb-4" style={{ background: 'var(--red-glow)', border: '1px solid var(--red)', color: 'var(--red)', display: 'flex' }}>
                  <Check size={32} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase" style={{ margin: 0 }}>Inquiry Received</h3>
                <p className="font-body text-[var(--white-60)] text-sm max-w-sm mx-auto" style={{ margin: 0, lineHeight: 1.6 }}>
                  Thank you. We have successfully received your inquiry. A confirmation email has been sent to your address, and our team will get back to you soon.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="mt-6">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-body">
                {error && (
                  <div className="p-3 text-sm text-red border border-red/30 bg-red/10" style={{ color: 'var(--red)', background: 'rgba(227, 27, 35, 0.1)', border: '1px solid rgba(227, 27, 35, 0.25)', borderRadius: '8px' }}>
                    {error}
                  </div>
                )}

                {/* Honeypot field (hidden from users, targeted by bots) */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="landing-website">Website</label>
                  <input 
                    id="landing-website"
                    type="text" 
                    name="website"
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Group */}
                <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem' }}>
                  {/* Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full p-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none', borderRadius: '8px' }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@company.com"
                      className="w-full p-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none', borderRadius: '8px' }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. +1 (555) 000-0000"
                    className="w-full p-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors duration-200"
                    style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none', borderRadius: '8px' }}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Message Textarea */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Specify target specifications, material preferences, logo engraving, or custom request details here..."
                    className="w-full p-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                    style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none', borderRadius: '8px' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit button with top margin */}
                <div style={{ marginTop: '0.75rem' }}>
                  <Button type="submit" variant="primary" size="md" disabled={submitting} className="w-full flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>{submitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                  </Button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
      
      <style>{`
        .contact-fields-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 640px) {
          .contact-fields-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
