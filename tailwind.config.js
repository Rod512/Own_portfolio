/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#5E3BEE",
        "backgroundshade": "F5FCFF",
        "dribble": "#E62872",
        "dody": "#1C1E53"
      }
    },
  },
  plugins: [],
}