'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { MapPin, Car, Train, Bus, Navigation } from 'lucide-react'

export default function LocationMap() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold font-heading text-ink mb-4">
            Vino să ne cunoaștem
          </h2>
          <p className="text-ink/70">
            Coffee Space Two Space - locul perfect pentru întâlniri creative
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-stone bg-gradient-to-br from-ink to-espresso text-cream mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={24} className="text-accent" />
                <h3 className="text-xl font-bold font-heading">
                  Two Space Coffee
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Adresă completă</h4>
                  <p className="text-cream/90">
                    Strada Creativității 25<br/>
                    Sector 1, București 011011<br/>
                    România
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Puncte de reper</h4>
                  <ul className="text-cream/90 text-sm space-y-1">
                    <li>• Vis-à-vis de intrarea în Parcul Herăstrău</li>
                    <li>• La 300m de complexul Arc de Triomphe</li>
                    <li>• Lângă restaurantul Pescăruș</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transportation Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-stone bg-white mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-heading text-ink mb-6">
                Cum ajungi la noi
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Train,
                    title: 'Metro',
                    options: [
                      'Piața Victoriei (Linia M1, M2) - 7 min pe jos',
                      'Aviatorilor (Linia M2) - 10 min pe jos'
                    ]
                  },
                  {
                    icon: Bus,
                    title: 'Autobus & Tramvai',
                    options: [
                      'Autobus 131, 205 - stația Amzei',
                      'Tramvai 11, 25 - stația Romana',
                      'Autobus 331 - stația Herăstrău'
                    ]
                  },
                  {
                    icon: Car,
                    title: 'Cu mașina',
                    options: [
                      'Parcare gratuită în spatele clădirii',
                      '15 locuri rezervate clienților',
                      'Acces ușor din Șoseaua Kiseleff'
                    ]
                  },
                  {
                    icon: Navigation,
                    title: 'Aplicații navigație',
                    options: [
                      'Caută "Two Space Coffee București"',
                      'Sau coordonate: 44.4698° N, 26.0751° E',
                      'Intrarea principală pe Str. Creativității'
                    ]
                  }
                ].map((transport, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                        <transport.icon size={20} className="text-accent" />
                      </div>
                      <h4 className="font-semibold text-ink">{transport.title}</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-ink/70">
                      {transport.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-stone bg-cream overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-stone/20 to-accent/20 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin size={48} className="text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-ink mb-2">Hartă interactivă</h4>
                  <p className="text-ink/70 text-sm max-w-md">
                    Pentru o hartă detaliată și direcții de navigație în timp real, 
                    deschide aplicația ta preferată de hărți și caută "Two Space Coffee".
                  </p>
                </div>
                
                {/* Mock map elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 right-12 w-12 h-12 bg-ink rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-ink">Strada Creativității 25</h5>
                    <p className="text-ink/60 text-sm">București, România</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=44.4698,26.0751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-medium text-sm flex items-center gap-1"
                  >
                    Deschide în Google Maps
                    <Navigation size={14} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}