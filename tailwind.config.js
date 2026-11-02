/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './instructions/**/*.html'],
  theme: {
    extend: {
      colors: {
        // Primary brand blue — #1e3660 (brand.700 = the brand colour)
        brand: {
          50: '#f3f6fb',
          100: '#e8eef8',
          200: '#ccd9ef',
          300: '#a2b9e2',
          400: '#6b90d1',
          500: '#3967b7',
          600: '#294a84',
          700: '#1e3660', // PRIMARY
          800: '#182b4c',
          900: '#13223c',
          950: '#0c1627',
        },
        // Lighter shade of the same hue — used for highlights & accents
        accent: {
          soft: '#8fb0e6',
          light: '#c7d9f4',
          DEFAULT: '#4a7ad4',
          deep: '#2b5db6',
          ink: '#22488a',
        },
        ink: '#161d2b',
        mist: '#f6f8fc',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(22,29,43,.04), 0 8px 24px -12px rgba(22,29,43,.12)',
        lift: '0 2px 4px rgba(22,29,43,.05), 0 18px 40px -20px rgba(30,54,96,.38)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        prose2: '68ch',
      },
    },
  },
  plugins: [],
};
