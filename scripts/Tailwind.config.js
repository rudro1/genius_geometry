module.exports = {
  content: ["./src/**/*.{html,js}"], // কোথায় তোমার HTML/JS ফাইল আছে, Tailwind Purge করার জন্য
  theme: {
    extend: {
      colors: {
        brandBlue: "#123456",
      },
      spacing: {
        72: "18rem",
      },
      fontSize: {
        "xxs": "0.65rem",
      },
    },
  },
  plugins: [],
};
