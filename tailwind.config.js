/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#069485',
        primarydark: '#00c5af',
        secondary: '#64748b',
        secondarydark: '#94a3b8',
        dark: '#1e293b',
        white: '#F3F5F8',
        // back: '#EDEDED',
        // backk: '#F4F4F4',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
