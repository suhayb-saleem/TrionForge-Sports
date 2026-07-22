'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/lib/contactModal';

const DELAY_MS = 7000;
const SESSION_KEY = 'sial-modal-auto-shown';

// Fires the contact modal once per browser session after a short delay,
// instead of on any CTA click — CTA buttons navigate to /contact directly.
export default function ContactModalTimer() {
  const { open } = useContactModal();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/contact') return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, '1');
      open();
    }, DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [open, pathname]);

  return null;
}
