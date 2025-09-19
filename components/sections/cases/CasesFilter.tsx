'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'

const categories = [
  { id: 'all', label: 'Toate proiectele', count: 12 },
  { id: 'startup', label: 'Startup & Lansări', count: 4 },
  { id: 'ecommerce', label: 'E-commerce', count: 3 },
  { id: 'services', label: 'Servicii B2B', count: 3 },
  { id: 'restaurant', label: 'Restaurant & HoReCa', count: 2 }
]

const industries = [
  { id: 'tech', label: 'Technology' },
  { id: 'retail', label: 'Retail' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance' },
  { id: 'hospitality', label: 'Hospitality' }
]

export default function CasesFilter() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <section className="py-12 bg-white border-b border-stone">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8 items-center justify-between"
        >
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`${
                  activeCategory === category.id
                    ? 'bg-accent hover:bg-accent/90 text-white'
                    : 'border-stone text-ink hover:border-accent/50'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-stone rounded-lg text-sm bg-white text-ink focus:border-accent focus:outline-none">
              <option value="">Toate industriile</option>
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.label}
                </option>
              ))}
            </select>
            
            <select className="px-4 py-2 border border-stone rounded-lg text-sm bg-white text-ink focus:border-accent focus:outline-none">
              <option value="recent">Cel mai recent</option>
              <option value="results">Cele mai bune rezultate</option>
              <option value="industry">După industrie</option>
            </select>
          </div>
        </motion.div>
      </div>
    </section>
  )
}