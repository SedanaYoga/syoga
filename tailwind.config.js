/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bwport: {
          0: '#ffffff',
          10: '#f8f8f8',
          100: '#ececec',
          200: '#b9b9b9',
          300: '#ababab',
          400: '#666666',
          500: '#3c3c3c',
        },
      },
    },
  },
  safelist: [
    {
      pattern: /bg-bwport-(200|400|500)/,
    },
  ],
  plugins: [],
}
