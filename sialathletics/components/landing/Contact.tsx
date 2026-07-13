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
    company: '',
    interest: 'pickleball',
    moq: '50-100',
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

    // Map fields to match API expectations
    const productLineMap: Record<string, string> = {
      pickleball: 'Pickleball Paddles',
      padel: 'Padel Rackets',
      both: 'Both Lines',
      accessories: 'Other Accessories',
    };

    const orderVolumeMap: Record<string, string> = {
      '50-100': '50-100 Units (Starter)',
      '100-500': '100-500 Units (Growth)',
      '500+': '500+ Units (Enterprise)',
      samples: 'Sample Only (1-5 units)',
    };

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      country: 'N/A', // Not collected on landing page form
      productLine: productLineMap[formData.interest] || formData.interest,
      orderVolume: orderVolumeMap[formData.moq] || formData.moq,
      message: formData.message.trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'pickleball',
          moq: '50-100',
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
                <div style={{ padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--white-08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--white-60)' }} className="text-[10px] font-bold uppercase tracking-wider">Factory HQ</div>
                  <div className="font-bold text-sm text-white">Sialkot, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--white-08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                <div style={{ padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--white-08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            }}
          >
            {submitted ? (
              <div className="text-center" style={{ padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-none mb-4" style={{ background: 'var(--red-glow)', border: '1px solid var(--red)', color: 'var(--red)', display: 'flex' }}>
                  <Check size={32} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase" style={{ margin: 0 }}>Inquiry Received</h3>
                <p className="font-body text-[var(--white-60)] text-sm max-w-sm mx-auto" style={{ margin: 0, lineHeight: 1.6 }}>
                  Thank you. A product specialist will contact you within 24 hours with details, custom options, and digital PDF catalogs.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="mt-6">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }} className="font-body text-white">
                 {error && (
                  <div style={{ background: 'rgba(227, 27, 35, 0.1)', border: '1px solid var(--red)', padding: '0.8rem 1rem', color: 'var(--red)', fontSize: '0.85rem' }}>
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
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none' }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@company.com"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none' }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Company & Interest Group */}
                <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem' }}>
                  {/* Company */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="company" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="e.g. Pro Pickleball Inc"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none' }}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  {/* Product Interest */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="interest" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Product Line
                    </label>
                    <select
                      id="interest"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 h-[46px]"
                      style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none' }}
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="pickleball">Pickleball Paddles</option>
                      <option value="padel">Padel Rackets</option>
                      <option value="both">Both Lines</option>
                      <option value="accessories">Other Accessories</option>
                    </select>
                  </div>
                </div>

                {/* MOQ Selection */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="moq" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                    Target Order Volume (MOQ)
                  </label>
                  <select
                    id="moq"
                    className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 h-[46px]"
                    style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none' }}
                    value={formData.moq}
                    onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                  >
                    <option value="50-100">50 - 100 Units (Starter)</option>
                    <option value="100-500">100 - 500 Units (Growth)</option>
                    <option value="500+">500+ Units (Enterprise)</option>
                    <option value="samples">Sample order only</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Specify target specifications, material preferences, logo engraving, or custom request details here..."
                    className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                    style={{ background: 'var(--bg-base)', border: '1px solid var(--white-08)', outline: 'none' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit button with top margin */}
                <div style={{ marginTop: '0.75rem' }}>
                  <Button type="submit" variant="primary" size="md" disabled={submitting} className="w-full flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>{submitting ? 'Submitting...' : 'Submit B2B Inquiry'}</span>
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
