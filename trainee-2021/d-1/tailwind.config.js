const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors :{
        firstlayer : "#3B065E",
        buttonlayer : "#29B7DD",
        buttonlayerhover:"#1c82b1",
        buttontexthover:"#e0e1e4",
        textcolorlayer:"#111",
        thirdlayerbg : "#5D3BE7",
        developmentlayer:"#29b7dd",
        topskilllayer:"#8b72ee",
        designlayer:"#5d3be7",
        responsive:"#bd72ef"

      },
      fontFamily:{
        'barlow' : ['Barlow', 'sans-serif'],
        'open-san' : ['Open San', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif']
      },
      backgroundImage: theme => ({
        'key-pattern': "url('../asset/bg-img/key-features-bg.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
