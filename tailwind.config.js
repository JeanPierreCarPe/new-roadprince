/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#FBFBFB",
        black: "#3B3B3C",
        "custom-green": "#D2D4C8"
      },
      screens: {
        wide: "1440px",
      },
      fontFamily: {
        dosis: ["var(--font-dosis)"],
        "eb-garamond": ["var(--font-ebgaramond)"],
      },
      backgroundImage: {
        // home: "url('/assets/background-home.jpg')"
      }
    },
  },
  plugins: [],
}
