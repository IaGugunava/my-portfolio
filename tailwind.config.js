/** @type {import('tailwindcss').Config} */
const colors = {
  dark: "#050105",
  primary: "#6A0572",
  "primary-light": '#861A88',
  "primary-dark": "#5A0460",
  "primary-subtle": "#6623751a",
  "gray-dark": "#312f33"
};
export default {
  content: [],
  theme: {
    screens: {
      xsm: "375px",
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "32px",
        md: "64px",
        lg: "80px",
        xl: "150px",
        "2xl": "150px"
      }
    },
    extend: {
      colors
    },
  },
  plugins: [],
}

