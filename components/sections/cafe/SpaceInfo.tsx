'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { Wifi, Zap, Car, Coffee, Users, Shield, Clock, MapPin } from 'lucide-react'

export default function SpaceInfo() {
  const facilities = [
    {
      icon: Wifi,
      title: 'Wi-Fi Super Rapid',
      description: 'Internet de mare viteză gratuit pentru toți clienții'
    },
    {
      icon: Zap,
      title: 'Prize pentru dispozitive',
      description: 'Prize electrice la fiecare masă pentru laptop și telefon'
    },
    {
      icon: Coffee,
      title: 'Servire la masă',
      description: 'Comandă și primește direct la masa ta, fără să te ridici'
    },
    {
      icon: Car,
      title: 'Parcare gratuită',
      description: 'Locuri de parcare reservate clienților în spatele clădirii'
    },
    {
      icon: Users,
      title: 'Zone private',
      description: 'Săli private pentru întâlniri și apeluri importante'
    },
    {
      icon: Shield,
      title: 'Ambient sigur',
      description: 'Spațiu monitorizat cu sisteme de securitate moderne'
    }
  ]

  const spaces = [
    {
      name: 'Zona de lucru principală',
      capacity: '40 persoane',
      features: ['Mese individuale ergonomice', 'Scaune confortabile', 'Priză la fiecare loc', 'Lumină naturală abundentă']
    },
    {
      name: 'Cameră privată business',
      capacity: '8 persoane',
      features: ['TV 65" pentru prezentări', 'Tablă magnetică', 'AC independent', 'Insonorizare completă']
    },
    {
      name: 'Lounge zona relaxare',
      capacity: '20 persoane',
      features: ['Canapele confortabile', 'Mese joase', 'Atmosferă relaxată', 'Perfect pentru networking']
    },
    {
      name: 'Terasă exterioară',
      capacity: '16 persoane',
      features: ['Aer curat', 'Vedere la grădină', 'Umbrar naturale', 'Disponibilă aprilie-octombrie']
    }
  ]

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
            Spațiul nostru
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Amenajat special pentru productivitate și confort. Fie că lucrezi singur 
            sau cu echipa, găsești locul perfect pentru fiecare activitate.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.22,1,0.36,1]
              }}
            >
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <facility.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-ink mb-2 text-lg">{facility.title}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Space Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-cream to-stone/10 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading text-ink mb-4">
              Zone și facilități
            </h3>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
              Patru zone distincte, fiecare optimizată pentru un anumit tip de activitate 
              și atmosferă de lucru.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {spaces.map((space, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + index * 0.1 
                }}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-ink text-lg">{space.name}</h4>
                  <div className="flex items-center gap-2 text-accent bg-accent/10 px-3 py-1 rounded-full">
                    <Users size={16} />
                    <span className="text-sm font-medium">{space.capacity}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {space.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-ink/80">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Location */}
          <div className="bg-gradient-to-br from-ink to-espresso text-cream rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Locație</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-cream">Adresă</h4>
                <p className="text-cream/80 leading-relaxed">
                  Strada Creativității 25<br/>
                  Sector 1, București 011011
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-cream">Transport public</h4>
                <p className="text-cream/80 text-sm leading-relaxed">
                  • Metro: Piața Victoriei (5 min pe jos)<br/>
                  • Autobus: 131, 205 (stația Amzei)<br/>
                  • Tramvai: 11, 25 (stația Romana)
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white border border-stone rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-ink">Program</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-ink mb-3">Zile lucrătoare</h4>
                <div className="flex justify-between items-center bg-cream rounded-xl p-4">
                  <span className="text-ink/80 font-medium">Luni - Vineri</span>
                  <div className="text-right">
                    <div className="font-bold text-accent text-lg">08:00 - 22:00</div>
                    <div className="text-xs text-ink/60">Program complet</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-3">Weekend</h4>
                <div className="flex justify-between items-center bg-cream rounded-xl p-4">
                  <span className="text-ink/80 font-medium">Sâmbătă - Duminică</span>
                  <div className="text-right">
                    <div className="font-bold text-accent text-lg">09:00 - 23:00</div>
                    <div className="text-xs text-ink/60">Atmosferă relaxată</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-ink/60 bg-stone/20 rounded-lg p-3">
                <strong>Sărbători:</strong> Program special anunțat pe social media
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}