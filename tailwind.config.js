// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#41b883' 
      },
      fontFamily: {
        Roboto: ['Roboto Mono, monospace']
      },
    }
  },
  plugins: []
}