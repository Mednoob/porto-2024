/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "screen-no-scroll": "calc(100vw - (100vw - 100%))"
      },
      animation: {
        "bounce-up": "bounce-up 1.5s infinite alternate ease-in-out"
      }
    },
  },
  plugins: [],
}

