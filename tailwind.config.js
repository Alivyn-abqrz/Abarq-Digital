// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      
    },
  },
  theme: {
    extend: {textSizeAdjust: {
      '100': '100%',
    },},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-size-adjust-100': {
          '-webkit-text-size-adjust': '100%',
          'text-size-adjust': '100%',
        },
      });
    },
  ],
}
