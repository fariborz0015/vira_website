/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const colors = require('tailwindcss/colors')

const customColors = {
  primaryLight: '#1dd3f8',
  primary: '#0d6efd',
  primaryLowDark: '#060542',
  primaryDark: '#010032',
}
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}',    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ...colors,
        ...customColors,
      },
      fontSize: {
        xxs: '.75rem',
        xs: '.813rem',
        sm: '.875rem',
        tiny: '.938rem',
        base: '1rem',
        md: '1.063rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        title: '1.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4/3xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      container: {
        center: true,
        screens: {
          lg: '1320px',
        },
      },
      spacing: {
        38: '9.5rem',
      },
      height: {
        18: '4.5rem',
        74: '18.5rem',
        94: '23.5rem',
      },
      width: {
        18: '4.5rem',
        74: '18.5rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme, addVariant }) {
      mapColors(customColors)
      addComponents({
        '.container-lg': {
          maxWidth: '1280px',
          width: '100%',
          margin: 'auto',
        },
        '.container-xl': {
          maxWidth: '1440px',
          margin: 'auto',
        },

        ':root': {
          ...mapColors(customColors),
          '--swiper-theme-color': '#FF7F74 !important',
        },
      }),
      require('tailwind-children'),
      require('tw-elements/dist/plugin')
    }),
  ],
}

const mapColors = (colors) => {
  let object = {}

  for (let item in colors) {
    object[`--color-${item} `] = colors[item]
  }
  return object
}
