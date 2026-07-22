const BASE = 'https://www.sialathletics.com';

// Mirrors the visible breadcrumb in PageHero (Home / <crumb>) as schema —
// only used on pages that actually render that breadcrumb in the UI.
export function breadcrumbJsonLd(crumb: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: crumb, item: `${BASE}${path}` },
    ],
  };
}
