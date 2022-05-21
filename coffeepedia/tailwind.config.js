const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006241",
        "p-dark": "#1f3933",
        "p-light": "#d4e9e2",
        "s-light": "#EFEAD8",
      },
    },
  },
  plugins: [],
});
