'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { packages } from '../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Check, Star, ArrowRight } from 'lucide-react'

export default function PricingTeaser() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Pachete pentru fiecare etapă
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto mb-8">
            Alege pachetul potrivit pentru obiectivele tale de business. 
            Toate cu rezultate garantate și suport complet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} />
                    Cel mai popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 ${
                pkg.popular 
                  ? 'border-accent shadow-soft bg-white' 
                  : 'border-stone hover:shadow-soft bg-white hover:border-accent/30'
              }`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-heading text-ink mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-accent mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-ink/70 leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-ink/80 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-accent hover:bg-accent/90 text-white' 
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-stone max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-ink mb-4">
              Nu știi care pachet ți se potrivește?
            </h3>
            <p className="text-ink/70 mb-6">
              Programează o consultanță gratuită de 30 de minute și să discutăm 
              despre obiectivele tale de business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Consultanță gratuită
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/packages">
                  Compară toate pachetele
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}