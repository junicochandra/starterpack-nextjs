/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [flowbite.content()],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [flowbite],
};
