/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#30364F",
        sage: "#ACBAC4",
        teal: "#088395",
        mint: "#7AB2B2",
        cream: "#EBF4F6",
      },
      fontFamily: {
        playfair: ["'Playfair Display', serif"],
        dm: ["'DM Sans', sans-serif"],
      },
    },
  },
  plugins: [],
};