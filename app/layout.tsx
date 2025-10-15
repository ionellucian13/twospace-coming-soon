import React from 'react'
import type { Metadata } from 'next'
import { Inter, Geist, Space_Grotesk, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const heading = Geist({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://twospace.ro'),
  title: {
    default: 'Two Space - Where Coffee Meets Strategy | Coming Soon',
    template: '%s | Two Space'
  },
  description: 'Two Space combines professional marketing services with an inspiring coffee space. Join our community where creativity meets strategy. Launching soon - subscribe for updates.',
  keywords: [
    'marketing agency',
    'branding services',
    'coffee shop',
    'creative workspace',
    'marketing strategy',
    'brand development',
    'coffee and marketing',
    'entrepreneur community',
    'business strategy',
    'creative agency',
    'two space',
    'coming soon'
  ],
  authors: [{ name: 'Two Space', url: 'https://twospace.ro' }],
  creator: 'Two Space',
  publisher: 'Two Space',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://twospace.ro',
    siteName: 'Two Space',
    title: 'Two Space - Where Coffee Meets Strategy',
    description: 'Professional marketing services meet inspiring coffee space. Subscribe for launch updates.',
    images: [
      {
        url: '/two-space-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Two Space - Where Coffee Meets Strategy - Professional Marketing & Inspiring Coffee Space',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Space - Where Coffee Meets Strategy',
    description: 'Professional marketing services meet inspiring coffee space. Subscribe for launch updates.',
    images: ['/two-space-og-image.png'],
    creator: '@twospace',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'oAG_lJneIqFMMtFYUm4X9ipXFu8gVdlWmc4bPOv6oO8',
  },
  alternates: {
    canonical: 'https://twospace.ro',
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${heading.variable} ${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link rel="canonical" href="https://twospace.ro" />
        <meta name="theme-color" content="#FF491F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Two Space',
              url: 'https://twospace.ro',
              logo: 'https://twospace.ro/two-space-logo.svg',
              description: 'Professional marketing services combined with an inspiring coffee space',
              foundingDate: '2025',
              sameAs: [
                'https://facebook.com/twospace',
                'https://instagram.com/twospace',
                'https://twitter.com/twospace',
                'https://linkedin.com/company/twospace'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'Romanian']
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Two Space',
              url: 'https://twospace.ro',
              description: 'Where Coffee Meets Strategy - Coming Soon'
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}