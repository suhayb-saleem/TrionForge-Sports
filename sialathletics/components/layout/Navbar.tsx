'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Button from '@/components/ui/Button';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/catalogue' },
];

const aboutGroup = {
  label: 'About Us',
  items: [
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'About SIAL Athletics', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const pathname = usePathname();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!aboutOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAboutOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [aboutOpen]);

  const closeMenu = () => {
    setOpen(false);
    setMobileAboutOpen(false);
  };

  const aboutActive = aboutGroup.items.some((item) => pathname === item.href);

  return (
    <>
      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav__inner">
          <Link href="/" className="site-nav__brand" aria-label="SIAL Athletics home">
            {/* Dark logo over the bright hero; white logo once the bar turns black on scroll. */}
            <Image
              src={scrolled ? '/images/logo.png' : '/images/logo-dark.png'}
              alt="SIAL Athletics"
              width={142}
              height={38}
              sizes="142px"
              priority
              style={{ width: '142px', height: 'auto' }}
            />
          </Link>

          <nav className="site-nav__links hide-mobile" aria-label="Primary navigation">
            {links.map(({ label, href }) => {
              const active = href === '/' ? pathname === '/' : pathname === href.split('?')[0];
              return (
                <Link key={href} href={href} className={active ? 'is-active' : ''}>
                  {label}
                  {active && (
                    <motion.span
                      layoutId="site-nav-underline"
                      className="site-nav__underline"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="site-nav__dropdown" ref={aboutRef}>
              <button
                type="button"
                className={`site-nav__dropdown-trigger ${aboutActive ? 'is-active' : ''}`}
                onClick={() => setAboutOpen((v) => !v)}
                aria-expanded={aboutOpen}
                aria-haspopup="true"
              >
                {aboutGroup.label}
                <ChevronDown size={13} className={`site-nav__chevron ${aboutOpen ? 'is-open' : ''}`} />
                {aboutActive && (
                  <motion.span
                    layoutId="site-nav-underline"
                    className="site-nav__underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    className="site-nav__dropdown-panel"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {aboutGroup.items.map(({ label, href }) => {
                      const itemActive = pathname === href;
                      return (
                        <Link key={href} href={href} className={itemActive ? 'is-active' : ''} onClick={() => setAboutOpen(false)}>
                          {label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="site-nav__actions">
            <Button href="/contact" size="sm" className="hide-mobile">Start an inquiry</Button>
            <button className="site-nav__toggle show-mobile" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">
              {open ? <X size={19} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .24, ease: [0.16, 1, .3, 1] }}>
            <nav aria-label="Mobile navigation">
              {links.map(({ label, href }, index) => (
                <motion.div key={href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .04 * index }}>
                  <Link href={href} onClick={closeMenu}>{label}</Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .04 * links.length }}>
                <button
                  type="button"
                  className={`mobile-nav__group-toggle ${aboutActive ? 'is-active' : ''}`}
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  aria-expanded={mobileAboutOpen}
                >
                  {aboutGroup.label}
                  <ChevronDown size={22} className={`site-nav__chevron ${mobileAboutOpen ? 'is-open' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      className="mobile-nav__group"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, .3, 1] }}
                    >
                      {aboutGroup.items.map(({ label, href }) => (
                        <Link key={href} href={href} onClick={closeMenu}>{label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>
            <Button href="/contact" size="lg" onClick={closeMenu}>Start an inquiry</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
