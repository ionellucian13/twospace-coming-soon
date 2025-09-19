import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import { caseStudies } from '../../../lib/data'

interface CaseDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Two Space',
    }
  }

  return {
    title: `${caseStudy.title} | Two Space Case Study`,
    description: caseStudy.objective,
    openGraph: {
      title: `${caseStudy.title} | Two Space Case Study`,
      description: caseStudy.objective,
      type: 'article',
    },
  }
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { slug } = await params
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                {caseStudy.industry}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-ink/70 max-w-2xl mx-auto">
                {caseStudy.objective}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-soft">
                  <div className="text-4xl font-bold text-accent mb-2">{result.value}</div>
                  <div className="text-ink/70">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold font-heading text-ink mb-6">Provocarea</h2>
                <p className="text-ink/70 leading-relaxed mb-6">
                  {caseStudy.challenge || `${caseStudy.client} se confrunta cu provocări în creșterea vizibilității brandului și atragerea unei audiențe noi în piața competitivă din ${caseStudy.industry}.`}
                </p>
                <div className="bg-cream rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-3">Client</h3>
                  <p className="text-ink/80">{caseStudy.client}</p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold font-heading text-ink mb-6">Soluția</h2>
                <p className="text-ink/70 leading-relaxed mb-6">
                  Am dezvoltat o strategie integrată care a combinat repositionarea brandului cu o campanie digitală multi-canal, focusată pe creșterea notorietății și generarea de lead-uri calificate.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">Analiza și strategie</h4>
                      <p className="text-ink/70 text-sm">Audit complet al brandului și concurenței</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">Implementare</h4>
                      <p className="text-ink/70 text-sm">Execuție multi-canal coordonată</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">Optimizare</h4>
                      <p className="text-ink/70 text-sm">Monitorizare și îmbunătățire continuă</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-ink mb-4">Rezultatele</h2>
              <p className="text-ink/70 max-w-2xl mx-auto">
                Campania a depășit toate obiectivele stabilite inițial, generând un impact semnificativ asupra business-ului clientului.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold font-heading text-ink mb-6">Timeline proiect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="font-medium text-ink">Săptămâna 1-2: Research și strategie</div>
                    <div className="text-ink/60 text-sm">Analiza pieței și definirea obiectivelor</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="font-medium text-ink">Săptămâna 3-6: Implementare</div>
                    <div className="text-ink/60 text-sm">Lansarea campaniilor și monitorizarea</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="font-medium text-ink">Săptămâna 7-12: Optimizare</div>
                    <div className="text-ink/60 text-sm">Ajustări continue și maximizarea rezultatelor</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold font-heading text-ink mb-4">
                Gata pentru rezultate similare?
              </h3>
              <p className="text-ink/70 mb-6">
                Să discutăm cum putem să îți creștem și ție business-ul cu strategii personalizate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium transition-colors"
                >
                  Discută proiectul tău
                </a>
                <a
                  href="/cases"
                  className="inline-flex items-center justify-center px-6 py-3 border border-stone text-ink hover:border-accent/50 rounded-xl font-medium transition-colors"
                >
                  Vezi alte case studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}