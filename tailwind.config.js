/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#837A5B',
        dark: '#0f172a',
        secondary: '#64748b',
        back: '#EDEDED',
        backk: '#F4F4F4',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
