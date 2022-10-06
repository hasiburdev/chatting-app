/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#5f35f5",
      },
      screens: {
        sm: "375px",
        sml: "415px"
      }
    },
  },
  plugins: [],
}
