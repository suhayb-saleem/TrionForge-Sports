// Single source of truth for the FAQ page: the accordion UI and the
// FAQPage JSON-LD are both generated from this data.

export type FaqItem = { q: string; a: string };

export type FaqCategory = {
  id: string;
  title: string;
  framing: string;
  items: FaqItem[];
  related?: { label: string; href: string };
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'shipping-pricing',
    title: 'Shipping & Pricing',
    framing:
      'SIAL Athletics ships factory-direct from Sialkot, Pakistan. We handle export documentation on our side and coordinate freight to your warehouse or 3PL, so your landed cost is clear before production begins.',
    items: [
      {
        q: 'Which regions does SIAL Athletics ship to?',
        a: 'We support worldwide shipping through trusted logistics partners. Our manufacturing solutions are available to customers across North America, Europe, the Middle East, Asia-Pacific, Latin America, and Africa. If your destination isn\'t listed, our team will work with you to arrange the most suitable shipping solution.',
      },
      {
        q: 'What shipping terms do you offer?',
        a: 'Standard terms are FOB Karachi, with EXW Sialkot available on request. Other Incoterms can be discussed depending on your requirements.',
      },
      {
        q: 'How is pricing structured for OEM and private-label orders?',
        a: 'Pricing is quoted factory-direct per project, based on your specification — carbon grade, core material, surface finish, packaging — and order volume. Send us your target price point and quantity and we respond with a detailed quotation.',
      },
    ],
    related: { label: 'Start a quote', href: '/contact' },
  },
  {
    id: 'customization-technical',
    title: 'Customization & Technical Standards',
    framing:
      'Every specification on our padel rackets and pickleball paddles is selectable — face material, core, surface texture, weight, and balance — so your line hits the exact price point and play profile your market demands.',
    items: [
      {
        q: 'What can be customized on a padel racket?',
        a: 'Frame shape (teardrop, round, or diamond), carbon fiber grade (3K, 12K, 18K, or 24K, plus fiberglass-carbon hybrid and Kevlar-carbon blends), EVA core (black high-density, soft 13–15° hardness, or memory high-rebound), surface texture (3D grain or hexagon mold, sand grit, 3D decals), weight within the 350–380g range, and balance from 260–275mm — alongside full graphics, colorways, and grip options.',
      },
      {
        q: 'What can be customized on a pickleball paddle?',
        a: 'Face material (carbon fiber or fiberglass), polypropylene honeycomb core thickness (13mm, 14mm, or 16mm), paddle shape including elongated profiles, grip size and wrap, edge guard branding, and full surface graphics.',
      },
      {
        q: 'Are your products built to standard dimensions and performance specs?',
        a: 'Yes. Products are manufactured according to your specification and general industry practice for surface texture, dimensional limits, and performance. Certification and third-party testing requirements can be accommodated on a per-project basis — let us know what your market requires.',
      },
      {
        q: 'Where do your raw materials come from?',
        a: 'We use premium carbon fiber materials sourced from qualified suppliers. Material options are selected according to your specification and product requirements.',
      },
      {
        q: 'Can I order multiple models or both sports in a single program?',
        a: 'Yes. You can combine padel rackets and pickleball paddles, and multiple models within each, in one program. Per-model minimums are confirmed at quotation.',
      },
    ],
    related: { label: 'See manufacturing capabilities', href: '/capabilities' },
  },
  {
    id: 'branding-design',
    title: 'Branding & Design Support',
    framing:
      'You bring the brand; we bring the build. From CAD-to-mold OEM development to private-label programs on our proven geometries, our team carries your design through to retail-ready product.',
    items: [
      {
        q: 'Can I put my own branding on the rackets and paddles?',
        a: 'Absolutely. We offer full private-label ODM programs including custom graphics, colorways, grip logos, edge guard branding, and retail packaging.',
      },
      {
        q: 'Do you help with design and technical specifications?',
        a: 'Yes. For OEM projects, send us your CAD files and tolerances and we build to spec. For ODM, our team helps you configure proven teardrop, round, and diamond geometries — and our mold design and prototyping team can develop new shapes, with physical prototypes in 3-4 weeks.',
      },
      {
        q: 'What packaging options are available?',
        a: 'Retail-ready packaging design and production is included: gift boxes, hang tags, QR code labels, and poly bags — all customizable to your brand.',
      },
      {
        q: 'Can I order a sample before placing a bulk order?',
        a: 'Yes. Sample production is available before you commit to a bulk order. Sample cost is quoted based on the product and customization requirements, and may be credited toward a confirmed bulk order. Physical samples take 3-4 weeks from specification approval, and we send photos and weight specs for your review before shipping.',
      },
    ],
    related: { label: 'Request a sample', href: '/contact' },
  },
  {
    id: 'orders-moq-payment',
    title: 'Orders, MOQ & Payment',
    framing:
      'We keep the barrier to entry low so emerging brands and established distributors alike can test, launch, and scale without heavy upfront commitment.',
    items: [
      {
        q: 'What is your minimum order quantity?',
        a: 'Our standard MOQ is 24 units for padel rackets and 50 units for pickleball paddles. Sample orders of 1-5 units are available at a higher per-unit cost.',
      },
      {
        q: 'What is the lead time for production?',
        a: 'Samples ship within 3-4 weeks of specification approval. Standard bulk production lead time is 30–45 days after sample approval and deposit received. Final timing depends on order quantity, customization requirements, and production schedule.',
      },
      {
        q: 'What are your payment terms?',
        a: 'Standard terms are 30% by T/T to confirm production, with the remaining 70% due before shipment following final inspection. Letter of Credit (L/C) can be discussed for larger or repeat orders.',
      },
      {
        q: 'How do I start an order?',
        a: 'Send us your brief — target player, price point, order volume, and any design direction — through our contact form or at info@sialathletics.com. We respond within 24 hours with next steps.',
      },
    ],
    related: { label: 'Start an inquiry', href: '/contact' },
  },
  {
    id: 'quality-aftersales',
    title: 'Quality Assurance & After-Sales',
    framing:
      'Quality at SIAL Athletics is prevention, not correction: every batch passes a fixed inspection sequence before it ships, and every order is documented so you can stand behind what you sell.',
    items: [
      {
        q: 'How do you ensure quality before shipment?',
        a: 'Every batch passes a fixed inspection sequence: surface roughness and finish consistency checks, deflection and compression testing, weight consistency held to ±0.1oz, edge guard seal and adhesion testing, handle torque strength testing, and visual inspection with zero defect tolerance.',
      },
      {
        q: 'Do I receive quality documentation with my order?',
        a: 'Yes. Every production order ships with a batch-level QC report documenting tested samples, pass rates, and any corrective actions taken during the run.',
      },
      {
        q: 'What happens if there is a quality issue after delivery?',
        a: 'Report any manufacturing defect within 30 days of delivery, with supporting photos, videos, and your production/batch records. We review each claim individually and work with you toward a fair resolution for verified manufacturing defects.',
      },
      {
        q: 'How are rackets and paddles packaged for transit?',
        a: 'Each unit is individually protected in its retail packaging, then packed into export-grade cartons prepared for palletized freight, so product arrives shelf-ready.',
      },
    ],
    related: { label: 'See our full QC process', href: '/quality' },
  },
];
