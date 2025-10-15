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
    <main className="min-h-screen bg-chalk flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #2B2B2B 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Logo Circles - Inspired by Brand Guide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex justify-center items-center gap-6 flex-wrap"
        >
          {/* Circle 1: Two Space on Orange */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-blood-orange rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-grey-space font-space-grotesk italic text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                  two
                </div>
                <div className="text-grey-space font-space-grotesk text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  SPACE
                </div>
              </div>
            </div>
          </div>

          {/* Circle 2: Things Work Out on Black */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-grey-space rounded-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-chalk font-space-grotesk text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
                  THINGS<br/>WORK<br/>OUT.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-space-grotesk font-bold text-grey-space mb-6 leading-tight"
        >
          Ceva{' '}
          <span className="text-blood-orange italic">
            Extraordinar
          </span>
          <br />
          Se Pregătește
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-grey-space/70 mb-12 max-w-2xl mx-auto leading-relaxed font-manrope"
        >
          O experiență unică unde marketingul premium întâlnește cultura cafelei de specialitate.
          <span className="block mt-2 text-blood-orange font-semibold">Lansare în curând.</span>
        </motion.p>

        {/* Email Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto mb-16"
        >
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative group">
              <EnvelopeSimple
                size={20}
                weight="duotone"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-grey-space/40 group-focus-within:text-blood-orange transition-colors duration-300"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                required
                className="w-full pl-14 pr-36 py-4 bg-white border-2 border-grey-space/10 rounded-full text-grey-space placeholder:text-grey-space/40 focus:outline-none focus:border-blood-orange focus:ring-2 focus:ring-blood-orange/20 transition-all duration-300 font-manrope"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-blood-orange text-white rounded-full font-semibold font-space-grotesk hover:bg-blood-orange/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
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
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
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
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-3xl border-2 border-grey-space/10 hover:border-blood-orange/30 hover:shadow-lg transition-all duration-300 group"
            >
              <item.icon size={32} weight="duotone" className="text-blood-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-grey-space/80 font-manrope">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 text-sm text-grey-space/50 font-manrope"
        >
          © 2024 Two Space. Unde creativitatea întâlnește cafeaua.
        </motion.p>
      </div>
    </main>
  )
}
