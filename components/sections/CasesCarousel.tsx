'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { caseStudies } from '../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function CasesCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Rezultate concrete
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Fiecare proiect vine cu metrici clare și rezultate măsurabile. 
            Uite câteva dintre succesele noastre recente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.slice(0, 2).map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-ink/60 bg-stone/20 px-3 py-1 rounded-full">
                      {caseStudy.industry}
                    </div>
                    <TrendingUp size={20} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-ink">
                    {caseStudy.title}
                  </CardTitle>
                  <p className="text-ink/70 leading-relaxed">
                    {caseStudy.objective}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-cream rounded-xl">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-ink/60 leading-tight">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-ink/60">Client</div>
                      <div className="font-medium text-ink">{caseStudy.client}</div>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link 
                        href={`/cases/${caseStudy.slug}`}
                        className="flex items-center gap-1 text-accent hover:text-accent/80"
                      >
                        Vezi detalii <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA to see all cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-ink hover:bg-ink/90 text-white">
            <Link href="/cases" className="flex items-center gap-2">
              Vezi toate cazurile <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}