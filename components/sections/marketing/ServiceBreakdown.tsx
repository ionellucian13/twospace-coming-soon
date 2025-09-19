'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '../../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Palette, Rocket, Search, TrendingUp, ArrowRight, Check } from 'lucide-react'

const serviceIcons = {
  branding: Palette,
  initiere: Rocket,
  cercetare: Search,
  growth: TrendingUp,
} as const

export default function ServiceBreakdown() {
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
            Servicii complete de marketing
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            De la conceptul inițial până la scalarea afacerii, acoperim toate 
            aspectele pentru a-ți transforma ideea în business de succes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Palette
            
            return (
              <motion.div
                key={service.id}
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
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon size={32} />
                    </div>
                    <CardTitle className="text-2xl font-heading text-ink mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-ink/70 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-ink/80">
                          <Check size={16} className="text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-cream rounded-xl mb-6">
                      <div>
                        <div className="text-sm text-ink/60 mb-1">Timeline</div>
                        <div className="font-bold text-ink">{service.timeline}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-ink/60 mb-1">Investiție</div>
                        <div className="font-bold text-accent text-xl">{service.price}</div>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-ink hover:bg-ink/90 text-white">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Discută proiectul <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-cream rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading text-ink mb-4">
              Cum lucrăm împreună
            </h3>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
              Procesul nostru este transparent, eficient și se concentrează 
              pe rezultate măsurabile în fiecare etapă.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery Call',
                description: 'Discutăm obiectivele tale și analizăm situația actuală',
                duration: '30 min'
              },
              {
                number: '02',
                title: 'Strategie & Propunere',
                description: 'Dezvoltăm strategia personalizată și planul de acțiune',
                duration: '3-5 zile'
              },
              {
                number: '03',
                title: 'Implementare',
                description: 'Executăm planul cu actualizări regulate și transparență totală',
                duration: 'Conform acordului'
              },
              {
                number: '04',
                title: 'Optimizare & Scalare',
                description: 'Analizăm rezultatele și optimizăm pentru creștere susținută',
                duration: 'Ongoing'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + index * 0.1 
                }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h4 className="font-bold text-ink mb-2">{step.title}</h4>
                <p className="text-ink/70 text-sm mb-3 leading-relaxed">{step.description}</p>
                <div className="text-accent text-xs font-medium">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}