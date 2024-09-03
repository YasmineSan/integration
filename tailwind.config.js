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
        'coral': '#FF7F50',
        'darkorange': '#FF4500',
        'skyblue': '#87CEEB',
        'steelblue': '#4682B4',
        'blueviolet': '#8A2BE2',
        'indigo': '#4B0082',
      },
      fontFamily: {
      kameron: ['Kameron', 'serif'],
      dancing: ['"Dancing Script"', 'cursive'],
    },},
  },
  plugins: [],
};
