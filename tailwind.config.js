module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#072910',
        secondary: '#111A14CC',
        chateauGreen: '#3DBC4F',
        cornflowerblue: '#E1E7FF',
        solitude: '#edf1ff',
        fern: '#5DC86C',
        goblin: '#438C4D',
        mercury: '#E6E6E6',
        everglade: '#224831',
        alto: '#DCDCDC',
        dovegray: '#707070',
        gin: '#EBF2ED',
      },
      fontFamily: {
        inter: 'Inter',
      },
    },
    screens: {
      xs: '370px',
      ...require('tailwindcss/defaultTheme').screens,
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
