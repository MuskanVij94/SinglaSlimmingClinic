/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e1eafe',
          200: '#c9d9fe',
          300: '#a6c1fd',
          400: '#7e9ffb',
          500: '#5e7ef9',
          600: '#3b62f0',
          700: '#2d4edb',
          800: '#1a3fae',
          900: '#1a366d',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      rotate: {
        '135': '135deg',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};