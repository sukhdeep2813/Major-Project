/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgrey: '#424242',
        black: '#252525',
        white: '#FFFFFF',
        yellow: '#F9ED32',
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
