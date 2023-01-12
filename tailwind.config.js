/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Pink01': '#FACEB9',
        'Jaune': '#EFC270',
        'Pink02': '#F2836B',
        'Rouge': '#CB2E48',
        'Orange': '#F24405',
        'Grey01': '#1B1B1B',
        'Grey02': '#2C2C2C',
        'Grey03': '#F2F2F2',
        'Blue01': '#031059',
        'Blue02': '#2C3D73',
        'Blue04': '#415EB7',
        'Blue05': '#3E95EF',
        'Gris': '#EFEFEF',
        'GrisF': '#2C2C2C',

      },
      fontFamily: {
        "Montserrat": ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require("daisyui")
  ],
}
