'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroTwoWorlds() {
  const [activeWorld, setActiveWorld] = useState<'marketing' | 'coffee'>('marketing')
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-cream min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* World Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-soft border border-stone">
            <div className="flex">
              <button
                onClick={() => setActiveWorld('marketing')}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                  activeWorld === 'marketing'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                Marketing Hub
              </button>
              <button
                onClick={() => setActiveWorld('coffee')}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                  activeWorld === 'coffee'
                    ? 'bg-espresso text-cream shadow-sm'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                Coffee Space
              </button>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Marketing Side */}
          <motion.div
            key={activeWorld === 'marketing' ? 'marketing-active' : 'marketing-inactive'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: activeWorld === 'marketing' ? 1 : 0.6, 
              x: 0,
              scale: activeWorld === 'marketing' ? 1 : 0.95
            }}
            transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We brew ideas 
              <span className="block text-accent">that sell.</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-ink/70 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Branding, lansare, growth. Pachete clare, rezultate măsurabile pentru 
              afaceri care vor să crească.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a project <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/packages">
                  See packages
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Coffee Side */}
          <motion.div
            key={activeWorld === 'coffee' ? 'coffee-active' : 'coffee-inactive'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: activeWorld === 'coffee' ? 1 : 0.6, 
              x: 0,
              scale: activeWorld === 'coffee' ? 1 : 0.95
            }}
            transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
            className="text-center lg:text-right"
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Coffee for minds 
              <span className="block text-espresso">at work.</span>
            </motion.h2>
            <motion.p 
              className="mt-6 text-xl text-ink/70 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:ml-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Meniu scurt, evenimente inspiraționale, spațiu perfect pentru idei 
              și colaborări creative.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-espresso hover:bg-espresso/90 text-cream">
                <Link href="/cafe" className="flex items-center gap-2">
                  See the menu <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cafe#events">
                  Book an event
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: 'Proiecte finalizate' },
            { number: '98%', label: 'Clienți mulțumiți' },
            { number: '2.5x', label: 'Creștere medie ROI' },
            { number: '24h', label: 'Răspuns la mesaje' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold font-heading text-accent">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-ink/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}