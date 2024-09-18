/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primary:"#009A74"
      },

      animation:{
        'bounce-slow':'bounce 5s infinite'
      },

backgroundImage:{
 ' project-bg':"url('/img/section-bg.png)')",
},

    },
  },
  plugins: [],
}

