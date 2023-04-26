/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '400': '400px',
        '600': '600px',
        '800': '800px'
      },
      height: {
        '400': '400px',
        '600': '600px',
        '800': '800px'
      },
      inset: {
        '44%': '44%',
        '45%': '45%',
        '46%': '46%'
      }
    },
  },
  plugins: [],
}
