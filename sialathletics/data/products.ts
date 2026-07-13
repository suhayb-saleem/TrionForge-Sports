export interface Product {
  id: string;
  name: string;
  category: 'pickleball' | 'padel' | 'accessories';
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  badge?: string; // e.g. "NEW", "BESTSELLER", "PRO"
  imagePath: string; // relative to /public
  images?: string[]; // array of images for slider preview
  price?: string; // e.g. "From $89" — optional for B2B context
  moq?: string;  // minimum order quantity for wholesale
}

export const products: Product[] = [
  // PICKLEBALL PADDLES
  {
    id: 'sa-alpha-16mm',
    name: 'SA Alpha Carbon 16mm',
    category: 'pickleball',
    tagline: 'Power meets precision.',
    description: 'Our flagship pickleball paddle engineered with T700 carbon fiber face for maximum spin and control. 16mm polypropylene honeycomb core delivers the perfect balance of power and feel.',
    specs: [
      { label: 'Core Thickness', value: '16mm' },
      { label: 'Face Material', value: 'T700 Carbon Fiber' },
      { label: 'Weight', value: '7.8 - 8.2 oz' },
      { label: 'Grip Length', value: '5.25"' },
      { label: 'Grip Circumference', value: '4.25"' },
      { label: 'Surface', value: 'Textured Carbon' },
    ],
    badge: 'BESTSELLER',
    imagePath: '/images/products/sa-alpha-16mm.jpg',
    images: [
      '/images/products/sa-alpha-16mm.jpg',
    ],
    moq: '50 units',
  },
  {
    id: 'sa-pro-14mm',
    name: 'SA Pro Series 14mm',
    category: 'pickleball',
    tagline: 'Built for the competitive player.',
    description: 'Mid-weight performance paddle with fiberglass face and 14mm polypropylene core. Designed for players who want touch without sacrificing pop.',
    specs: [
      { label: 'Core Thickness', value: '14mm' },
      { label: 'Face Material', value: 'Fiberglass' },
      { label: 'Weight', value: '7.5 - 7.9 oz' },
      { label: 'Grip Length', value: '5"' },
      { label: 'Grip Circumference', value: '4.25"' },
      { label: 'Surface', value: 'Textured Fiberglass' },
    ],
    badge: 'PRO',
    imagePath: '/images/products/sa-pro-14mm.jpg',
    images: [
      '/images/products/sa-pro-14mm.jpg',
    ],
    moq: '50 units',
  },
  {
    id: 'sa-strike-13mm',
    name: 'SA Strike 13mm',
    category: 'pickleball',
    tagline: 'Speed. Control. Consistency.',
    description: 'Entry-to-intermediate paddle with carbon face and 13mm core. The go-to option for brand private label programs targeting recreational players.',
    specs: [
      { label: 'Core Thickness', value: '13mm' },
      { label: 'Face Material', value: 'Carbon Composite' },
      { label: 'Weight', value: '7.3 - 7.7 oz' },
      { label: 'Grip Length', value: '5"' },
      { label: 'Grip Circumference', value: '4.25"' },
      { label: 'Surface', value: 'Textured Composite' },
    ],
    imagePath: '/images/products/sa-strike-13mm.jpg',
    images: [
      '/images/products/sa-strike-13mm.jpg',
    ],
    moq: '100 units',
  },
  {
    id: 'sa-apex-elongated',
    name: 'SA Apex Elongated',
    category: 'pickleball',
    tagline: 'Reach further. Hit harder.',
    description: 'Elongated shape with extended reach and leverage. T700 carbon face, 16mm core. Favored by singles players and power hitters.',
    specs: [
      { label: 'Core Thickness', value: '16mm' },
      { label: 'Face Material', value: 'T700 Carbon Fiber' },
      { label: 'Weight', value: '8.0 - 8.4 oz' },
      { label: 'Grip Length', value: '5.5"' },
      { label: 'Shape', value: 'Elongated' },
      { label: 'Surface', value: 'Raw Carbon' },
    ],
    badge: 'NEW',
    imagePath: '/images/products/sa-apex-elongated.png',
    images: [
      '/images/products/sa-apex-elongated.png',
      '/images/products/sa-apex-elongated-actual-1.jpg',
      '/images/products/sa-apex-elongated-actual-2.jpg',
      '/images/products/sa-apex-elongated-actual-3.jpg',
      '/images/products/sa-apex-elongated-actual-4.jpg',
      '/images/products/sa-apex-elongated-actual-5.jpg'
    ],
    moq: '50 units',
  },

  // PADEL RACKETS
  {
    id: 'sa-forge-padel-round',
    name: 'SA Forge Round',
    category: 'padel',
    tagline: 'Classic control. Modern build.',
    description: 'Round-shaped padel racket with EVA foam core and carbon fiber frame. Designed for consistent play and superior touch at the net.',
    specs: [
      { label: 'Shape', value: 'Round' },
      { label: 'Frame', value: 'Carbon Fiber' },
      { label: 'Core', value: 'EVA Foam' },
      { label: 'Weight', value: '360-370g' },
      { label: 'Balance', value: 'Low (Control)' },
      { label: 'Level', value: 'All levels' },
    ],
    badge: 'BESTSELLER',
    imagePath: '/images/products/sa-forge-padel-round-1.jpg',
    images: [
      '/images/products/sa-forge-padel-round-1.jpg',
      '/images/products/sa-forge-padel-round-actual-1.jpg',
      '/images/products/sa-forge-padel-round-actual-2.jpg',
      '/images/products/sa-forge-padel-round-actual-3.jpg',
      '/images/products/sa-forge-padel-round-actual-4.jpg'
    ],
    moq: '24 units',
  },
  {
    id: 'sa-forge-padel-diamond',
    name: 'SA Forge Diamond',
    category: 'padel',
    tagline: 'Power from the top.',
    description: 'Diamond-shaped padel racket built for aggressive players who want maximum power. Carbon fiber surface with HR3 rubber core.',
    specs: [
      { label: 'Shape', value: 'Diamond' },
      { label: 'Frame', value: 'Carbon Fiber' },
      { label: 'Core', value: 'HR3 Rubber' },
      { label: 'Weight', value: '375-385g' },
      { label: 'Balance', value: 'High (Power)' },
      { label: 'Level', value: 'Advanced' },
    ],
    badge: 'PRO',
    imagePath: '/images/products/sa-forge-padel-diamond-1.jpg',
    images: [
      '/images/products/sa-forge-padel-diamond-1.jpg',
      '/images/products/sa-forge-padel-diamond-actual-1.jpg',
      '/images/products/sa-forge-padel-diamond-actual-2.jpg',
      '/images/products/sa-forge-padel-diamond-actual-3.jpg',
      '/images/products/sa-forge-padel-diamond-actual-4.jpg'
    ],
    moq: '24 units',
  },
  {
    id: 'sa-forge-padel-teardrop',
    name: 'SA Forge Teardrop',
    category: 'padel',
    tagline: 'The balance seekers choice.',
    description: 'Teardrop shape bridging control and power. Fiberglass face with EVA core. Perfect for intermediate to advanced players.',
    specs: [
      { label: 'Shape', value: 'Teardrop' },
      { label: 'Frame', value: 'Aluminum / Carbon Hybrid' },
      { label: 'Core', value: 'EVA Foam' },
      { label: 'Weight', value: '365-375g' },
      { label: 'Balance', value: 'Medium' },
      { label: 'Level', value: 'Intermediate+' },
    ],
    imagePath: '/images/products/sa-forge-padel-teardrop-1.jpg',
    images: [
      '/images/products/sa-forge-padel-teardrop-1.jpg',
      '/images/products/sa-forge-padel-teardrop-actual-1.jpg',
      '/images/products/sa-forge-padel-teardrop-actual-2.jpg',
      '/images/products/sa-forge-padel-teardrop-actual-3.jpg',
      '/images/products/sa-forge-padel-teardrop-actual-4.jpg'
    ],
    moq: '24 units',
  },
];
