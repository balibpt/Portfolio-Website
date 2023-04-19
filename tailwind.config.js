/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%": {
            transform: "translateY(-20px)",
          },
          "50%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        updown: "updown 3s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
