# SIAL Athletics — B2C/B2B Sports Brand Platform

This is a premium, high-performance Next.js 15 web application built for **SIAL Athletics**, a sports equipment manufacturer based in Sialkot, Pakistan that imports pro-grade pickleball paddles and padel rackets to the US market.

The styling is aggressive, clean, and modern, targeting US brands, wholesalers, and consumers.

## Tech Stack
- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v4 (inline theme definitions, standard custom properties)
- **Animations**: `motion` (formerly Framer Motion, imported from `motion/react`)
- **Scrolling**: `lenis` for smooth, inertial scrolling transitions
- **Icons**: `lucide-react` line icons
- **Fonts**: Google Fonts (Bebas Neue for displays/headings, Inter for UI copy/labels)

## Directory Structure
- `app/` - App router structure (layouts, pages, globals.css)
- `components/` - Layout systems, UI primitives, and page sections
- `data/` - Static JSON array containing the 7 core pickleball/padel specs products
- `lib/` - Animations variants and Lenis context providers
- `public/` - Media assets (logo, placeholder product photography)

## Getting Started

First, install dependencies:
```bash
npm install
```

Second, run the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Next Steps for Suhayb (Manual Requirements)

Please follow these steps before deploying to production:

1. **Brand Logo**:
   - The logo placeholder is currently generated. Replace it with your official vector logo files at `/public/images/logo.png`.
2. **Product Photography**:
   - Once your team has professional product shoots, drop the files into `/public/images/products/` matching the exact names defined in `data/products.ts`:
     - `sa-alpha-16mm.jpg`
     - `sa-pro-14mm.jpg`
     - `sa-strike-13mm.jpg`
     - `sa-apex-elongated.jpg`
     - `sa-forge-padel-round.jpg`
     - `sa-forge-padel-diamond.jpg`
     - `sa-forge-padel-teardrop.jpg`
3. **Contact Information**:
   - Modify the placeholder contacts (phone number and emails) inside `components/layout/Footer.tsx` and `components/landing/Contact.tsx` to match your actual sales team contacts.
4. **Deploy to Vercel**:
   - Push to GitHub, import the repository to Vercel, and click deploy. No environment variables or databases are needed for these static B2B capture pages.
