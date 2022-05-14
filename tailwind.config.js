module.exports = {
  darkMode: 'class',
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        'front':'-1px 1px 18px -2px rgba(138,135,135,0.15)'
      },
      borderRadius:{
        'front':"0.4em"
      },
      colors:{
        'darkbg':"#202C37",
        'darkelem':"#2B3945",
        'textlight':"#111517"
      },
    },
  },
  
  plugins: [],
}
