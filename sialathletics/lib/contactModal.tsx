'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

export type ContactPrefill = {
  productLine?: string;
  message?: string;
};

type ContactModalContextValue = {
  isOpen: boolean;
  prefill: ContactPrefill | null;
  open: (prefill?: ContactPrefill) => void;
  close: () => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<ContactPrefill | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((next?: ContactPrefill) => {
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    setPrefill(next ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => ({ isOpen, prefill, open, close, triggerRef }), [isOpen, prefill, open, close]);

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>;
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error('useContactModal must be used within a ContactModalProvider');
  return ctx;
}
