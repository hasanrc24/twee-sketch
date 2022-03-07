module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gothic': ['CenturyGothic'],
      },
      screens: {
        'xsm': {'max': '767px'},
      },
      margin: {
        'inherit': 'inherit',
      }
    },
  },
  plugins: [],
}