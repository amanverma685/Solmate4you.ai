/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#B8D4E3',
        'gentle-blue': '#A8C8D8',
        'soft-green': '#C4E4D4',
        'gentle-green': '#B4D4C4',
        'pastel-blue': '#E3F2FD',
        'pastel-green': '#E8F5E9',
      },
    },
  },
  plugins: [],
}

