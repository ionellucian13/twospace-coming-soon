'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
    urgency: 'normal'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Branding & Identitate',
    'Lansare Produs/Serviciu',
    'Cercetare & Strategie',
    'Growth Marketing',
    'Design & Development',
    'Consultanță',
    'Altceva'
  ]

  const budgets = [
    '< 5.000 RON',
    '5.000 - 15.000 RON',
    '15.000 - 30.000 RON',
    '30.000 - 50.000 RON',
    '50.000+ RON',
    'Să discutăm'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here would be the actual form submission logic
    setIsSubmitted(true)
    
    // Reset form after 3 seconds (for demo purposes)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: '',
        urgency: 'normal'
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-12">
                <CheckCircle size={64} className="text-accent mx-auto mb-6" />
                <h2 className="text-3xl font-bold font-heading text-ink mb-4">
                  Mulțumim pentru mesaj!
                </h2>
                <p className="text-ink/70 text-lg mb-6">
                  Am primit cererea ta și te vom contacta în maximum 24 de ore 
                  cu toate detaliile și următorii pași.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-ink/60">
                    Dacă ai întrebări urgente, sună-ne direct la{' '}
                    <a href="tel:+40721234567" className="text-accent font-medium hover:underline">
                      +40 721 234 567
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-stone shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-ink text-center">
                Completează formularul
              </CardTitle>
              <p className="text-ink/70 text-center">
                Cu cât mai multe detalii, cu atât mai bine te putem ajuta
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone rounded-xl bg-white text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone rounded-xl bg-white text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="nume@company.ro"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Compania (opțional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone rounded-xl bg-white text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Numele companiei"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Ce serviciu te interesează? *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone rounded-xl bg-white text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Selectează un serviciu...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Buget aproximativ
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone rounded-xl bg-white text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Selectează bugetul...</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Când vrei să începem?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'urgent', label: 'Urgent (ASAP)' },
                      { value: 'normal', label: 'Normal (1-2 săpt)' },
                      { value: 'flexible', label: 'Flexibil' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-full p-3 text-center text-sm border rounded-xl cursor-pointer transition-all ${
                          formData.urgency === option.value
                            ? 'border-accent bg-accent text-white'
                            : 'border-stone text-ink hover:border-accent/50'
                        }`}>
                          {option.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Detalii despre proiect *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-stone rounded-xl bg-white text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Descrie-ne pe scurt proiectul tău, obiectivele și orice alte informații care consideri că ar fi utile..."
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-4"
                  size="lg"
                >
                  <Send size={20} className="mr-2" />
                  Trimite mesajul
                </Button>

                <p className="text-xs text-ink/60 text-center">
                  Răspundem în maximum 24 de ore în zilele lucrătoare. 
                  Pentru urgențe, sună direct la +40 721 234 567.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}