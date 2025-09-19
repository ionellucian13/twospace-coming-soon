'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../../lib/data'
import { Card, CardContent } from '../ui/card'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
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
            Ce spun clienții
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Încrederea și rezultatele clienților noștri sunt cea mai bună 
            dovadă a calității serviciilor Two Space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
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
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white relative">
                <CardContent className="p-8">
                  <Quote size={32} className="text-accent/20 absolute top-6 right-6" />
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="text-accent fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-ink/80 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-accent text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-ink">{testimonial.name}</div>
                      <div className="text-ink/60 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '98%', label: 'Clienți mulțumiți', sublabel: 'revine pentru alte proiecte' },
            { number: '2.8x', label: 'Creștere medie ROI', sublabel: 'în primele 6 luni' },
            { number: '45+', label: 'Proiecte finalizate', sublabel: 'în ultimii 2 ani' },
            { number: '24h', label: 'Timpul de răspuns', sublabel: 'la mesaje și întrebări' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              className="p-6"
            >
              <div className="text-4xl lg:text-5xl font-bold font-heading text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-ink font-medium mb-1">{stat.label}</div>
              <div className="text-ink/60 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-stone max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-ink mb-4">
              Gata să fii următorul nostru success story?
            </h3>
            <p className="text-ink/70 mb-6">
              Hai să discutăm despre proiectul tău și să vedem cum te putem ajuta 
              să îți atingi obiectivele de business.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-medium rounded-xl transition-colors text-lg"
            >
              Să începem colaborarea
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}