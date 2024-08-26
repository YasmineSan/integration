// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
      kameron: ['Kameron', 'serif'],
      dancing: ['"Dancing Script"', 'cursive'],
    },},
  },
  plugins: [],
};
