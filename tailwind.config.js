/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm': '580px',
      'md': '800px',
      "large": '1000px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}