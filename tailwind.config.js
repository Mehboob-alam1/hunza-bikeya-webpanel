/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        lg: "40px",
      },
      colors: {
        green: {
          dark: "#14CA15",
          medium: "#12E814",
          light: "#58FD59",
          
        },
        backgroundColor: theme => ({
            ...theme('colors'),
             'primary': '#787575',
              })
      },
      width: {
        "2/6": "29.5714286%",
        "10/12": "79%"
      },
      
    },
  },
  plugins: [require("daisyui")],

};
