'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { Phone, Mail, MapPin, MessageCircle, Clock, Calendar } from 'lucide-react'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+40 721 234 567',
      description: 'Lun-Vin 9:00-20:00',
      href: 'tel:+40721234567',
      color: 'text-accent'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@twospace.ro',
      description: 'Răspundem în max 24h',
      href: 'mailto:hello@twospace.ro',
      color: 'text-accent'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+40 721 234 567',
      description: 'Chat în timp real',
      href: 'https://wa.me/40721234567',
      color: 'text-accent'
    }
  ]

  return (
    <section className="py-12 bg-cream">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-ink mb-4">
            Contactează-ne direct
          </h2>
          <p className="text-ink/70">
            Alege modalitatea care îți convine cel mai mult
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                <CardContent className="p-6">
                  <Link 
                    href={method.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <method.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-ink group-hover:text-accent transition-colors">
                        {method.title}
                      </h3>
                      <div className={`${method.color} font-medium mb-1`}>
                        {method.value}
                      </div>
                      <p className="text-ink/60 text-sm">{method.description}</p>
                    </div>
                    <div className="text-ink/40 group-hover:text-accent transition-colors">
                      →
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-stone bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={24} className="text-accent" />
                <h3 className="text-xl font-bold font-heading text-ink">
                  Program de lucru
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-ink mb-3">Online & Telefon</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-ink/70">Luni - Vineri</span>
                      <span className="text-accent font-medium">09:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/70">Sâmbătă</span>
                      <span className="text-accent font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/70">Duminică</span>
                      <span className="text-ink/60">Închis</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-ink mb-3">Coffee Space</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-ink/70">Luni - Vineri</span>
                      <span className="text-accent font-medium">08:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/70">Sâm - Dum</span>
                      <span className="text-accent font-medium">09:00 - 23:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-stone">
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-accent mt-1" />
                  <div>
                    <h5 className="font-semibold text-ink mb-2">Întâlniri programate</h5>
                    <p className="text-ink/70 text-sm">
                      Pentru întâlniri față în față, te rugăm să programezi în avans. 
                      Primul meeting este întotdeauna gratuit și fără obligații.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Response Time Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center bg-accent/5 rounded-xl p-6 border border-accent/20"
        >
          <h4 className="font-bold text-ink mb-2">Garanție de răspuns</h4>
          <p className="text-ink/70 text-sm">
            Ne angajăm să răspundem la toate mesajele în maximum <strong>24 de ore</strong> 
            în zilele lucrătoare. Pentru urgențe, sună direct pentru răspuns imediat.
          </p>
        </motion.div>
      </div>
    </section>
  )
}