/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
      'chess-footer': '#433a44',
      'green-button': '#bada55',
      },
      backgroundImage: (theme) => ({
        'chess': "linear-gradient(to right, #434343, black)"
      }),
    },
    fontFamily: {
      sans: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      serif: ['Georgia', 'Times New Roman', 'serif'],
    },
  },
  plugins: [],
}

