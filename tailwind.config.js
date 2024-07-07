/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Ubuntu", "sans-serif", "Arial"],
    },
    extend: {
      colors: {
        primary: "#0CF25D",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },
      },
    },
  },

  plugins: [require("@headlessui/tailwindcss")],
};
