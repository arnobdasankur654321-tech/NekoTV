/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#a29bfc",
  background: "#000000",
  lightbg: "transparent",
  card: "#101B2A",
  btnbg: "#145183",
  yellow: "#F9ED69",
  purple: "#B1B2FF",
  pink: "#F2BED1",
  lighttext: "#ccc",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};



