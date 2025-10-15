'use client'

import { motion } from 'framer-motion'
import { Sparkle, Coffee, ArrowRight, EnvelopeSimple } from '@phosphor-icons/react'
import { useState } from 'react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-cream to-stone/30 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-jade rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo/Brand Mark */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-premium">
            <Sparkle size={28} weight="duotone" className="text-accent" />
            <span className="text-2xl font-heading font-bold text-ink">Two Space</span>
            <Coffee size={28} weight="duotone" className="text-jade" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-ink mb-6 leading-tight"
        >
          Something{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-jade to-accent bg-[length:200%_100%] animate-gradient">
            Extraordinary
          </span>
          <br />
          Is Brewing
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-ink/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Pregătim o experiență unică unde marketingul de top întâlnește cultura cafelei premium.
          <span className="block mt-2 text-accent font-medium">Lansare în curând.</span>
        </motion.p>

        {/* Email Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto mb-16"
        >
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative group">
              <EnvelopeSimple
                size={20}
                weight="duotone"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-ink/40 group-focus-within:text-accent transition-colors duration-300"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                required
                className="w-full pl-14 pr-36 py-4 bg-white/80 backdrop-blur-sm border-2 border-ink/10 rounded-full text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent focus:shadow-glow-hover transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-accent to-jade text-white rounded-full font-medium shadow-hover hover:shadow-glow transition-all duration-300 flex items-center gap-2"
              >
                {submitted ? (
                  'Trimis!'
                ) : (
                  <>
                    Notifică-mă
                    <ArrowRight size={18} weight="bold" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Stats/Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { label: 'Marketing Premium', icon: Sparkle },
            { label: 'Coffee Experience', icon: Coffee },
            { label: 'Un Singur Loc', icon: ArrowRight },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-ink/10 hover:border-accent/30 hover:shadow-hover transition-all duration-300"
            >
              <item.icon size={32} weight="duotone" className="text-accent" />
              <span className="text-sm font-medium text-ink/80">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-sm text-ink/50"
        >
          © 2024 Two Space. Unde creativitatea întâlnește cafeaua.
        </motion.p>
      </div>
    </main>
  )
}
