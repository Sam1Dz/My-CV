import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'app-color': {
          '1': '#C4DFDF',
          '2': '#D2E9E9',
          '3': '#E3F4F4',
          '4': '#F8F6F4',
        },
        'app-grey': {
          '900': '#212121',
          A700: '#616161',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
