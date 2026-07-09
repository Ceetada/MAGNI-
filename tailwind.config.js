/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Nimbus Sans TW01',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          950: '#08090b',
          900: '#0c0d10',
          850: '#111217',
          800: '#17181e',
          700: '#22242c',
          600: '#33353f',
          500: '#4a4d59',
        },
        gold: {
          50: '#fff9e8',
          100: '#fef0c2',
          200: '#fde28a',
          300: '#fdd052',
          400: '#fcc02a',
          500: '#f5a81c',
          600: '#e08a0e',
          700: '#b8690c',
          800: '#94540f',
          900: '#7a4610',
        },
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)', filter: 'blur(6px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'fade-down': {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'hero-rise': {
          from: { opacity: '0', transform: 'translateY(64px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'flow-dash': {
          to: { strokeDashoffset: '-200' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-down': 'fade-down 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'hero-rise': 'hero-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'flow-dash': 'flow-dash 6s linear infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
