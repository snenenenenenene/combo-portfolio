/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 50s linear infinite",
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
      fontFamily: {
        // display: ["DugasPro"],
        // bold: ["DugasProBold"],
        body: ["PPRader Regular"],
        display: ["PPRader Regular"],
        bold: ["PPRader Bold"],
        medium: ["PPRader Medium"],
      },
      colors: {
        darkMode: "class",
        light: {
          primary: "#FDFAF4",
          secondary: "#181614",
          secondary2: "#141415",
          "secondary2-translucent": "#141415E0",
          tertiary: "#FE520B",
          text: "#FDFAF4",
          accent: "#4444a0",
        },
        dark: {
          primary: "#181614",
          secondary: "#FDFAF4",
          tertiary: "#FE520B",
          text: "#FDFAF4",
        },
      },
    },
  },
  plugins: [],
};
