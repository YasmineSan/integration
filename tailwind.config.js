// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'flori-red': '#FB0303',
        'flori-dark-red': '#950202',
        'flori-green': '#3D7C0C',
        'flori-dark-green': '#BBBF03',
        'flori-red': '#FB0303',
        'flori-dark-red': '#950202',
      },
      fontFamily: {
      kameron: ['Kameron', 'serif'],
      dancing: ['"Dancing Script"', 'cursive'],
    },},
  },
  plugins: [],
};
