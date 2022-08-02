module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Gotu',
        ]
      },
      colors: {
        'brand': '#D6A269',
        'brand-dark': '#17202A',
      },
      backgroundImage: {
      },
      animation: {
      },
      keyframes: {
      },
    },
    gradientColorStops: theme => ({
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
