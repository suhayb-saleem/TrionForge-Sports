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
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[var(--border-light)]" style={{ background: 'var(--bg-light)' }}>
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
              <h2 className="font-display text-[40px] sm:text-[56px] text-[var(--text-dark)] leading-[1.05] uppercase">
                GET A FACTORY<br />QUOTE DIRECT
              </h2>
              <p className="font-body text-[var(--text-muted)] text-base leading-relaxed max-w-sm">
                Connect with our product development team in Sialkot and US sales representatives to arrange sample delivery, pricing sheets, and custom mold quotes.
              </p>
            </div>

            <div className="space-y-6 pt-4 font-body">
              <div className="flex items-center gap-4">
                <div style={{ padding: '0.75rem', background: 'var(--bg-light-alt)', border: '1px solid var(--border-light)' }}>
                  <MapPin size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)' }} className="text-[10px] font-bold uppercase tracking-wider">Factory HQ</div>
                  <div className="font-bold text-sm text-[var(--text-dark)]">Sialkot, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div style={{ padding: '0.75rem', background: 'var(--bg-light-alt)', border: '1px solid var(--border-light)' }}>
                  <Mail size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)' }} className="text-[10px] font-bold uppercase tracking-wider">Email Inquiry</div>
                  <a href="mailto:info@sialathletics.com" className="font-bold text-sm text-[var(--text-dark)] hover:text-[var(--red)] transition-colors duration-200">
                    info@sialathletics.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div style={{ padding: '0.75rem', background: 'var(--bg-light-alt)', border: '1px solid var(--border-light)' }}>
                  <Phone size={20} color="var(--red)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)' }} className="text-[10px] font-bold uppercase tracking-wider">Direct Phone</div>
                  <div className="font-bold text-sm text-[var(--text-dark)]">+1 (xxx) xxx-xxxx</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form in Premium Dark Container */}
          <AnimatedSection direction="up" className="p-8 md:p-12 bg-[var(--bg-card)] border border-[var(--white-08)] shadow-[0_24px_50px_rgba(0,0,0,0.55)]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-none mb-4" style={{ background: 'var(--red-glow)', border: '1px solid var(--red)', color: 'var(--red)' }}>
                  <Check size={32} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase">Inquiry Received</h3>
                <p className="font-body text-[var(--white-60)] text-sm max-w-sm mx-auto">
                  Thank you. A product specialist will contact you within 24 hours with details, custom options, and digital PDF catalogs.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="mt-6">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-body text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@company.com"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="e.g. Pro Pickleball Inc"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  {/* Product Interest */}
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="interest" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                      Product Line
                    </label>
                    <select
                      id="interest"
                      className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 h-[46px]"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
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

                {/* Estimate MOQ */}
                <div className="space-y-2">
                  <label htmlFor="moq" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                    Target Order Volume (MOQ)
                  </label>
                  <select
                    id="moq"
                    className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 h-[46px]"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                    value={formData.moq}
                    onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                  >
                    <option value="50-100">50 - 100 Units (Starter)</option>
                    <option value="100-500">100 - 500 Units (Growth)</option>
                    <option value="500+">500+ Units (Enterprise)</option>
                    <option value="samples">Sample order only</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--white-60)' }}>
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Specify target specifications, material preferences, logo engraving, or custom request details here..."
                    className="w-full p-3 text-white text-sm rounded-none focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit button */}
                <div>
                  <Button type="submit" variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>Submit B2B Inquiry</span>
                  </Button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
