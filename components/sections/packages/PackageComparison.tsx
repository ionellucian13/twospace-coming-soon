'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { packages } from '../../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Check, Star, ArrowRight } from 'lucide-react'

export default function PackageComparison() {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Alege pachetul potrivit
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Toate pachetele includ strategii personalizate, execuție profesională 
            și rezultate măsurabile. Diferă doar în complexitate și amploare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ y: -8 }}
              className={`relative ${pkg.popular ? 'scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                    <Star size={14} />
                    Cel mai popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 ${
                pkg.popular 
                  ? 'border-accent shadow-xl bg-white ring-2 ring-accent/20' 
                  : 'border-stone hover:shadow-soft bg-white hover:border-accent/30'
              }`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-heading text-ink mb-4">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-accent mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-ink/60 text-sm">
                      {pkg.id === 'start' ? 'pachet complet' : 
                       pkg.id === 'growth' ? 'per lună, 3 luni minim' : 
                       'per lună, 6 luni minim'}
                    </div>
                  </div>
                  <p className="text-ink/70 leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-ink/80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Package specifics */}
                  <div className="bg-cream/50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-ink mb-3">Ce primești:</h4>
                    <div className="space-y-2 text-sm">
                      {pkg.id === 'start' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Timeline:</span>
                            <span className="font-medium text-ink">4-6 săptămâni</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Revizii:</span>
                            <span className="font-medium text-ink">3 runde incluse</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Suport:</span>
                            <span className="font-medium text-ink">30 zile post-lansare</span>
                          </div>
                        </>
                      )}
                      {pkg.id === 'growth' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Întâlniri:</span>
                            <span className="font-medium text-ink">Săptămânale</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Rapoarte:</span>
                            <span className="font-medium text-ink">Lunare detaliate</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Optimizări:</span>
                            <span className="font-medium text-ink">Continue A/B testing</span>
                          </div>
                        </>
                      )}
                      {pkg.id === 'premium' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Dedicat:</span>
                            <span className="font-medium text-ink">Account manager</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Răspuns:</span>
                            <span className="font-medium text-ink">4 ore maxim</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/70">Acces:</span>
                            <span className="font-medium text-ink">Tools & analytics</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-accent hover:bg-accent/90 text-white shadow-lg' 
                        : 'bg-ink hover:bg-ink/90 text-white'
                    }`}
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Alege {pkg.name}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-cream rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold font-heading text-ink mb-4">
            Nu găsești ce căuti?
          </h3>
          <p className="text-ink/70 mb-6 max-w-2xl mx-auto">
            Fiecare business este unic. Dacă pachetele standard nu se potrivesc perfect 
            nevoilor tale, să discutăm despre o soluție personalizată.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact">
              Discută opțiuni personalizate
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}