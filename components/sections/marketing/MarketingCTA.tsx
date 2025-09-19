'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { ArrowRight, MessageCircle, Calendar, CheckCircle } from 'lucide-react'

export default function MarketingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-ink to-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Gata să îți transformi 
              <span className="block text-accent">afacerea?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-cream/80 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hai să discutăm despre obiectivele tale într-o consultanță gratuită de 30 de minute. 
              Fără obligații, doar strategii concrete.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  Consultanță gratuită
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
                <Link href="/packages" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Vezi pachete
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-2"
            >
              {[
                'Consultanța inițială este complet gratuită',
                'Răspundem în maximum 24 de ore',
                'Strategii personalizate pentru fiecare business',
                'Rezultate garantate și măsurabile'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-cream/80">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22,1,0.36,1] }}
          >
            <div className="bg-cream/5 backdrop-blur rounded-2xl p-8 border border-cream/20">
              <h3 className="text-2xl font-bold font-heading text-cream mb-6">
                Începe cu o conversație
              </h3>
              
              <div className="space-y-6">
                {/* Quick contact options */}
                <div className="grid gap-4">
                  <Link 
                    href="mailto:hello@twospace.ro"
                    className="flex items-center gap-4 p-4 bg-cream/5 rounded-xl hover:bg-cream/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <MessageCircle size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-cream group-hover:text-accent transition-colors">
                        Email direct
                      </div>
                      <div className="text-cream/70 text-sm">hello@twospace.ro</div>
                    </div>
                    <ArrowRight size={16} className="text-cream/40 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link 
                    href="tel:+40721234567"
                    className="flex items-center gap-4 p-4 bg-cream/5 rounded-xl hover:bg-cream/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Calendar size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-cream group-hover:text-accent transition-colors">
                        Programează un call
                      </div>
                      <div className="text-cream/70 text-sm">+40 721 234 567</div>
                    </div>
                    <ArrowRight size={16} className="text-cream/40 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>

                <div className="pt-4 border-t border-cream/20">
                  <p className="text-cream/70 text-sm text-center">
                    Sau completează formularul de contact pentru o discuție detaliată 
                    despre proiectul tău.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-16 border-t border-cream/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '45+', label: 'Proiecte finalizate', sublabel: 'în ultimii 2 ani' },
              { number: '2.8x', label: 'Creștere medie ROI', sublabel: 'în primele 6 luni' },
              { number: '98%', label: 'Clienți mulțumiți', sublabel: 'recomandă serviciile' },
              { number: '24h', label: 'Timp de răspuns', sublabel: 'la mesaje și întrebări' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + index * 0.1,
                  ease: [0.22,1,0.36,1]
                }}
              >
                <div className="text-3xl lg:text-4xl font-bold font-heading text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-cream font-medium mb-1">{stat.label}</div>
                <div className="text-cream/60 text-sm">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}