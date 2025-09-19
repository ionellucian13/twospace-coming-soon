'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X as XIcon, Rocket, ChatCircle } from 'phosphor-react'
import { Button } from '../ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Marketing', href: '/marketing' },
    { name: 'Pachete', href: '/packages' },
    { name: 'Cazuri', href: '/cases' },
    { name: 'Cafe', href: '/cafe' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card py-4 shadow-hover' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="text-3xl font-bold font-heading text-ink flex items-center gap-1">
                <span className="relative">
                  Two
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </span>
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Space
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-ink/80 hover:text-ink transition-all duration-300 font-medium rounded-xl hover:bg-accent/5 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navbar-hover"
                  />
                </Link>
              </motion.div>
            ))}

          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent hover:text-white px-5 py-2 rounded-xl transition-all duration-300 font-medium">
                  <ChatCircle size={18} weight="duotone" className="mr-2" />
                  Contact
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-xl shadow-hover font-medium">
                  <Rocket size={18} weight="duotone" className="mr-2" />
                  Start Project
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <XIcon size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 py-4 border-t border-stone"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-ink/80 hover:text-ink transition-colors font-medium py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-stone/20">
                  <Link href="/contact">
                    <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent hover:text-white w-full font-medium">
                      <ChatCircle size={18} weight="duotone" className="mr-2" />
                      Contact
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-accent hover:bg-accent/90 text-white w-full font-medium">
                      <Rocket size={18} weight="duotone" className="mr-2" />
                      Start Project
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}