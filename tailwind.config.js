const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // ripple: (theme) => ({
    //   colors: theme("colors"),
    //   // modifierTransition: "background 0.2s",
    //   // activeTransition: "background 0.1s",

    //   darken: 0.0,
    // }),
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            marginLeft: "0%",
          },
          "100%": {
            marginLeft: "-100%",
          },
        },
        scroll2: {
          "0%": {
            marginLeft: "100%",
          },
          "100%": {
            marginLeft: "0%",
          },
        },
      },
      animation: {
        scroller: "scroll 10s infinite linear",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      // animation: {
      //   scroller2: "scroll2 10s infinite linear",
      // },
      // animation: {
      //   "spin-slow": "spin 3s linear infinite",
      // },
    },
  },
  plugins: [require("tailwindcss-ripple")()],
};
