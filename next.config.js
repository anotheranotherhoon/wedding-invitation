/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['kr'],
    defaultLocale: 'kr',
  },
  images: {
    domains: ['m.bomtvcard.com', 'drive.google.com'],
  },
}