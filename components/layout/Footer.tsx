import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const marketingLinks = [
    { name: 'Servicii', href: '/marketing' },
    { name: 'Pachete', href: '/packages' },
    { name: 'Cazuri', href: '/cases' },
  ]

  const cafeLinks = [
    { name: 'Meniu', href: '/cafe' },
    { name: 'Evenimente', href: '/cafe#events' },
    { name: 'Spațiu', href: '/cafe#space' },
  ]

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-heading">
              Two<span className="text-accent">Space</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Combinăm strategiile de marketing cu atmosfera perfectă pentru idei. 
              Un spațiu unde brandurile iau viață și cafeaua inspiră creativitatea.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Marketing Links */}
          <div>
            <h3 className="font-semibold mb-4 font-heading">Marketing</h3>
            <ul className="space-y-3">
              {marketingLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cafe Links */}
          <div>
            <h3 className="font-semibold mb-4 font-heading">Cafe</h3>
            <ul className="space-y-3">
              {cafeLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 font-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-cream/80 text-sm">
                <MapPin size={16} className="text-accent" />
                <span>Str. Creativității 25, Cluj-Napoca</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/80 text-sm">
                <Phone size={16} className="text-accent" />
                <span>+40 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/80 text-sm">
                <Mail size={16} className="text-accent" />
                <span>hello@twospace.ro</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Program</h4>
              <p className="text-cream/80 text-sm">
                Lun - Vin: 08:00 - 22:00<br />
                Sâm - Dum: 09:00 - 23:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-cream/60">
              <p>&copy; 2025 Two Space. Toate drepturile rezervate.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-cream transition-colors">
                  Politică GDPR
                </Link>
                <Link href="/terms" className="hover:text-cream transition-colors">
                  Termeni
                </Link>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex items-center space-x-3">
              <p className="text-sm text-cream/80">Newsletter:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="px-3 py-1 text-sm bg-cream/10 border border-cream/20 rounded-l text-cream placeholder:text-cream/50 focus:outline-none focus:border-accent"
                />
                <button className="px-4 py-1 bg-accent hover:bg-accent/90 text-white text-sm rounded-r transition-colors">
                  Abonează-te
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}