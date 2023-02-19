module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      // 'bodoni': 'Bodoni Moda',
    },
    colors: {
      'main': '#FFD800',
      'mainSecond': '#FBAD02',
      'mainThird': '#F3B03C',
      'white': 'white',
      'lightwhite': 'rgba(255, 255, 255, 0.3)',
      'lightblack': 'rgba(0, 0, 0, 0.3)',
      'black': 'black',
      'darkBg': '#111111',
      'darkBgSecond': '#252525',
      'paragraph': '#636363'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'm-laptop': '1367px',
      'main': '1205px',
      'contact': '776px'
    }
  },
  plugins: [],
}