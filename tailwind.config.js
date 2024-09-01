/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        custom: '#D29A5A',
      },
      colors: {
        custom: '#D29A5A',
        color1: '#130F0C',
        inputColor:'#F2F3F1',
      },
    },
  },
  plugins: [],
}

