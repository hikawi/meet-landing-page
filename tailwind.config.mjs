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
        1: "0.25rem", // 4px spacing-50
        2: "0.5rem", // 8px spacing-100
        4: "1rem", // 16px spacing-200
        6: "1.5rem", // 24px spacing-300
        8: "2rem", // 32px spacing-400
        10: "2.5rem", // 40px spacing-500
        14: "3.5rem", // 56px spacing-700
        16: "4rem", // 64px spacing-800
        18: "4.5rem", // 72px spacing-900
        20: "5rem", // 80px spacing-1000
        28: "7rem", // 112px spacing-1100
      },
    },
  },
  plugins: [],
};
