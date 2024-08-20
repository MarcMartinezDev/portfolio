/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "first-text": "#E8E8ED",
        "second-text": "#88A2D1",
        primary: "#0F192C",
        medium: "#45487D",
        secondary: "#192B4A",
        marker: "#68CCC9",
      },
    },
  },
  plugins: [],
};
