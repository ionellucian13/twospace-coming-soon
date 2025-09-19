'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { caseStudies } from '../../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { ArrowRight, TrendingUp, ExternalLink } from 'lucide-react'

export default function CasesGrid() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
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
                  <CardTitle className="text-xl font-heading text-ink mb-3">
                    {caseStudy.title}
                  </CardTitle>
                  <p className="text-ink/70 leading-relaxed">
                    {caseStudy.objective}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Key Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-ink mb-2">Provocarea:</h4>
                    <p className="text-ink/60 text-sm leading-relaxed">
                      {caseStudy.challenge || "Creșterea vizibilității brandului și atragerea unei audiențe noi într-un timp scurt."}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-cream rounded-xl">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-xl font-bold text-accent mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-ink/60 leading-tight">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies/Methods */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Social Media',
                        'SEO',
                        'Content Strategy',
                        'Paid Ads'
                      ].slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone">
                    <div>
                      <div className="text-sm text-ink/60">Client</div>
                      <div className="font-medium text-ink">{caseStudy.client}</div>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link 
                        href={`/cases/${caseStudy.slug}`}
                        className="flex items-center gap-1 text-accent hover:text-accent/80"
                      >
                        Detalii <ExternalLink size={14} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="border-stone text-ink hover:border-accent/50">
            Încarcă mai multe proiecte
          </Button>
        </motion.div>
      </div>
    </section>
  )
}