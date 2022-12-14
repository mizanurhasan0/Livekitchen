/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors:{
        bg:"#ffff",
        primary:"#9E293C",
        txt:"#FFFFFF",
        head:"#E7E7E7",
        parag:"#DADADA"
        

      },
      container:{
        center:true
      },
      fontFamily: {
        Audiowide: "Audiowide",
        Courgette: "Courgette",
        Monoton: "Monoton",
        Roboto: "Roboto",
        Silkscreen: "Silkscreen",
        Lato: "Lato",
        Playfair:"Playfair",
        Lobster:"Lobster"
      },
    },
  },
  plugins: [],
};
