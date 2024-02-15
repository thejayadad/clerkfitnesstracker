/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB7525',
        secondary: '#F29E23',
        darkGreen: '#283618',
        liteGreen: '#606c38'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
