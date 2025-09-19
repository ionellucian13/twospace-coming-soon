'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react'

export default function MarketingHero() {
  const highlights = [
    { icon: TrendingUp, text: '2.8x ROI mediu', color: 'text-accent' },
    { icon: Users, text: '98% clienți mulțumiți', color: 'text-accent' },
    { icon: Target, text: 'Rezultate garantate', color: 'text-accent' },
    { icon: Zap, text: 'Livrare în 24h', color: 'text-accent' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Marketing care 
              <span className="block text-accent">aduce rezultate.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-ink/70 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              De la branding la growth, oferim strategii complete și măsurabile 
              care transformă afaceri în branduri de succes.
            </motion.p>

            {/* Highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon size={20} className={item.color} />
                  <span className="text-sm font-medium text-ink">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Consultanță gratuită <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/packages">
                  Vezi pachete
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22,1,0.36,1] }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-stone">
              <h3 className="text-xl font-bold font-heading text-ink mb-6">
                Procesul nostru complet
              </h3>
              
              {[
                { step: '01', title: 'Analiză & Strategie', desc: 'Cercetăm piața și definim strategia' },
                { step: '02', title: 'Implementare', desc: 'Executăm planul cu precizie' },
                { step: '03', title: 'Optimizare', desc: 'Îmbunătățim continuu rezultatele' },
                { step: '04', title: 'Scalare', desc: 'Extindem succesul pe termen lung' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 mb-6 last:mb-0"
                >
                  <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">{item.title}</h4>
                    <p className="text-ink/60 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}