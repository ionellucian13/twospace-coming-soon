'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Temporary Hero to test the app is working */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2">
          {/* Marketing Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
            className="rounded-2xl border border-stone p-8 bg-white shadow-soft"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-ink font-heading">
              We brew ideas that sell.
            </h1>
            <p className="mt-4 text-ink/70 text-lg">
              Branding, lansare, growth. Pachete clare, rezultate măsurabile.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-xl px-6 py-3 bg-accent text-white font-medium transition-colors hover:bg-accent/90"
              >
                Start a project
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-xl px-6 py-3 border border-stone transition-colors hover:bg-stone/20"
              >
                See packages
              </motion.a>
            </div>
          </motion.div>

          {/* Coffee Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22,1,0.36,1] }}
            className="rounded-2xl border border-stone p-8 bg-espresso text-cream shadow-soft"
          >
            <h2 className="text-4xl md:text-5xl font-semibold font-heading">
              Coffee for minds at work.
            </h2>
            <p className="mt-4 text-cream/80 text-lg">
              Meniu scurt, evenimente, spațiu de idei.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-xl px-6 py-3 bg-cream text-ink font-medium transition-colors hover:bg-cream/90"
              >
                See the menu
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-xl px-6 py-3 border border-cream/30 transition-colors hover:bg-cream/10"
              >
                Book an event
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Status indicator */}
      <section className="py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-ink/60"
        >
          <p>Two Space website is loading...</p>
          <p className="text-sm mt-2">Next.js + Framer Motion + TailwindCSS</p>
        </motion.div>
      </section>
    </main>
  )
}