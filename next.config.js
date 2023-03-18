/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
    return [
      // `/kr` 경로를 처리하는 설정을 추가합니다.
      {
        source: '/kr/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['en', 'ko', 'kr'],
    defaultLocale: 'kr',
  },
  localeSubpaths: {
    en: 'en',
    ko: 'kr',
  },
  images: {
    domains: ['m.bomtvcard.com', 'drive.google.com'],
  },
}