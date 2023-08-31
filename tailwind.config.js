/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto': "'Roboto', 'sans-serif'"
    },
    extend: {
      colors:{
        "primary": "#5E3BEE",
        "shade": "#EEF4FA",
        "dribble": "#E62872",
        "body": "#1C1E53",
        "headingcolor": "#282938",
      }
    },
  },
  plugins: [],
}