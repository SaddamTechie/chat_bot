const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        main:'#FFFFFF',
        'main-dark':'#1E201E',
        primary:'#FFF7D1',
        'primary-dark':'#3C3D37',
        'light-theme-text':'#000000',
        'dark-theme-text':'#FFFFFF',
        secondary:'#5865f2',
        gray:colors.emerald,
        gray:{
          900:'#202225',
          800:'#2f3136',
          700:'#36393f',
          600:'#4f545c',
          400:'#d4d7dc',
          300:'#e3e5e8',
          200:'#ebedef',
          100:'#f2f3f5',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

