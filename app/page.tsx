'use client'

import { motion } from 'framer-motion'
import { ArrowRight, EnvelopeSimple, CheckCircle, XCircle } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Star Icon Component - Brand Guide
const StarIcon = () => (
  <div className="group-hover:scale-110 transition-transform duration-300">
    <Image
      src="/star-icon.svg"
      alt="Star icon"
      width={31}
      height={31}
      className="w-[31px] h-[31px]"
    />
  </div>
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
        setMessage("Successfully subscribed! We'll notify you when we launch.")
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'An error occurred. Please try again.')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 4000)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Connection error. Check your internet and try again.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 4000)
    }
  }

  return (
    <main className="min-h-screen bg-chalk flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-x-hidden">
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
            alt="Two Space"
            width={161}
            height={161}
            priority
            quality={100}
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '400px'
            }}
            className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[400px]"
          />
        </motion.div>

        {/* Main Heading - Impactful Title */}
        <motion.h1
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space-grotesk font-bold text-grey-space mb-6 sm:mb-8 leading-tight px-4"
        >
          Where Coffee Meets{' '}
          <span className="text-blood-orange italic">
            Strategy
          </span>
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.p
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-blood-orange font-semibold font-manrope mb-3 sm:mb-4 px-4"
        >
          Coming soon.
        </motion.p>

        {/* Scroll Indicator - Below Coming Soon */}
        <motion.div
          initial={mounted ? { opacity: 0, y: -10 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="flex flex-col items-center gap-2 mb-6 sm:mb-8 lg:mb-12"
        >
          <p className="text-xs sm:text-sm text-grey-space/40 font-manrope">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-blood-orange"
            >
              <path 
                d="M7 10L12 15L17 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

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
                placeholder="Your email address"
                required
                disabled={status === 'loading'}
                aria-label="Email address for newsletter"
                className="w-full pl-12 sm:pl-14 pr-32 sm:pr-40 py-3.5 sm:py-4 bg-white border-2 border-grey-space/10 rounded-full text-grey-space placeholder:text-grey-space/40 focus:outline-none focus:border-blood-orange focus:ring-4 focus:ring-blood-orange/20 transition-all duration-300 font-manrope text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-2.5 bg-blood-orange text-white rounded-full font-semibold font-space-grotesk flex items-center gap-1.5 sm:gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base min-h-[44px] active:opacity-90 transition-opacity duration-100"
                aria-label="Subscribe to newsletter"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="hidden sm:inline">Sending...</span>
                  </span>
                ) : (
                  <>
                    <span className="hidden sm:inline">Notify Me</span>
                    <span className="sm:hidden">Send</span>
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

        {/* Features Grid - Sneak Peek Cards */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
        >
          {[
            { label: 'A Space for Connection', description: 'Energy that inspires ideas' },
            { label: 'A Space for Creation', description: 'Energy that builds vision' },
            { label: 'Two Sides. One Place.', description: 'Where ideas take shape' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border-2 border-grey-space/10 hover:border-blood-orange/30 hover:shadow-lg transition-all duration-300 group min-h-[120px] sm:min-h-[140px]"
            >
              <StarIcon />
              <div className="text-center">
                <span className="text-sm sm:text-base font-semibold text-grey-space/80 font-manrope block">{item.label}</span>
                <span className="text-xs text-grey-space/50 font-manrope mt-1 block">{item.description}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text - Built on Balance */}
        <motion.p
          initial={mounted ? { opacity: 0 } : false}
          animate={mounted ? { opacity: 1 } : false}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-xs sm:text-sm text-grey-space/50 font-manrope px-4"
        >
          @ 2025 Two Space. Built on Balance
        </motion.p>
      </div>
    </main>
  )
}
