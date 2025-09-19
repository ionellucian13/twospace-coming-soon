'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { Button } from '../../ui/button'
import { Settings, Users, Target, Zap, ArrowRight } from 'lucide-react'

export default function CustomPackages() {
  const customOptions = [
    {
      icon: Settings,
      title: 'Retainer personalizat',
      description: 'Colaborare pe termen lung cu servicii adaptate lunar în funcție de nevoile tale.',
      features: ['Flexibilitate completă', 'Prioritate în planificare', 'Discount progresiv'],
      startingPrice: '2.500€/lună'
    },
    {
      icon: Users,
      title: 'Consultanță pe proiect',
      description: 'Expertiza punctuală pentru proiecte specifice sau provocări particulare.',
      features: ['Obiectiv clar definit', 'Timeline fix', 'Livrabile concrete'],
      startingPrice: '150€/oră'
    },
    {
      icon: Target,
      title: 'Audit & strategie',
      description: 'Evaluare detaliată a situației actuale și plan strategic pentru următorii pași.',
      features: ['Raport complet', 'Recomandări prioritizate', 'Roadmap 12 luni'],
      startingPrice: '890€'
    },
    {
      icon: Zap,
      title: 'Workshop intensiv',
      description: 'Sesiuni concentrate de lucru pentru echipa ta, cu transfer de cunoștințe.',
      features: ['2-5 zile intensive', 'Materiale de suport', 'Follow-up 30 zile'],
      startingPrice: '1.200€/zi'
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
            Soluții personalizate
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Pentru business-uri cu nevoi specifice, oferim servicii la comandă, 
            consultanță punctuală și colaborări pe termen lung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {customOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <option.icon size={32} className="text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-ink mb-3">
                    {option.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-ink/80">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-stone">
                    <div>
                      <div className="text-sm text-ink/60">Pornește de la</div>
                      <div className="font-bold text-accent text-lg">{option.startingPrice}</div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact" className="flex items-center gap-1">
                        Discută <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}