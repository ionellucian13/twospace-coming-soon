'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Palette, Rocket, Search, TrendingUp, ArrowRight } from 'lucide-react'

const serviceIcons = {
  branding: Palette,
  initiere: Rocket,
  cercetare: Search,
  growth: TrendingUp,
} as const

export default function ServicesGrid() {
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
            Serviciile noastre
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            De la ideea inițială până la rezultate măsurabile, 
            te susținem în fiecare etapă a dezvoltării brandului tău.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group"
              >
                <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-heading text-ink">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-ink/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-ink/60">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-stone">
                      <div>
                        <div className="text-sm text-ink/60">Timeline</div>
                        <div className="font-medium text-ink">{service.timeline}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-ink/60">Preț</div>
                        <div className="font-medium text-accent">{service.price}</div>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 flex items-center text-accent hover:text-accent/80 font-medium text-sm group"
                    >
                      Află mai mult
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}