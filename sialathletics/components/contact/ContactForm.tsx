'use client';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section style={{ background: '#0a0a0a', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>

        {/* Left — Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#E8001C', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>REACH US DIRECTLY</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', lineHeight: 0.95, marginBottom: '2.5rem' }}>
            WE RESPOND<br />WITHIN 24 HOURS.
          </h2>
          {[
            { Icon: MapPin, label: 'FACTORY HQ', value: 'Sialkot, Punjab, Pakistan' },
            { Icon: Mail, label: 'EMAIL', value: 'info@sialathletics.com' },
            { Icon: Phone, label: 'US PHONE', value: '+1 (xxx) xxx-xxxx' },
          ].map(({ Icon, label, value }, i) => (
            <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <Icon size={18} color="#E8001C" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#fff' }}>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right — Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {['Your Name *', 'Work Email *', 'Company Name', 'Country / Region'].map((field) => (
              <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{field}</label>
                <input type="text" style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Product Line</label>
              <select style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none' }}>
                <option>Pickleball Paddles</option>
                <option>Padel Rackets</option>
                <option>Both</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Order Volume</label>
              <select style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none' }}>
                <option>Sample Only (1-5 units)</option>
                <option>50-100 Units</option>
                <option>100-500 Units</option>
                <option>500+ Units</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#8A8A8A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Message</label>
            <textarea rows={4} style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', width: '100%' }} />
          </div>
          <button style={{ marginTop: '1.5rem', width: '100%', background: '#E8001C', color: '#fff', border: 'none', padding: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, cursor: 'pointer' }}>
            SUBMIT INQUIRY
          </button>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#8A8A8A', textAlign: 'center', marginTop: '1rem' }}>
            We typically respond within 1 business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
