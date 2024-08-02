/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        krub: ["Krub"],
        chivo: ["Chivo"]
      }
    },
  },
  plugins: [],
}

