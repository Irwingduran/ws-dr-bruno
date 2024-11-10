const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#00cbf0',
        'neutralGary': '#71717171',
        'colorTxt': '#6d6e71',
        'colorDark': '#e5fbff',
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

