/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
