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
  title: 'Two Space - Marketing & Coffee Hub',
  description: 'We brew ideas that sell. Branding, lansare, growth. Coffee for minds at work.',
  keywords: ['marketing', 'branding', 'coffee', 'hub', 'two space'],
  authors: [{ name: 'Two Space' }],
  creator: 'Two Space',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://twospace.com',
    siteName: 'Two Space',
    title: 'Two Space - Marketing & Coffee Hub',
    description: 'We brew ideas that sell. Coffee for minds at work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Space - Marketing & Coffee Hub',
    description: 'We brew ideas that sell. Coffee for minds at work.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${heading.variable} ${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}