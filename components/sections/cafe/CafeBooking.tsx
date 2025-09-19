'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Calendar, Clock, Users, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'

export default function CafeBooking() {
  const [selectedService, setSelectedService] = useState('table')

  const bookingOptions = [
    {
      id: 'table',
      title: 'Rezervare masă',
      description: 'Rezervă o masă pentru tine sau echipa ta',
      icon: Users,
      options: ['1-4 persoane', 'Până la 3 ore', 'Fără cost suplimentar'],
      action: 'Rezervă masă'
    },
    {
      id: 'meeting',
      title: 'Cameră privată',
      description: 'Sală de ședințe pentru întâlniri importante',
      icon: Calendar,
      options: ['2-8 persoane', '1-4 ore', '50 RON/oră'],
      action: 'Rezervă cameră'
    },
    {
      id: 'event',
      title: 'Eveniment privat',
      description: 'Organizează workshop-uri și prezentări',
      icon: MessageCircle,
      options: ['10-40 persoane', 'Program flexibil', 'Pachet complet'],
      action: 'Discută detalii'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Rezervă-ți locul
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Garantează-ți locul perfect pentru lucru, întâlniri sau evenimente. 
            Rezervarea este simplă și rapidă.
          </p>
        </motion.div>

        {/* Booking Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ y: -8 }}
            >
              <Card className={`h-full transition-all duration-300 cursor-pointer ${
                selectedService === option.id
                  ? 'border-accent shadow-lg bg-white ring-2 ring-accent/20'
                  : 'border-stone hover:shadow-soft bg-white hover:border-accent/30'
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <option.icon size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-ink mb-3">
                    {option.title}
                  </CardTitle>
                  <p className="text-ink/70 leading-relaxed">
                    {option.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {option.options.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-ink/80">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={`w-full ${
                      selectedService === option.id
                        ? 'bg-accent hover:bg-accent/90 text-white'
                        : 'bg-ink hover:bg-ink/90 text-white'
                    }`}
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      {option.action}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-stone"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading text-ink mb-4">
              Rezervă rapid prin
            </h3>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
              Alege modalitatea de contact care îți convine cel mai mult. 
              Răspundem în maximum 2 ore în zilele lucrătoare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Telefon',
                value: '+40 721 234 567',
                description: 'Disponibil Lun-Vin 9:00-20:00',
                href: 'tel:+40721234567',
                action: 'Sună acum'
              },
              {
                icon: Mail,
                title: 'Email',
                value: 'reservari@twospace.ro',
                description: 'Răspuns în max 2 ore',
                href: 'mailto:reservari@twospace.ro',
                action: 'Trimite email'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                value: '+40 721 234 567',
                description: 'Mesagerie instantanee',
                href: 'https://wa.me/40721234567',
                action: 'Deschide chat'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + index * 0.1 
                }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href={contact.href}
                  className="block p-6 bg-cream rounded-xl hover:bg-stone/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <contact.icon size={20} />
                  </div>
                  <h4 className="font-bold text-ink mb-2">{contact.title}</h4>
                  <div className="text-accent font-medium mb-2">{contact.value}</div>
                  <p className="text-ink/60 text-sm mb-4">{contact.description}</p>
                  <div className="text-ink font-medium text-sm group-hover:text-accent transition-colors">
                    {contact.action} →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-ink/5 rounded-xl p-6">
            <h4 className="font-bold text-ink mb-4">Politica de rezervare</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-ink/70">
              <div>
                <strong className="text-accent">Rezervare mesе:</strong><br/>
                Gratuită, fără limită de timp în timpul programului normal
              </div>
              <div>
                <strong className="text-accent">Cameră privată:</strong><br/>
                50 RON/oră, rezervare cu minim 24h înainte
              </div>
              <div>
                <strong className="text-accent">Evenimente:</strong><br/>
                Tarife personalizate în funcție de numărul de participanți și servicii
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { Button } from '../../ui/button'
import { Calendar, Clock, Users, Phone, Mail, MessageSquare } from 'lucide-react'

export default function CafeBooking() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedGuests, setSelectedGuests] = useState('1')

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ]

  const bookingOptions = [
    {
      title: 'Masă individuală',
      description: 'Perfect pentru lucru sau întâlniri 1-on-1',
      capacity: '1-2 persoane',
      features: ['Priză electrică', 'Wi-Fi rapid', 'Lumină naturală'],
      price: 'Gratuit cu consumația'
    },
    {
      title: 'Zona lounge',
      description: 'Spațiu relaxat pentru discuții informale',
      capacity: '3-6 persoane',
      features: ['Canapele confortabile', 'Mese joase', 'Atmosferă liniștită'],
      price: 'Rezervare 50 RON'
    },
    {
      title: 'Cameră privată',
      description: 'Sală închisă pentru întâlniri business',
      capacity: '4-8 persoane',
      features: ['TV pentru prezentări', 'Tablă magnetică', 'Insonorizare'],
      price: 'Rezervare 150 RON'
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Rezervă-ți locul
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Garantează-ți un spațiu de lucru perfect pentru nevoile tale. 
            Rezervarea este rapidă și confirmarea instantanee.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-heading text-ink mb-8">
              Opțiuni de rezervare
            </h3>
            
            <div className="space-y-6">
              {bookingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-stone hover:border-accent/50 hover:shadow-soft transition-all duration-300 bg-white">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-ink mb-2">{option.title}</h4>
                          <p className="text-ink/70 mb-3">{option.description}</p>
                          <div className="flex items-center gap-2 text-accent mb-3">
                            <Users size={16} />
                            <span className="text-sm font-medium">{option.capacity}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-accent">{option.price}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-ink mb-2">Include:</h5>
                        <ul className="space-y-1">
                          {option.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-ink/80">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                        Rezervă acum
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white border-stone shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-heading text-ink mb-6">
                  Formular de rezervare
                </h3>
                
                <form className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Selectează data
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Selectează ora
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Alege ora...</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Numărul de persoane
                    </label>
                    <select
                      value={selectedGuests}
                      onChange={(e) => setSelectedGuests(e.target.value)}
                      className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors"
                    >
                      {[1,2,3,4,5,6,7,8].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persoană' : 'persoane'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">
                        Nume complet
                      </label>
                      <input
                        type="text"
                        placeholder="Ion Popescu"
                        className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">
                        <Phone className="inline w-4 h-4 mr-2" />
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="+40 123 456 789"
                        className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="ion@exemplu.ro"
                      className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Cerințe speciale (opțional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mențiuni speciale pentru rezervare..."
                      className="w-full px-4 py-3 border border-stone rounded-xl focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white py-4 text-lg font-semibold"
                  >
                    Confirmă rezervarea
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-stone">
                  <p className="text-sm text-ink/60 text-center">
                    Vei primi confirmarea rezervării pe email în maxim 30 de minute. 
                    Pentru întrebări, ne poți contacta la{' '}
                    <a href="tel:+40123456789" className="text-accent hover:underline">
                      +40 123 456 789
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
