// Comprehensive SEO configuration with all keywords

export const SEO_CONFIG = {
  siteName: 'Oasis Group',
  siteUrl: 'https://oasisgroup.com',

  // Master keywords list - used on ALL pages
  keywords: [
    // Products
    'speed sensors',
    'vibration sensors',
    'temperature sensors',
    'temperature transmitters',
    'pressure sensors',
    'pressure transmitters',
    'flow meters',
    'level transmitters',
    'limit switches',
    'vacuum contactors',
    'remote monitoring system',
    'condition monitoring',
    'predictive maintenance',

    // Industries
    'automotive sensors',
    'railway instrumentation',
    'oil and gas instrumentation',
    'thermal power sensors',
    'nuclear power instrumentation',
    'hydel power sensors',
    'wind energy sensors',
    'defence sensors',
    'mining instrumentation',
    'steel plant sensors',
    'energy storage monitoring',
    'water treatment sensors',
    'waste water management',

    // General
    'industrial instrumentation',
    'automation solutions',
    'industrial sensors India',
    'precision engineering',
    'process control',
    'safety systems',
    'industrial automation',
    'sensor manufacturer',
    'instrumentation supplier',
    'Oasis Group',
    'Oasis instrumentation',

    // Technical
    '4-20mA transmitters',
    'analog sensors',
    'digital sensors',
    'ATEX certified',
    'IECEx certified',
    'hazardous area instrumentation',
    'explosion proof sensors',
    'EN 50155 compliant',
    'MIL-spec sensors'
  ].join(', '),

  // Default meta
  defaultTitle: 'Oasis Group | Industrial Instrumentation & Automation Solutions',
  defaultDescription:
    'Oasis Group - Leading supplier of industrial instrumentation, sensors, and automation solutions. Speed sensors, vibration sensors, temperature sensors, flow meters, pressure transmitters, level transmitters for automotive, railway, oil & gas, power generation, and manufacturing industries in India.',

  // Social
  ogImage: '/og-image.jpg',
  twitterHandle: '@oasisgroup'
};

// Generate page-specific SEO
export function getPageSEO(page: { title?: string; description?: string; path?: string }) {
  return {
    title: page.title ? `${page.title} | Oasis Group` : SEO_CONFIG.defaultTitle,
    description: page.description || SEO_CONFIG.defaultDescription,
    keywords: SEO_CONFIG.keywords,
    canonical: `${SEO_CONFIG.siteUrl}${page.path || ''}`,
    ogTitle: page.title || SEO_CONFIG.defaultTitle,
    ogDescription: page.description || SEO_CONFIG.defaultDescription
  };
}

// Industry-specific SEO generator
export function getIndustrySEO(industry: { title: string; description: string; id: string; products?: string[] }) {
  const productList = industry.products?.join(', ') || '';

  return {
    title: `${industry.title} Instrumentation & Sensors | Oasis Group`,
    description: `${industry.description} Oasis Group provides ${productList} and more for ${industry.title.toLowerCase()} applications. Leading industrial instrumentation supplier in India.`,
    keywords: SEO_CONFIG.keywords,
    canonical: `${SEO_CONFIG.siteUrl}/industries/${industry.id}`,
    ogTitle: `${industry.title} Solutions | Oasis Group`,
    ogDescription: industry.description
  };
}
