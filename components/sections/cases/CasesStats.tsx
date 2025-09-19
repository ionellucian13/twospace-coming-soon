'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { ArrowRight, MessageCircle, Award, Users, Target, TrendingUp } from 'lucide-react'

export default function CasesStats() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Overall Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Impactul nostru în cifre
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Rezultatele concrete obținute pentru clienții noștri demonstrează 
            eficiența strategiilor și execuția impecabilă.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: TrendingUp,
              number: '€2.3M+',
              label: 'Revenue generat',
              sublabel: 'pentru clienții noștri',
              color: 'text-accent'
            },
            {
              icon: Users,
              number: '450k+',
              label: 'Utilizatori noi',
              sublabel: 'atrași prin campaniile noastre',
              color: 'text-accent'
            },
            {
              icon: Target,
              number: '95%',
              label: 'Ținte atinse',
              sublabel: 'sau depășite în proiecte',
              color: 'text-accent'
            },
            {
              icon: Award,
              number: '4.9/5',
              label: 'Satisfacție clienți',
              sublabel: 'rating mediu după proiect',
              color: 'text-accent'
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              className="text-center p-6 bg-cream rounded-xl"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon size={24} className={metric.color} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-heading text-accent mb-2">
                {metric.number}
              </div>
              <div className="font-medium text-ink mb-1">{metric.label}</div>
              <div className="text-ink/60 text-sm">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Industry Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-cream rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading text-ink mb-4">
              Experiență cross-industry
            </h3>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
              Am lucrat cu succes în diverse industrii, adaptând strategiile 
              pentru specificul fiecărui sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Technology & SaaS',
                projects: 12,
                avgGrowth: '3.2x',
                highlight: 'Creștere utilizatori'
              },
              {
                industry: 'E-commerce & Retail',
                projects: 8,
                avgGrowth: '185%',
                highlight: 'Creștere vânzări'
              },
              {
                industry: 'Healthcare & Wellness',
                projects: 6,
                avgGrowth: '240%',
                highlight: 'Lead generation'
              },
              {
                industry: 'Finance & Consulting',
                projects: 5,
                avgGrowth: '150%',
                highlight: 'Brand awareness'
              },
              {
                industry: 'HoReCa & Hospitality',
                projects: 4,
                avgGrowth: '220%',
                highlight: 'Rezervări online'
              },
              {
                industry: 'Real Estate & Construction',
                projects: 3,
                avgGrowth: '180%',
                highlight: 'Inquiries qualified'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + index * 0.1 
                }}
                className="bg-white rounded-xl p-6"
              >
                <h4 className="font-bold text-ink mb-3">{item.industry}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-ink/60">Proiecte</div>
                    <div className="font-bold text-accent text-lg">{item.projects}</div>
                  </div>
                  <div>
                    <div className="text-ink/60">{item.highlight}</div>
                    <div className="font-bold text-accent text-lg">+{item.avgGrowth}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold font-heading text-ink mb-4">
            Gata să fii următorul success story?
          </h3>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            Fiecare proiect începe cu o discuție. Să vorbim despre obiectivele 
            tale și cum te putem ajuta să le atingi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle size={18} />
                Discută proiectul tău
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/packages" className="flex items-center gap-2">
                Vezi pachete <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}