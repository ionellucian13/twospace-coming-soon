'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, Award } from 'lucide-react'

export default function CasesHero() {
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
            Rezultate concrete
            <span className="block text-accent">povești de succes</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-ink/70 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Descoperă cum am transformat idei în business-uri de succes și afaceri 
            existente în branduri recunoscute. Fiecare proiect cu metrici clare și rezultate măsurabile.
          </motion.p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: TrendingUp,
              number: '2.8x',
              label: 'Creștere medie ROI',
              sublabel: 'în primele 6 luni'
            },
            {
              icon: Users,
              number: '450k+',
              label: 'Utilizatori atrași',
              sublabel: 'pentru clienții noștri'
            },
            {
              icon: Target,
              number: '95%',
              label: 'Ținte atinse',
              sublabel: 'sau depășite'
            },
            {
              icon: Award,
              number: '45+',
              label: 'Proiecte finalizate',
              sublabel: 'în ultimii 2 ani'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.1, 
                duration: 0.5,
                ease: [0.22,1,0.36,1]
              }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-heading text-accent mb-2">
                {stat.number}
              </div>
              <div className="font-medium text-ink mb-1">{stat.label}</div>
              <div className="text-ink/60 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}