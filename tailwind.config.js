/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Rojo primario
        darkGray: "#333333", // Gris oscuro para texto
        black: "#000000", // Negro para elementos de fondo
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
