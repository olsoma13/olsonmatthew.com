/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#345C72',
        'primary-light': '#D4EDF4',
        'secondary-dark': '#2A2E30',
        'secondary-light': 'FFFFFF',
        'accent-dark': '#F46530',
        'accent-light': '#FF9E7A',
        //'accent-1': '#FAFAFA',
        //'accent-2': '#EAEAEA',
        //'accent-7': '#333',
        success: 'accent-dark',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
