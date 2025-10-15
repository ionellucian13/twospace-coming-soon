/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Fix development origin warnings - moved to root level
  allowedDevOrigins: [
    '*.replit.dev', 
    '*.kirk.replit.dev',
    'bfc48e82-9399-428d-bfa9-913efdca2ad5-00-264z911ayw8z8.kirk.replit.dev',
    'localhost', 
    '127.0.0.1'
  ]
}

module.exports = nextConfig