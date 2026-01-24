import { GetServerSideProps } from 'next';
import { INDUSTRIES } from '../data/industries';

const SITE_URL = 'https://oasisgroup.com';

function SitemapXML() {
    // This component won't render - we return XML in getServerSideProps
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // Static pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/industries'
    ];

    // Dynamic industry pages
    const industryPages = INDUSTRIES.map(industry => `/industries/${industry.id}`);

    const allPages = [...staticPages, ...industryPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/industries/') ? '0.8' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default SitemapXML;
