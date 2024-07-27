/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgrey: {
          100: '#424242',
          200: '#2C2A2A',
          300: '#3C3C3C',
          400: '#414141',
          500: '#373737',
        },
        black: {
          100: '#252525',
          200: '#202020',
          300: '#131313',
        },
        white: {
          100: '#FFFFFF',
          200: '#EDEDED',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #252525, #2C2A2A, #3C3C3C, #414141, #373737)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        calibri: ['Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
