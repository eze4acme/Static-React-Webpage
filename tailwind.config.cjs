/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '545px',
      // => @media (min-width: 576px) { ... }

      // 'md': '960px',
      // => @media (min-width: 960px) { ... }

      // 'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {},
  },
  plugins: [],
}
