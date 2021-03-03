const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '140': '35rem',
      }
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: 'rgba(76, 29, 149, 1)',
      secondary: '#648DEA',
      active: '#94D6FB',
      danger: '#e3342f',
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
    }
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
