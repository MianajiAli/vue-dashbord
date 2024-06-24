module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': "MainFont",
      },
      colors: {
        primary: '#333333',
        secondary:'#B4B4B4',
        accent:'#4690FF',
        back:'#FFFFFF',
        back2:'#F5F5F5'
      },
      fontWeight: {
        th: 100,
        el: 200,
        lg: 300,
        nr: 400,
        md: 500,
        sb: 600,
        bl: 700,
        eb: 800,
        bk: 900,
      }
    },
  },
  plugins: [],
}