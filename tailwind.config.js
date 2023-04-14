/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#14CA15",
          medium: "#12E814",
          light: "#58FD59",
        },
      },
    },
  },
  plugins: [],
};
