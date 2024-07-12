const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ...
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      display: ["Ubuntu", "sans-serif", "Arial"],
    },
    extend: {
      colors: {
        primary: "#0CF25D",
        dark: "#1cbd55",
        secondary: {
          100: "#24252C",
          300: "#1E1F25",
          500: "#191A1E",
          900: "#131517",
        },
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    // ...
    flowbite.plugin(),
  ],
};
