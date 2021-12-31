module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      maxHeight: {
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
