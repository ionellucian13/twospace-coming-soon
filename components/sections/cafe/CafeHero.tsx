'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { Coffee, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function CafeHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-espresso to-ink text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Coffee Space
              <span className="block text-accent">pentru idei mari</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-cream/80 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Locul perfect pentru o pauză de cafea, o întâlnire de business 
              sau un eveniment inspirațional. Atmosfera ideală pentru creativitate și colaborări.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="#menu" className="flex items-center gap-2">
                  <Coffee size={18} />
                  Vezi meniul
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
                <Link href="#events" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Evenimente
                </Link>
              </Button>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm">Str. Creativității 25, București</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Clock size={16} className="text-accent" />
                <span className="text-sm">Lun-Vin: 08:00-22:00 | Sâm-Dum: 09:00-23:00</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22,1,0.36,1] }}
          >
            <div className="bg-cream/5 backdrop-blur rounded-2xl p-8 border border-cream/20">
              <h3 className="text-2xl font-bold font-heading text-cream mb-6">
                Ce ne face speciali
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Coffee,
                    title: 'Cafea artizanală',
                    description: 'Boabe selectate și prăjite local, preparate cu atenție pentru fiecare comandă.'
                  },
                  {
                    icon: MapPin,
                    title: 'Spațiu inspirațional',
                    description: 'Design modern cu zone de lucru, relaxare și întâlniri private.'
                  },
                  {
                    icon: Calendar,
                    title: 'evenimente exclusive',
                    description: 'Workshopuri, networking events și sesiuni creative pentru comunitate.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-2">{feature.title}</h4>
                      <p className="text-cream/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}