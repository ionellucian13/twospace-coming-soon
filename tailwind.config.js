/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': 'var(--radius)',
      },
      boxShadow: {
        'soft': 'var(--shadow)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['General Sans', 'Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}