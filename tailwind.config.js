/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      color: {
        primary: "#16a34a",
        secondary: "#15803d",
        tertiary: "#166534"

      },
    },
  },
  plugins: [],
}

