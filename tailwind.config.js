const { fonts, colors } = require("./theme");
module.exports = {
  content: ["./pages/**/*.jsx", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: colors,
      fontSize: fonts,
    },

    screens: {
      sm: "576px",
      md: "1100px",
      lg: "1640px",
      xl: "2440px",
    },
  },
};
