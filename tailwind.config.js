module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "FFA7C4",
      },
      spacing: {
        112: "28rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
