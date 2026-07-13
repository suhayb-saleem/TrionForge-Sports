'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Button from '@/components/ui/Button';

const links = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PRODUCTS', href: '/catalogue' },
  { label: 'CAPABILITIES', href: '/capabilities' },
  { label: 'QUALITY', href: '/quality' },
  { label: 'CONTACT', href: '/contact' },
];

// Animated padel racket & bouncing ball vector logo mark
const RacketAnimation = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInteract = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 800);
  };

  return (
    <div
      onClick={handleInteract}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '56px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '0.4rem',
        cursor: 'pointer',
      }}
    >
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ overflow: 'visible' }}>
        {/* Ambient background glow behind the racket */}
        <circle cx="12" cy="8" r="8" fill="rgba(232, 0, 28, 0.08)" style={{ filter: 'blur(6px)' }} />

        {/* Animated Racket */}
        <motion.g
          animate={
            isSpinning
              ? { rotate: [0, 360], scale: [1, 1.2, 1] }
              : isHovered
              ? { rotate: [-14, 14, -14], y: [-1, -3, -1] }
              : { rotate: [-7, 7, -7], y: [0, -1, 0] }
          }
          transition={
            isSpinning
              ? { duration: 0.8, ease: "easeInOut" }
              : { repeat: Infinity, duration: isHovered ? 1.4 : 2.6, ease: "easeInOut" }
          }
          style={{ transformOrigin: '12px 18px' }}
        >
          {/* Racket Handle */}
          <line x1="12" y1="14" x2="12" y2="21" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="17.5" x2="12" y2="21" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Racket Head (Teardrop shape for Padel Racket) */}
          <path d="M12 2 C8 2 8 13 12 13 C16 13 16 2 12 2 Z" fill="rgba(255, 255, 255, 0.06)" stroke="var(--white-80)" strokeWidth="1.5" />
          
          {/* Padel Holes (glowing micro dots) */}
          <circle cx="12" cy="5" r="0.6" fill="var(--red)" />
          <circle cx="10.5" cy="7.5" r="0.6" fill="var(--red)" />
          <circle cx="13.5" cy="7.5" r="0.6" fill="var(--red)" />
          <circle cx="12" cy="10" r="0.6" fill="var(--red)" />
        </motion.g>

        {/* Animated Bouncing Ball */}
        <motion.circle
          cx="12"
          cy="0"
          r="1.8"
          fill="var(--red)"
          style={{ filter: 'drop-shadow(0 0 5px var(--red))' }}
          animate={
            isSpinning
              ? { y: [-7, -35, 2.5, -7] }
              : isHovered
              ? { y: [-15, 2.5, -15] }
              : { y: [-7, 2.5, -7] }
          }
          transition={
            isSpinning
              ? { duration: 0.8, ease: "easeInOut" }
              : { repeat: Infinity, duration: isHovered ? 0.7 : 1.3, ease: "easeInOut" }
          }
        />
      </svg>
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        style={{
          position: 'fixed',
          top: scrolled ? '16px' : '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          height: '64px',
          width: '92%',
          maxWidth: '1080px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem 0 1.75rem',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.6)',
          backdropFilter: 'blur(20px)',
          borderRadius: '40px',
          boxShadow: scrolled
            ? '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(232, 0, 28, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 12px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          transition: 'top 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Logo & Animated Racket */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', flexShrink: 0 }}>
          <Image src="/images/logo.png" alt="SIAL Athletics" width={142} height={38} style={{ objectFit: 'contain' }} priority />
          <RacketAnimation />
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }} className="hide-mobile">
          {links.map(({ label, href }, idx) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(0.62rem, 0.72vw, 0.72rem)', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: active || hoveredIdx === idx ? 'var(--white)' : 'var(--white-60)',
                textDecoration: 'none', position: 'relative',
                padding: '8px 14px',
                borderRadius: '30px',
                transition: 'color 0.25s ease',
                display: 'inline-block'
              }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {hoveredIdx === idx && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '30px',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '14px',
                      right: '14px',
                      height: '2.5px',
                      background: 'var(--red)',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px rgba(232, 0, 28, 0.5)'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {label}
              </Link>
            );
          })}
          <div style={{ marginLeft: '0.5rem', display: 'inline-block' }}>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="!py-1.5 !px-4"
            >
              GET A QUOTE
            </Button>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="show-mobile" style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid var(--white-08)', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '10px', borderRadius: '50%',
          justifyContent: 'center', alignItems: 'center', width: '38px', height: '38px'
        }}>
          {[0, 1, 2].map(i => (
            <motion.span key={i} animate={open
              ? i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 5 } : { rotate: -45, y: -5 }
              : { rotate: 0, y: 0, opacity: 1 }
            } style={{ display: 'block', width: '16px', height: '1.5px', background: 'var(--white)', transformOrigin: 'center' }} />
          ))}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'var(--bg-base)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
            {links.map(({ label, href }, i) => (
              <motion.div key={href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={href} style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: pathname === href ? 'var(--red)' : 'var(--white)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              <Button href="/contact" variant="primary" size="lg">
                GET A QUOTE
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
