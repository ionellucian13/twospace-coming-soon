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
      title: 'Ambiente sigure',
      description: 'Spațiu monitorizat cu sisteme de securitate moderne'
    },
    {
      icon: Coffee,
      title: 'Servire la masă',
      description: 'Comandă și primește direct la masa ta, fără să te ridici'
    }
  ]

  const spaces = [
    {
      name: 'Zona de lucru principal',
      capacity: '40 persoane',
      features: ['Mese individuale', 'Scaune ergonomice', 'Priză la fiecare loc', 'Lumină naturală abundentă']
    },
    {
      name: 'Cameră privată business',
      capacity: '8 persoane',
      features: ['TV 65" pentru prezentări', 'Tablă magnetică', 'AC independent', 'Insonorizare completă']
    },
    {
      name: 'Lounge zona',
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
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <facility.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-ink mb-2">{facility.title}</h3>
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
          className="bg-cream rounded-2xl p-8 lg:p-12 mb-16"
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
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-ink">{space.name}</h4>
                  <div className="flex items-center gap-2 text-accent">
                    <Users size={16} />
                    <span className="text-sm font-medium">{space.capacity}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {space.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-ink/80">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
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
          <div className="bg-gradient-to-br from-ink to-espresso text-cream rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={24} className="text-accent" />
              <h3 className="text-2xl font-bold font-heading">Locație</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Adresă</h4>
                <p className="text-cream/80">
                  Strada Creativității 25<br/>
                  Sector 1, București 011011
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transport public</h4>
                <p className="text-cream/80">
                  • Metro: Piața Victoriei (5 min pe jos)<br/>
                  • Autobus: 131, 205 (stația Amzei)<br/>
                  • Tramvai: 11, 25 (stația Romana)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Puncte de reper</h4>
                <p className="text-cream/80">
                  Vis-à-vis de Parcul Herăstrău<br/>
                  Lângă complexul Arc de Triomphe
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white border border-stone rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-accent" />
              <h3 className="text-2xl font-bold font-heading text-ink">Program</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-ink mb-3">Zile lucrătoare</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Luni - Vineri', hours: '08:00 - 22:00', note: 'Program complet' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-ink/80">{item.day}</span>
                      <div className="text-right">
                        <div className="font-medium text-accent">{item.hours}</div>
                        <div className="text-xs text-ink/60">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-stone pt-4">
                <h4 className="font-semibold text-ink mb-3">Weekend</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Sâmbătă - Duminică', hours: '09:00 - 23:00', note: 'Atmosferă relaxată' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-ink/80">{item.day}</span>
                      <div className="text-right">
                        <div className="font-medium text-accent">{item.hours}</div>
                        <div className="text-xs text-ink/60">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-stone pt-4">
                <div className="text-sm text-ink/60">
                  <strong>Sărbători:</strong> Program special anunțat pe social media
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wifi, Coffee, Users, Clock, MapPin, Phone } from 'lucide-react'

const amenities = [
  {
    icon: Wifi,
    title: 'WiFi Premium',
    description: 'Internet de mare viteză pentru muncă eficientă'
  },
  {
    icon: Coffee,
    title: 'Cafea Premium',
    description: 'Boabe selecționate și espresso perfect'
  },
  {
    icon: Users,
    title: 'Spații Collaborative',
    description: 'Zone dedicate pentru întâlniri și teamwork'
  },
  {
    icon: Clock,
    title: 'Program Flexibil',
    description: 'Deschis de luni până duminică'
  }
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresa',
    details: 'Strada Creativității 42, Cluj-Napoca'
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: '+40 123 456 789'
  },
  {
    icon: Clock,
    title: 'Program',
    details: 'Luni - Duminică: 07:00 - 22:00'
  }
]

export default function SpaceInfo() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-ink mb-6">
            Spațiul Nostru
          </h2>
          <p className="text-lg text-ink/70 max-w-3xl mx-auto">
            Un mediu inspirațional unde creativitatea se întâlnește cu productivitatea. 
            Descoperă facilitățile noastre premium.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  {amenity.title}
                </h3>
                <p className="text-ink/70">
                  {amenity.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <h3 className="text-3xl font-bold text-ink mb-8 text-center">
            Informații de Contact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ink mb-1">
                      {info.title}
                    </h4>
                    <p className="text-ink/70">
                      {info.details}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
