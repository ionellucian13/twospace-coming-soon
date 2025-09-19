/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Two Space Brand Palette
        cream: '#F5EFE7',
        ink: '#0F172A', 
        stone: '#D9D3CC',
        espresso: '#2B1E16',
        accent: '#3ECF8E',
        'accent-alt': '#7C3AED',
        
        // shadcn/ui compatibility
        background: '#F5EFE7',
        foreground: '#0F172A',
        primary: {
          DEFAULT: '#3ECF8E',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#D9D3CC',
          foreground: '#0F172A',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#D9D3CC',
          foreground: '#0F172A',
        },
        accent: {
          DEFAULT: '#3ECF8E',
          foreground: '#0F172A',
        },
        popover: {
          DEFAULT: '#F5EFE7',
          foreground: '#0F172A',
        },
        card: {
          DEFAULT: '#F5EFE7',
          foreground: '#0F172A',
        },
        border: '#D9D3CC',
        input: '#D9D3CC',
        ring: '#3ECF8E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
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
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
        'xl': '20px',
        '2xl': '20px',
      },
      boxShadow: {
        'soft': '0 6px 20px rgba(10,10,10,.06)',
        'card': '0 4px 12px rgba(15, 23, 42, 0.08)',
        'hover': '0 8px 25px rgba(15, 23, 42, 0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
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
  plugins: [],
}