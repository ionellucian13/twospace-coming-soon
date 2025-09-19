'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Clock, CheckCircle, Star } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Să discutăm despre
            <span className="block text-accent">proiectul tău</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-ink/70 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Fiecare proiect începe cu o conversație. Fie că ai o idee clară sau doar 
            o viziune vagă, suntem aici să te ajutăm să o transformi în realitate.
          </motion.p>
        </motion.div>

        {/* Contact Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16"
        >
          {[
            {
              icon: MessageCircle,
              title: 'Consultanță gratuită',
              description: '30 min de discuție fără nicio obligație',
              highlight: '100% gratuit'
            },
            {
              icon: Clock,
              title: 'Răspuns rapid',
              description: 'Te contactăm în maximum 24 de ore',
              highlight: 'Garantat'
            },
            {
              icon: CheckCircle,
              title: 'Soluții concrete',
              description: 'Nu teoria, ci pași exacți de urmat',
              highlight: 'Plan clar'
            },
            {
              icon: Star,
              title: 'Experiență verificată',
              description: '45+ proiecte finalizate cu succes',
              highlight: '98% satisfacție'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5 + index * 0.1, 
                duration: 0.4,
                ease: [0.22,1,0.36,1]
              }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-ink mb-2">{benefit.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-2">{benefit.description}</p>
              <div className="text-accent text-xs font-medium">{benefit.highlight}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-soft border border-stone"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: 'Clienți mulțumiți' },
              { number: '24h', label: 'Timp de răspuns' },
              { number: '2.8x', label: 'ROI mediu' },
              { number: '45+', label: 'Proiecte finalizate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.9 + index * 0.1, 
                  duration: 0.4,
                  ease: [0.22,1,0.36,1]
                }}
              >
                <div className="text-3xl lg:text-4xl font-bold font-heading text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-ink/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}