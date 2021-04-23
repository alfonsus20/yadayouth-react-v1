const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/5" : "60%",
        "3/4": "75%",
        "full": "100%",
      },
      spacing: {
        84: "21rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
      borderRadius: {
        lg: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
      screens: {
        slg: "932px",
      },
      zIndex : {
        '-10' : '-10'
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
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
