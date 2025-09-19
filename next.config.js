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