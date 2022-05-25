module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      'darkbrown': '#8d7b72',
      'mildbrown': '#a4978b',
      'brown': '#c6b1a1',
      'pinkbrown': '#dbc8b9',
      'beige': '#e5ded2',
      'offwhite': '#f7efe9',
      }
    },
  },
  plugins: [require("@tailwindcss/forms"),
  require("tailwind-scrollbar"),
  require("tailwind-scrollbar-hide")],
}
