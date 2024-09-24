/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        backGray: '#f9f9f9'
      },
      screens: {
        'tablet' : '640px'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}