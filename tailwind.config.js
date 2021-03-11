const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        120: "30rem",
        140: "35rem",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      "4xl": "0 35px 60px -15px rgba(0, 0, 0, 0.4)",
      extra: "0 12px 25px 4px rgba(0, 0, 0, 1)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      primary: "rgba(76, 29, 149, 1)",
      secondary: "#648DEA",
      active: "#94D6FB",
      danger: "#e3342f",
      text: "#262626",
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
