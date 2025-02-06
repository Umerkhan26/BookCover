/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#CD9E6A",
        "custom-white": "#FFFFFf",
        "custom-teal": "#6dc7d1"  // Add this

      },
      fontFamily: {
        aston: ["Aston Script", "sans-serif"],
        aboreto: ["Aboreto", "sans-serif"], // Added Aboreto font
      },
      width: {
        "76vw": "76vw",
        120: "65rem", // Moved inside the same width object to avoid overriding
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
    },
  },
  plugins: [],
};
