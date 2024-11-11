/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [
    "./src/components/contents/**/*.{js,jsx,ts,tsx}",
    "./src/components/layouts/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        accent: {
          50: "#E0F5FF",
          100: "#B3E5FF",
          200: "#80D4FF",
          300: "#4DC3FF",
          400: "#1AB1FF",
          500: "#047ec4",
          600: "#046BA4",
          700: "#045584",
          800: "#033F63",
          900: "#022A43",
        },
      },
    },
  },
  plugins: [flowbite],
};
