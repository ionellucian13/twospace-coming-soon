'use client'

import { motion } from 'framer-motion'
import { ArrowRight, EnvelopeSimple, CheckCircle, XCircle } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Diamond Icon Component - Brand Guide
const DiamondIcon = () => (
  <div 
    className="group-hover:scale-110 transition-transform duration-300"
    style={{
      width: '21.59px',
      height: '21.59px',
      background: '#FF491F',
      transform: 'rotate(-45deg)',
    }}
  />
)

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        setMessage('Te-ai abonat cu succes! Te vom anunța când lansăm.')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'A apărut o eroare. Te rugăm încearcă din nou.')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 4000)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Eroare de conexiune. Verifică internetul și încearcă din nou.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 4000)
    }
  }

  return (
    <main className="min-h-screen bg-chalk flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #2B2B2B 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content - Optimized with 8pt grid spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        
        {/* Logo - Responsive sizing */}
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.8 } : false}
          animate={mounted ? { opacity: 1, scale: 1 } : false}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12 lg:mb-16 flex justify-center px-4"
        >
          <Image
            src="/two-space-logo.svg"
            alt="Two Space - Things Work Out"
            width={359}
            height={179}
            priority
            quality={100}
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '600px'
            }}
            className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </motion.div>

        {/* Main Heading - Duo Space concept */}
        <motion.h1
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-bold text-grey-space mb-4 sm:mb-6 leading-tight px-4"
        >
          Două Spații.{' '}
          <span className="text-blood-orange italic">
            O Singură
          </span>
          <br />
          Experiență.
        </motion.h1>

        {/* Subtitle - Brand concept explained */}
        <motion.p
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-grey-space/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-manrope px-4"
        >
          Un <span className="font-semibold text-grey-space">café</span> care inspiră conexiuni și creativitate. O <span className="font-semibold text-grey-space">agenție</span> care transformă idei în strategie.
          <span className="block mt-2 text-blood-orange font-semibold">Lansare în curând.</span>
        </motion.p>

        {/* Email Signup Form - Enhanced UX with feedback */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg mx-auto mb-8 sm:mb-12 lg:mb-16 px-4"
        >
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative group">
              <EnvelopeSimple
                size={20}
                weight="duotone"
                className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-grey-space/40 group-focus-within:text-blood-orange transition-colors duration-300 pointer-events-none z-10"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                required
                disabled={status === 'loading'}
                aria-label="Adresa de email pentru newsletter"
                className="w-full pl-12 sm:pl-14 pr-32 sm:pr-40 py-3.5 sm:py-4 bg-white border-2 border-grey-space/10 rounded-full text-grey-space placeholder:text-grey-space/40 focus:outline-none focus:border-blood-orange focus:ring-4 focus:ring-blood-orange/20 transition-all duration-300 font-manrope text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.05, x: 2 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-2.5 bg-blood-orange text-white rounded-full font-semibold font-space-grotesk hover:bg-blood-orange/90 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base min-h-[44px]"
                aria-label="Abonează-te la newsletter"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="hidden sm:inline">Se trimite...</span>
                  </span>
                ) : (
                  <>
                    <span className="hidden sm:inline">Notifică-mă</span>
                    <span className="sm:hidden">Trimite</span>
                    <ArrowRight size={18} weight="bold" />
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Status Messages - Accessible feedback */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-2xl flex items-center gap-3 ${
                status === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
              role="alert"
              aria-live="polite"
            >
              {status === 'success' ? (
                <CheckCircle size={24} weight="fill" className="text-emerald-600 flex-shrink-0" />
              ) : (
                <XCircle size={24} weight="fill" className="text-red-600 flex-shrink-0" />
              )}
              <p className="text-sm font-manrope">{message}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Features Grid - Duo Space concept with Diamond Icons */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
        >
          {[
            { label: 'Spațiu pentru Conexiuni', description: 'Energie care inspiră idei' },
            { label: 'Spațiu pentru Creație', description: 'Energie care construiește viziune' },
            { label: 'Două Fețe. Un Loc.', description: 'Unde ideile prind formă' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border-2 border-grey-space/10 hover:border-blood-orange/30 hover:shadow-lg transition-all duration-300 group min-h-[120px] sm:min-h-[140px]"
            >
              <DiamondIcon />
              <div className="text-center">
                <span className="text-sm sm:text-base font-semibold text-grey-space/80 font-manrope block">{item.label}</span>
                <span className="text-xs text-grey-space/50 font-manrope mt-1 block">{item.description}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text - Updated to 2025 */}
        <motion.p
          initial={mounted ? { opacity: 0 } : false}
          animate={mounted ? { opacity: 1 } : false}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-xs sm:text-sm text-grey-space/50 font-manrope px-4"
        >
          © 2025 Two Space. Unde creativitatea întâlnește strategia.
        </motion.p>
      </div>
    </main>
  )
}
