/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#126dbc",

          secondary: "#e87153",

          accent: "#d68164",

          neutral: "#27222A",

          "base-100": "#FAFAFA",

          info: "#41BFE1",

          success: "#2BDA76",

          warning: "#ECA522",

          error: "#F3686A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
