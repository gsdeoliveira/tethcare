/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bluePrimary: '#00A0D2',
        cyanPrimary: '#00D1BF',
        darkGray: '#223231',
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1720px',
      },
    },
  },
  plugins: [],
}
