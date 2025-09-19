'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

export default function PackagesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Pachete complete 
            <span className="block text-accent">pentru fiecare etapă</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-ink/70 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            De la startup-uri în faza de idee până la companii care vor să scaleze, 
            avem soluții personalizate pentru fiecare obiectiv de business.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Consultanță gratuită <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#comparison">
                Compară pachete
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Star,
              title: 'Rezultate garantate',
              description: '98% rata de succes cu KPI-uri clare și măsurabile'
            },
            {
              icon: Shield,
              title: 'Fără riscuri',
              description: 'Money-back guarantee dacă nu atingem obiectivele stabilite'
            },
            {
              icon: Zap,
              title: 'Start rapid',
              description: 'Începem lucrul în 48h de la semnarea contractului'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}