/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: "#8FE3F9",
          600: "#4D96A9",
        },
        purple: {
          300: "#D9B8FF",
          600: "#855FB1",
        },
        slate: {
          300: "#D1D1DF",
          600: "#87879D",
          900: "#28283D",
        },
        white: "#FAFAFA",
      },
      fontFamily: {
        "red-hat": ["Red Hat Display", "sans-serif"],
      },
      spacing: {
        100: "8px",
        200: "16px",
        300: "24px",
        400: "32px",
        500: "40px",
        700: "56px",
        800: "64px",
        900: "72px",
        1000: "80px",
        1400: "112px",
      },
    },
  },
  plugins: [],
};
