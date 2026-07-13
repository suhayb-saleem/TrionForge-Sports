'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      {children as any}
    </ReactLenis>
  );
}
