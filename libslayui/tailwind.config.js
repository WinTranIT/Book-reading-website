/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_contactForm:"#EFEAD3",
        bg_primary:"#F6FFDE",
        text_Secondary:"#265073"
      },
      rotate: {
        '270': '270deg',
      },
    },
  },
  plugins: [],
}
