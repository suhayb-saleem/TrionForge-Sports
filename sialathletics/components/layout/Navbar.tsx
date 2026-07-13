'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PRODUCTS', href: '/catalogue' },
  { label: 'CAPABILITIES', href: '/capabilities' },
  { label: 'QUALITY', href: '/quality' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: '72px',
          display: 'flex', alignItems: 'center',
          padding: '0 2rem',
          borderBottom: scrolled ? '1px solid var(--white-08)' : '1px solid transparent',
          background: scrolled ? 'var(--bg-overlay)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background 0.4s var(--ease), border-color 0.4s var(--ease), backdrop-filter 0.4s var(--ease)',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, marginRight: 'auto' }}>
          <Image src="/images/logo.png" alt="SIAL Athletics" width={140} height={40} style={{ objectFit: 'contain' }} priority />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hide-mobile">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: active ? 'var(--white)' : 'var(--white-60)',
                textDecoration: 'none', position: 'relative', paddingBottom: '2px',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--white-60)'; }}
              >
                {label}
                {active && (
                  <motion.span layoutId="nav-underline" style={{
                    position: 'absolute', bottom: -2, left: 0, right: 0,
                    height: '1.5px', background: 'var(--red)',
                  }} />
                )}
              </Link>
            );
          })}
          <Link href="/contact" style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            background: 'var(--red)', color: 'var(--white)',
            padding: '10px 22px', textDecoration: 'none',
            transition: 'background 0.2s ease',
            borderRadius: 0,
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
          >
            GET A QUOTE
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="show-mobile" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px',
        }}>
          {[0, 1, 2].map(i => (
            <motion.span key={i} animate={open
              ? i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 7 } : { rotate: -45, y: -7 }
              : { rotate: 0, y: 0, opacity: 1 }
            } style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--white)', transformOrigin: 'center' }} />
          ))}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'var(--bg-base)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
            {links.map(({ label, href }, i) => (
              <motion.div key={href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={href} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: pathname === href ? 'var(--red)' : 'var(--white)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              <Link href="/contact" style={{ background: 'var(--red)', color: 'var(--white)', padding: '14px 36px', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>
                GET A QUOTE
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) { .hide-mobile { display: none !important; } }
        @media (min-width: 1025px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
