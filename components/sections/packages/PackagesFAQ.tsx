'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../ui/button'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Cum știu care pachet este potrivit pentru mine?',
    answer: 'Fiecare pachet este conceput pentru o anumită etapă de business. Start pentru lansări și rebranding-uri, Growth pentru optimizarea rezultatelor existente, Premium pentru scalarea accelerată. În consultanța gratuită analizăm situația ta actuală și recomandăm cel mai potrivit pachet.'
  },
  {
    question: 'Ce se întâmplă dacă nu sunt mulțumit de rezultate?',
    answer: 'Oferim garanție de satisfacție pentru toate pachetele. Dacă nu atingem KPI-urile stabilite în contract, îți returnăm investiția. De asemenea, ai 3 runde de revizii incluse pentru a ne asigura că totul corespunde așteptărilor tale.'
  },
  {
    question: 'Pot să combin servicii din pachete diferite?',
    answer: 'Absolut! Pachetele sunt un punct de pornire, dar personalizăm întotdeauna serviciile în funcție de nevoile tale specifice. În consultanța inițială discutăm exact ce ai nevoie și adaptăm oferta corespunzător.'
  },
  {
    question: 'Cât timp durează să văd primele rezultate?',
    answer: 'Primele rezultate apar în primele 2-4 săptămâni pentru campaniile digitale. Pentru branding și poziționare, impactul complet se simte în 2-3 luni. Îți oferim rapoarte regulate pentru a urmări progresul în timp real.'
  },
  {
    question: 'Lucrați și cu companii internaționale?',
    answer: 'Da, avem experiență cu clienți din România, Europa și SUA. Toate serviciile pot fi furnizate în română sau engleză, iar procesele noastre sunt adaptate pentru colaborarea la distanță.'
  },
  {
    question: 'Ce tools și platforme folosiți?',
    answer: 'Lucrăm cu cele mai bune tools din industrie: Google Analytics, Meta Business, HubSpot, Figma, Adobe Creative Suite, și multe altele. Pentru clienții Premium, oferi accesul la toate platformele și datele analytics.'
  },
  {
    question: 'Cum funcționează procesul de plată?',
    answer: 'Pentru pachetul Start: 50% avans, 50% la finalizare. Pentru Growth și Premium: plată lunară în avans. Acceptăm plăți în RON sau EUR, prin transfer bancar sau facturare standard pentru companii.'
  },
  {
    question: 'Oferiti suport după finalizarea proiectului?',
    answer: 'Da, toate pachetele includ suport post-lansare. Start include 30 zile suport, Growth și Premium includ suport continuu pe toată durata contractului. După aceea, poți opta pentru un pachet de întreținere.'
  }
]

export default function PackagesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Întrebări frecvente
          </h2>
          <p className="text-xl text-ink/70">
            Răspunsuri la întrebările cele mai comune despre pachetele noastre
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="border border-stone rounded-xl overflow-hidden bg-white hover:shadow-soft transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-cream/30 transition-colors"
              >
                <span className="font-semibold text-ink pr-4">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-accent transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
                  >
                    <div className="px-6 pb-5 text-ink/70 leading-relaxed border-t border-stone/30">
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-cream rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold font-heading text-ink mb-4">
            Mai ai întrebări?
          </h3>
          <p className="text-ink/70 mb-6 max-w-2xl mx-auto">
            Fiecare situație este unică și avem răspunsuri la toate întrebările tale. 
            Să discutăm într-un call de 30 de minute, complet gratuit.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact" className="flex items-center gap-2">
              <MessageCircle size={18} />
              Programează o discuție
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}