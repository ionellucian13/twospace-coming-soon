'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { menuItems } from '../../../lib/data'
import { Card, CardContent } from '../../ui/card'
import { Star } from 'lucide-react'

const categories = [
  { id: 'all', label: 'Toate' },
  { id: 'coffee', label: 'Cafea' },
  { id: 'tea', label: 'Ceaiuri' },
  { id: 'cold', label: 'Băuturi reci' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'desserts', label: 'Deserturi' }
]

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Meniul nostru
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Selectăm cu atenție fiecare ingrediente pentru a-ți oferi 
            o experiență culinară memorabilă în fiecare vizită.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-cream text-ink hover:bg-stone/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.22,1,0.36,1]
              }}
              layout
            >
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-ink text-lg">{item.name}</h3>
                        {item.bestseller && (
                          <Star size={16} className="text-accent fill-current" />
                        )}
                      </div>
                      <p className="text-ink/70 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      
                      {/* Ingredients/Features */}
                      {item.ingredients && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-stone/20 text-ink/60 px-2 py-1 rounded-full"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="font-bold text-accent text-xl">{item.price}</div>
                      {item.originalPrice && (
                        <div className="text-ink/40 text-sm line-through">
                          {item.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="flex items-center justify-between text-xs text-ink/60">
                    <div className="flex items-center gap-3">
                      {item.category === 'coffee' && (
                        <span className="flex items-center gap-1">
                          ☕ Espresso base
                        </span>
                      )}
                      {item.vegan && (
                        <span className="text-accent font-medium">🌱 Vegan</span>
                      )}
                      {item.glutenFree && (
                        <span className="text-accent font-medium">🌾 Fără gluten</span>
                      )}
                    </div>
                    {item.bestseller && (
                      <span className="text-accent font-medium">Bestseller</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-cream rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold font-heading text-ink mb-4">
            Oferte speciale
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-ink mb-2">Happy Hour</h4>
              <p className="text-ink/70 text-sm mb-3">
                Luni-Vineri, 14:00-17:00 - toate cafelele cu 20% reducere
              </p>
              <div className="text-accent font-bold">-20%</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-ink mb-2">Business Lunch</h4>
              <p className="text-ink/70 text-sm mb-3">
                Cafea + snack la pachet pentru întâlnirile de afaceri
              </p>
              <div className="text-accent font-bold">25 RON</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}