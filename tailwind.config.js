/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'romantic': {
          50: '#FFF5F7',
          100: '#FFF0F3',
          200: '#FDE4EA',
          300: '#FECDD6',
          400: '#FCA5BB',
          500: '#F87293',
          600: '#E63946',
          700: '#CF2948',
          800: '#A31D38',
          900: '#85172C',
        },
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};