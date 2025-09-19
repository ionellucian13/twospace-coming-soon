/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Fix development origin warnings
  experimental: {
    allowedDevOrigins: ['*.replit.dev', 'localhost', '127.0.0.1']
  }
}

module.exports = nextConfig