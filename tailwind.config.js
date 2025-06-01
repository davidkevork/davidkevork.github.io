/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        /* Page background gradient stops */
        "bg-light-start": "#F0E5FF",
        "bg-light-end": "#D1B3FF",

        /* Card backgrounds */
        "card-dark": "#2E1E47",
        "card-darker": "#252037",

        /* Text colors */
        "text-light": "#E3DFFF" /* Off‐white / lavender */,
        "text-faded": "#BFAAFF" /* Lighter lavender for secondary text */,

        /* Accent / highlight */
        "accent-pink": "#A259FF" /* Bright lavender‐pink */,
        "accent-purple": "#7F39FB" /* Deeper purple accent */,

        /* Border / Shadows */
        "shadow-smoke": "rgba(0, 0, 0, 0.4)",

        "cool-gray": "#A3A9C8",
        charcoal: "#38424F",
        "rich-black": "#0E1A29",
        "prussian-blue": "#19293E",
        "oxford-blue": "#0D1B2C",
        "oxford-blue-2": "#0B1B33",
        "oxford-blue-3": "#0F1C2D",
        "oxford-blue-4": "#0A1F42",
        azure: "#0E7BED",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(14,123,237, 0.8)" },
          "50%": { boxShadow: "0 0 20px rgba(14,123,237, 1)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow 2s ease-in-out infinite",
        "slide-in": "slideIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
