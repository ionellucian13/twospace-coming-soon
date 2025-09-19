import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroTwoWorlds from '../components/sections/HeroTwoWorlds'
import ServicesGrid from '../components/sections/ServicesGrid'
import PricingTeaser from '../components/sections/PricingTeaser'
import CasesCarousel from '../components/sections/CasesCarousel'
import CafeTeaser from '../components/sections/CafeTeaser'
import TestimonialsSection from '../components/sections/TestimonialsSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <HeroTwoWorlds />
        <ServicesGrid />
        <PricingTeaser />
        <CasesCarousel />
        <CafeTeaser />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}