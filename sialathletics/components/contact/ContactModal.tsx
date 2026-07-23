'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
import { useContactModal } from '@/lib/contactModal';
import ContactFormFields from '@/components/contact/ContactFormFields';

const EASE = [0.16, 1, 0.3, 1] as const;

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ContactModal() {
  const { isOpen, prefill, close, triggerRef } = useContactModal();
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Lock body & Lenis scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    lenis?.stop();

    const prevBodyOverflow = document.body.style.overflow;
    const prevDocOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevDocOverflow;
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // Escape to close, focus trap while open, restore focus to trigger on close.
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const firstField = panel?.querySelector<HTMLElement>(FOCUSABLE);
    firstField?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab' || !panel) return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen, close, triggerRef]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="contact-modal" data-lenis-prevent>
          <motion.div
            className="contact-modal__scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            className="contact-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            data-lenis-prevent
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <button type="button" className="contact-modal__close" onClick={close} aria-label="Close contact form">
              <X size={18} />
            </button>

            <div className="contact-modal__head">
              <span className="hp-eyebrow hp-eyebrow--ink">Let&apos;s talk</span>
              <h2 id="contact-modal-title" className="hp-display contact-modal__title">Get a factory quote.</h2>
              <p className="contact-modal__copy">
                Send us your specs — we&apos;ll respond within 24 hours with pricing and sample options.
              </p>
            </div>

            <div className="contact-modal__body">
              <ContactFormFields compact theme="light" prefill={prefill} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
