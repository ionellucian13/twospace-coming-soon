import { Metadata } from 'next'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CasesHero from '../../components/sections/cases/CasesHero'
import CasesFilter from '../../components/sections/cases/CasesFilter'
import CasesGrid from '../../components/sections/cases/CasesGrid'
import CasesStats from '../../components/sections/cases/CasesStats'

export const metadata: Metadata = {
  title: 'Case Studies | Two Space - Rezultate Concrete și Succese Măsurabile',
  description: 'Descoperă cum am ajutat clienții să își atingă obiectivele: creștere ROI 2.8x, 98% satisfacție clienți, 45+ proiecte finalizate.',
  keywords: 'case studies marketing, rezultate marketing, succese clienți, portofoliu marketing',
}

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <CasesHero />
        <CasesFilter />
        <CasesGrid />
        <CasesStats />
      </main>
      <Footer />
    </>
  )
}