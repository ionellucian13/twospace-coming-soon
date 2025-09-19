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