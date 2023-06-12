/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      // Configure your color palette here
      dark: '#141414',
      light: '#ffffff',
    },
  },
  plugins: [],
};
