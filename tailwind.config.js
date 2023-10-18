/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '576px' },
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif']
      },
      colors: {
        'yellow': '#f6cf0b',
        'black': '#2d2d2d',
      }
    },
  },
  plugins: [],
}
