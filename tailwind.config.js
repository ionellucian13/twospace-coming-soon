/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Two Space Premium Brand Colors
        cream: '#F7F3EE',
        ink: '#0F172A',
        stone: '#ECE6DE', 
        espresso: '#1E1510',
        accent: '#10B981',
        jade: '#0EA5A2',
        seafoam: '#34D399',
        'accent-alt': '#7C3AED',
        
        // shadcn/ui colors
        background: '#F7F3EE',
        foreground: '#0F172A',
        primary: {
          DEFAULT: '#10B981',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ECE6DE',
          foreground: '#0F172A',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#ECE6DE', 
          foreground: '#0F172A',
        },
        popover: {
          DEFAULT: '#F7F3EE',
          foreground: '#0F172A',
        },
        card: {
          DEFAULT: '#F7F3EE',
          foreground: '#0F172A',
        },
        border: '#ECE6DE',
        input: '#ECE6DE',
        ring: '#10B981',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Geist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      borderRadius: {
        lg: '20px',
        md: '12px',
        sm: '8px',
        xl: '20px',
        '2xl': '20px',
      },
      boxShadow: {
        // Premium elevation system
        soft: '0 6px 20px rgba(10,10,10,.06)',
        card: '0 4px 12px rgba(15, 23, 42, 0.08)',
        hover: '0 8px 25px rgba(15, 23, 42, 0.12)',
        premium: '0 20px 40px rgba(15, 23, 42, 0.08), 0 8px 16px rgba(15, 23, 42, 0.05)',
        glow: '0 0 20px rgba(16, 185, 129, 0.15)',
        'glow-hover': '0 0 30px rgba(16, 185, 129, 0.25)',
      },
      zIndex: {
        // Elevation tokens
        'z0': '0',
        'z1': '10',
        'z2': '20',
        'z3': '30',
        'modal': '1000',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'offcanvas': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}