/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        active: "#F7F1E5",
        inactive: "#898121",
        bgcolor: "#ded7a0ad",
      },
      fontFamily: {
        Pacifico: ["Pacifico"],
      },
    },
  },
  plugins: [],
};
