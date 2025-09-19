'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { CheckCircle, Clock, Users, TrendingUp } from 'lucide-react'

export default function ProcessSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Rezultate garantate',
      description: 'Ne asum responsabilitatea pentru succesul proiectului tău cu indicatori claري de performanță.',
      stats: '98% rata de succes'
    },
    {
      icon: Clock,
      title: 'Timeline predictibil',
      description: 'Respectăm deadline-urile cu planificare detaliată și comunicare constantă.',
      stats: '24h timp răspuns'
    },
    {
      icon: Users,
      title: 'Echipă dedicată',
      description: 'Vei lucra cu același team pe toată durata proiectului pentru consistență maximă.',
      stats: '5+ ani experiență medie'
    },
    {
      icon: TrendingUp,
      title: 'Creștere susținută',
      description: 'Strategii pe termen lung care se concentrează pe scalabilitate și profitabilitate.',
      stats: '2.8x ROI mediu'
    }
  ]

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
            De ce să alegi Two Space
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Nu oferim doar servicii de marketing - construim parteneriate pe termen lung 
            care transformă afaceri în povești de succes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="text-accent font-bold text-lg">
                    {benefit.stats}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-stone"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading text-ink mb-4">
              Metodologia Two Space
            </h3>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
              Abordarea noastră se bazează pe date, creativitate și execuție impecabilă 
              pentru a livra rezultate constante și măsurabile.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                phase: 'Research & Strategy',
                items: [
                  'Analiză competitivă detaliată',
                  'Cercetare audience & persona',
                  'Audit brand și poziționare',
                  'Strategie multi-canal',
                  'KPI-uri și obiective SMART'
                ]
              },
              {
                phase: 'Creative & Development',
                items: [
                  'Concept creative unic',
                  'Design system consistent',
                  'Conținut optimizat SEO',
                  'User experience premium',
                  'Testing și optimizare A/B'
                ]
              },
              {
                phase: 'Launch & Optimization',
                items: [
                  'Lansare coordonată multi-canal',
                  'Monitorizare în timp real',
                  'Raportare transparentă',
                  'Optimizare continuă',
                  'Scalare strategică'
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.1 
                }}
              >
                <h4 className="text-xl font-bold font-heading text-accent mb-6">
                  {phase.phase}
                </h4>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-ink/80">
                      <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}