import defaultTheme from 'tailwindcss/defaultTheme';


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],


    theme: {
      extend: {
          fontFamily: {
              sans: ['Figtree', ...defaultTheme.fontFamily.sans],
          },
      },
  },


  plugins: [require("tw-elements/dist/plugin.cjs")],
}


