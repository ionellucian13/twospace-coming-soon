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
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-espresso rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-20 z-10">
        {/* World Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="glass-card rounded-2xl p-3 shadow-hover backdrop-blur-lg">
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setActiveWorld('marketing')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeWorld === 'marketing'
                    ? 'gradient-accent text-white shadow-lg transform scale-105'
                    : 'text-ink/70 hover:text-ink hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  🚀 Marketing Hub
                </span>
              </motion.button>
              <motion.button
                onClick={() => setActiveWorld('coffee')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeWorld === 'coffee'
                    ? 'bg-espresso text-cream shadow-lg transform scale-105'
                    : 'text-ink/70 hover:text-ink hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  ☕ Coffee Space
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            key={activeWorld}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
          >
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold font-heading text-ink leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {activeWorld === 'marketing' ? (
                <>
                  We brew{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                      ideas
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/80 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 0.6 }}
                    />
                  </span>
                  <br />
                  <span className="text-5xl lg:text-6xl">that sell.</span>
                </>
              ) : (
                <>
                  Coffee for{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-espresso to-espresso/80 bg-clip-text text-transparent">
                      minds
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-espresso to-espresso/80 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 0.6 }}
                    />
                  </span>
                  <br />
                  <span className="text-5xl lg:text-6xl">at work.</span>
                </>
              )}
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-ink/70 leading-relaxed max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {activeWorld === 'marketing' 
                ? 'Branduri care vând prin emoție. Lansări care explodează prin strategie. Creștere măsurabilă prin creativitate autentică.'
                : 'Cafea de specialitate în spațiul perfect pentru muncă creativă. Unde ideile se nasc din conversații autentice și energie pozitivă.'
              }
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {activeWorld === 'marketing' ? (
                <>
                  <Link href="/packages">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                      <Button className="btn-primary text-lg px-10 py-5 rounded-2xl shadow-hover">
                        🚀 Vezi pachete <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/cases">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                      <Button className="btn-secondary text-lg px-10 py-5 rounded-2xl">
                        📈 Cazuri de succes
                      </Button>
                    </motion.div>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/cafe">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                      <Button className="bg-espresso hover:bg-espresso/90 text-cream text-lg px-10 py-5 rounded-2xl shadow-hover">
                        ☕ Vezi meniul <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/contact">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                      <Button className="btn-secondary text-lg px-10 py-5 rounded-2xl border-2 border-espresso/30 hover:border-espresso text-espresso">
                        🪑 Rezervă masa
                      </Button>
                    </motion.div>
                  </Link>
                </>
              )}
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