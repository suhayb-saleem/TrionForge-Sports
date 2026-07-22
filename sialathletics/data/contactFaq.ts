// Shared between the client-side accordion (ContactFAQ.tsx) and the
// server-rendered FAQPage JSON-LD (app/contact/page.tsx) — plain data only,
// so it can be imported from either a client or server module cleanly.
export const contactFaqs = [
  { q: 'What is your minimum order quantity?', a: 'The minimum is 50 paddles or 24 rackets. Smaller sample orders (1-5 units) cost more per unit.' },
  { q: 'How long does sampling take?', a: 'Samples take 3-4 weeks once you approve the specs. We send photos and weights before shipping.' },
  { q: 'Do you ship directly to the US?', a: 'Yes. We handle the paperwork and can ship straight to your US warehouse.' },
  { q: 'Can I put my own branding on the rackets?', a: 'Yes. We offer full private-label programs — your graphics, colors, and packaging.' },
];
