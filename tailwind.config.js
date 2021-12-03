module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: '768px',
        md: '1024px',
        lg: '1680px'
      }
    },
    colors: {
      violetColor: {
        500: '#564ce0'
      },
      primaryColor: {
        100: '#FFE4BC',
        200: '#FEC36B',
        300: '#FFA31A',
        400: '#FF7A00'
      },
      successColor: {
        100: '#7ADD7E',
        200: '#34B83A',
        300: '#1D9D22'

      },
      dangerColor: {
        100: '#FF8E8E',
        200: '#FD5959',
        300: '#E03535'
      },
      darkColor: {
        100: '#767778',
        200: '#5F6061',
        300: '#49494B',
        400: '#323334',
        500: '#1B1C1E'
      },
      lightColor: {
        100: '#FFFFFF',
        200: '#F4F4F4',
        300: '#E8E8E8',
        400: '#DDDDDD',
        500: '#D1D2D2'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
