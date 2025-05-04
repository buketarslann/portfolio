/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        burgundy: {
          light: '#EFD8DC',
          DEFAULT: '#8B2635',
          dark: '#6E1F2A',
        },
        sage: {
          light: '#E8F0E8',
          DEFAULT: '#7A9E7E',
          dark: '#5C7B5F',
        },
        gold: {
          light: '#F8EFD4',
          DEFAULT: '#D4AF37',
          dark: '#A58829',
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        solid: '0.375rem 0.375rem 0 0 rgba(139, 38, 53, 0.15)',
      },
    },
  },
  plugins: [],
};