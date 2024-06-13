/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#3D3D3D",
        highlight: "#2F2F2F",
        text: "#f2f2f2",
        "text-low": "#868686",
        complementary: "#6E2A89",
      },
    },
  },
  plugins: [],
};
