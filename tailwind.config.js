/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm amber + teal accent palette (distinctive, not generic blue/white)
        brand: {
          50: '#fdf8f0',
          100: '#faebd7',
          200: '#f5d5ae',
          300: '#efb97b',
          400: '#e89946',
          500: '#e07d1e',
          600: '#d16514',
          700: '#ae4c13',
          800: '#8b3d17',
          900: '#723316',
        },
        accent: {
          50: '#effefa',
          100: '#c7fff0',
          200: '#90ffe1',
          300: '#51f7cf',
          400: '#1de4b8',
          500: '#05c99f',
          600: '#00a382',
          700: '#05826a',
          800: '#0a6756',
          900: '#0d5548',
        },
        surface: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite',
        gradient: 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'count-up': 'countUp 1.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
