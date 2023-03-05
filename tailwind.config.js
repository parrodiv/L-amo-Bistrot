/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Patua One',
      three: 'Courgette'
    },
    container: {
      padding: {
        DEFAULT: '10px',
        // lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'rosa-antico': '#edc6cd',
        'blu-logo': '#2739a1',
        'giallo-logo': '#fac901',
        'azzurro-pesce': '#fac901',
      },
    },
    backgroundImage: {
      pattern: 'url(assets/img/bg/body-bg-pattern_5_optimized.png)',
      hero: 'url(assets/img/hero/image00246.jpeg)',
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
}
