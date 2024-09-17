/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131921",
        secondary: "#232f3e",
        amazon_yellow: "rgb(243,168,71)",
      },
    },
  },
  plugins: [],
};
