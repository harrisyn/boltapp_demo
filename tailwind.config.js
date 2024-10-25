/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Clash Display', 'Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'cream-50': '#FAF7F2',
        primary: {
          50: '#EBF9FA',
          100: '#D7F3F5',
          500: '#0E7C86',
          600: '#0B6169',
          700: '#084A50',
        },
        accent: {
          400: '#FFB800',
          500: '#E6A600',
        }
      }
    },
  },
  plugins: [],
}