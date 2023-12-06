/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(274,64%,40%)",
        primary_variant: "hsl(274,64%,60%)",
        secondary: "#ffffff",
        accent: "hsla(0,0%,90%,0.685)",
        gray: "hsla(0,0%,70%)",
      },
    },
  },
  plugins: [],
};
