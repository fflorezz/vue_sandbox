// const colors = require("tailwindcss/colors");
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
