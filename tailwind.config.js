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
        secondary: {
          100: "#1E1F25",
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
