/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
      'chess-footer': '#433a44',
      'green-butoon': '#bada55'

    },
    backgroundImage: {
      'chess': "bg-gradient-to-r from-neutral-700 to-neutral-900"
    }
},
    // fontFamily: {
    //   sans: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
    //   serif: ['Georgia', 'Times New Roman', 'serif'],
    // },
  },
  plugins: [],
}

