/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "acess-image": "url('/src/assets/bg-image.png')",
      },
      fontFamily: {
        "Play": "Play",
      }
    },
  },
  plugins: [],
}