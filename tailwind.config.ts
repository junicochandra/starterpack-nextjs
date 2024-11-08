import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#E0F5FF",
          100: "#B3E5FF",
          200: "#80D4FF",
          300: "#4DC3FF",
          400: "#1AB1FF",
          500: "#047ec4", // Warna utama `accent`
          600: "#046BA4",
          700: "#045584",
          800: "#033F63",
          900: "#022A43",
        },
      },
    },
  },
  plugins: [],
};
export default config;
