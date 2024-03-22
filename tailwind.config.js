/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        carrot: {
          50: "#fff8ed",
          100: "#ffefd5",
          200: "#feefd6",
          300: "#fedcaa",
          400: "#fcc175",
          500: "#fa9f42",
          600: "#f87f17",
          700: "#e9640d",
          800: "#c14b0d",
          900: "#993b13",
          950: "#431707",
        },
        shark: {
          50: "#f4f6f7",
          100: "#e4e8e9",
          200: "#cbd2d6",
          300: "#a7b2b9",
          400: "#7b8a95",
          500: "#606f7a",
          600: "#525d68",
          700: "#474f57",
          800: "#3f454b",
          900: "#383c41",
          950: "#202327",
        },
        reka: {
          3: "#d77c30",
          2: "#fa9f42",
          1: "#fbbe70",
        },
        grayscale: {
          8: "#202327",
          7: "#272a30",
          6: "#2e3238",
          5: "#5c6470",
          4: "#9fa2a8",
          3: "#d8dadf",
          2: "#e9ebed",
          1: "#ffffff",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      dmsans:
        "DM Sans, DM Sans fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    },
  },
  plugins: [],
};
