/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
      primary: "#9c27b0",
      secondary: "#ffffff",
      accent: "#f3e5f5",
      }
      
    },
  },
  plugins: [],
};
