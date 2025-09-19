import { Metadata } from 'next'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import MarketingHero from '../../components/sections/marketing/MarketingHero'
import ServiceBreakdown from '../../components/sections/marketing/ServiceBreakdown'
import ProcessSection from '../../components/sections/marketing/ProcessSection'
import MarketingCTA from '../../components/sections/marketing/MarketingCTA'

export const metadata: Metadata = {
  title: 'Marketing Services | Two Space - Strategii Complete de Branding și Growth',
  description: 'Servicii complete de marketing: branding, lansare, cercetare, growth. Strategii personalizate pentru afaceri care vor să crească sustenabil.',
  keywords: 'marketing digital, branding, lansare produs, growth marketing, consultanță marketing',
}

export default function MarketingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <MarketingHero />
        <ServiceBreakdown />
        <ProcessSection />
        <MarketingCTA />
      </main>
      <Footer />
    </>
  )
}