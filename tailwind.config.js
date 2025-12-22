/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#3031f8', // Custom Blue
          700: '#2425b0', // Darker shade
          800: '#1a1b8c', // Deep shade
          400: '#5c5df9', // Lighter shade
          500: '#4647f9', // Mid shade
          900: '#11115e', // Darkest shade
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}