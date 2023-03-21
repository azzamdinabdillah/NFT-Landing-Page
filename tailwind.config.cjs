/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter": ["Inter", "sans-serif"]
      },
      colors:{
        "primary-color": "#9747FF",
        "button-color": "#5C3EAF"
      },
      animation:{
        navAnim:"navbar 1s ease-in-out"
      },
      keyframes:{
        "navbar": {
          'from': {paddingBottom:'0'},
          'to': {paddingBottom:'20px'},
        }
      }
    },
  },
  plugins: [],
}
