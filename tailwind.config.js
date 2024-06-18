/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: "#f4f0f9",
          100: "#e9e0f3",
          200: "#cdb2e7",
          300: "#b285da",
          400: "#8455b0",
          500: "#5a328a",
          600: "#451f6e",
          700: "#331354",
          800: "#240a3a",
          900: "#160321",
        },
        blue: {
          50: "#ebf5ff",
          100: "#d6eaff",
          200: "#add3ff",
          300: "#85bdff",
          400: "#5da7ff",
          500: "#3391ff",
          600: "#1a77e6",
          700: "#135bb4",
          800: "#0c3f82",
          900: "#06254f",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
