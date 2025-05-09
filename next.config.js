const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n, // Añadir la configuración i18n aquí
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'blog.tulumfromskyrealtors.com' },
    ],
  },
};

module.exports = nextConfig;
