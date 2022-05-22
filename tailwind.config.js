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
        ripple: {
          "0%": {
            transform: "scale(1)",
            opacity: 0,
          },
          // "100%": {
          //   opacity: 0,
          // },
        },
      },
      animation: {
        ripple: "ripple 600ms linear",
      },
      // animation: {
      //   "spin-slow": "spin 3s linear infinite",
      // },
    },
  },
  plugins: [require("tailwindcss-ripple")()],
};
