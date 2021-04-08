const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '108' : '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
      },
      borderRadius: {
        "lg": "1rem",
        "2xl": "2rem",
        "3xl" : "3rem"
      },
      screens:{
        "slg" : "932px" 
      }
    },
    colors: {
      blue: {
        DEFAULT: "#222AEF",
        light: "#353DEF",
      },
      yellow: {
        DEFAULT: "#FBC226",
        light: "#fbbb1b",
      },
      orange: {
        DEFAULT: "#FF4C2E",
      },
      gray: {
        DEFAULT: "#dbdbdb",
      },
      white: colors.white,
      black: colors.black
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
