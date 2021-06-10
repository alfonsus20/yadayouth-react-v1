const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/5": "60%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth :{
        "8xl" : "88rem",
        "9xl" : "96rem",
        "10xl" : "104rem",
      },
      spacing: {
        84: "21rem",
        91: "22rem",
        92: "23rem",
        96: "24rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
      },
      borderRadius: {
        lg: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
      screens: {
        slg: "932px",
      },
      zIndex: {
        "-10": "-10",
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};