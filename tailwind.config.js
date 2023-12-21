/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      "2xl": "1300px",
    },
    extend: {
      colors: {
       'primary': '#0F2167',
       'secondary': '#3559E0',
       'secondary2': '#FFECD6',
      }
    },
  },
  plugins: [],
};
