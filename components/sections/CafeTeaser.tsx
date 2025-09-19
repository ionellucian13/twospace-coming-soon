'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { menuItems, events } from '../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Coffee, Calendar, MapPin, Clock, Star, ArrowRight } from 'lucide-react'

export default function CafeTeaser() {
  const bestsellerItems = menuItems.filter(item => item.bestseller).slice(0, 3)
  const upcomingEvent = events[0]

  return (
    <section className="py-20 bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-cream mb-6">
            Coffee Space
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Locul perfect pentru o pauză de cafea, o întâlnire de business 
            sau un eveniment inspirațional. Atmosfera ideală pentru idei mari.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Menu Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Coffee size={24} className="text-accent" />
              <h3 className="text-2xl font-bold font-heading text-cream">
                Meniul nostru
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {bestsellerItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 + index * 0.1 
                  }}
                  className="flex items-center justify-between p-4 bg-cream/10 rounded-xl border border-cream/20"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-cream">{item.name}</span>
                      <Star size={14} className="text-accent" />
                    </div>
                    <p className="text-cream/70 text-sm">{item.description}</p>
                  </div>
                  <div className="text-accent font-bold">{item.price}</div>
                </motion.div>
              ))}
            </div>

            <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
              <Link href="/cafe" className="flex items-center justify-center gap-2">
                Vezi meniul complet <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>

          {/* Upcoming Event */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={24} className="text-accent" />
              <h3 className="text-2xl font-bold font-heading text-cream">
                Eveniment următor
              </h3>
            </div>

            <Card className="bg-cream/5 border-cream/20 text-cream">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading text-cream">
                  {upcomingEvent.title}
                </CardTitle>
                <p className="text-cream/80 leading-relaxed">
                  {upcomingEvent.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-cream/80">
                    <Calendar size={16} className="text-accent" />
                    <span className="text-sm">
                      {new Date(upcomingEvent.date).toLocaleDateString('ro-RO', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/80">
                    <Clock size={16} className="text-accent" />
                    <span className="text-sm">{upcomingEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/80">
                    <MapPin size={16} className="text-accent" />
                    <span className="text-sm">Two Space, Str. Creativității 25</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-cream/60">Preț</div>
                    <div className="font-bold text-accent text-lg">{upcomingEvent.price}</div>
                  </div>
                  <Button asChild className="bg-cream text-ink hover:bg-cream/90">
                    <Link href="/cafe#events">
                      Rezervă loc
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <div className="mt-8 p-6 bg-cream/5 rounded-xl border border-cream/20">
              <h4 className="font-bold text-cream mb-4">Informații spațiu</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-cream/60 mb-1">Program</div>
                  <div className="text-cream">Lun-Vin: 08:00-22:00</div>
                  <div className="text-cream">Sâm-Dum: 09:00-23:00</div>
                </div>
                <div>
                  <div className="text-cream/60 mb-1">Facilități</div>
                  <div className="text-cream">Wi-Fi gratuit</div>
                  <div className="text-cream">Prize pentru laptop</div>
                  <div className="text-cream">Spațiu relaxare</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}