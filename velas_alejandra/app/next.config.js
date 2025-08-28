const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },

  // 👇 Ojo: esto es una PROPIEDAD del objeto, no código suelto
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;