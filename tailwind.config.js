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
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      // sans: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        spin_slow: "spin 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-ripple"), require("tailwindcss-textshadow")],
};
