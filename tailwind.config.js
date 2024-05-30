/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1780E7',
      },
    },
    fontFamily: {
      sans: ['SwissNow', 'sans-serif'],
    },
  },
  plugins: [],
}
