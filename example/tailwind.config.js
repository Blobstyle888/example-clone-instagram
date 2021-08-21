module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "501px",
      md: "768px",
      lg: "975px",
      xl: "1440px",
    },
    extend: {
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        xxl: "54px",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "last"],
    },
  },
  plugins: [],
};
