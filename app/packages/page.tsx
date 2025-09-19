import { Metadata } from 'next'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import PackagesHero from '../../components/sections/packages/PackagesHero'
import PackageComparison from '../../components/sections/packages/PackageComparison'
import CustomPackages from '../../components/sections/packages/CustomPackages'
import PackagesFAQ from '../../components/sections/packages/PackagesFAQ'

export const metadata: Metadata = {
  title: 'Pachete Marketing | Two Space - Soluții Complete pentru Orice Buget',
  description: 'Pachete complete de marketing: Start, Growth, Premium. Servicii personalizate cu rezultate garantate și suport complet.',
  keywords: 'pachete marketing, prețuri marketing, servicii complete, consultanță business',
}

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <PackagesHero />
        <PackageComparison />
        <CustomPackages />
        <PackagesFAQ />
      </main>
      <Footer />
    </>
  )
}