/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 300: "#6977d1" },
        gray: { 400: "#bcbcbc", 900: "#0f1624" },
        black: { 900: "#000000" },
        blue_gray: { 600: "#4f5684", 900: "#16294f" },
        cyan: { 600: "#13adc7" },
        white: { A700: "#ffffff" ,600:"#afafaf"},
        deep_purple: { 300: "#945dd6" },
      },
      backgroundImage: {
        gradient: "linear-gradient(270deg ,#13adc7,#6977d1,#945dd6)",
      },
      fontFamily: { poppins: "Poppins" },
      boxShadow: { bs: "0px 0px  12px 0px #ffffff" },
    },
  },
  plugins: [],
}