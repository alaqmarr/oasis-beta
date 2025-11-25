/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    '@formatjs/intl-relativetimeformat',
    '@formatjs/intl-utils',
    'react-intl',
    'intl-messageformat'
  ],
};

module.exports = nextConfig;
