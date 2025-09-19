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
        cream: 'var(--color-cream)',
        ink: 'var(--color-ink)', 
        stone: 'var(--color-stone)',
        espresso: 'var(--color-espresso)',
        accent: 'var(--color-accent)',
        'accent-alt': 'var(--color-accent-alt)',
      },
      borderRadius: {
        'xl': 'var(--radius)',
      },
      boxShadow: {
        'soft': 'var(--shadow)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}