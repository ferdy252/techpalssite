/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'tech-line': 'tech-line 4s ease-in-out infinite',
        'tech-line-vertical': 'tech-line-vertical 4s ease-in-out infinite',
        'digital-rain': 'digital-rain 2s linear infinite',
        'float-0': 'float 20s ease-in-out infinite',
        'float-1': 'float 25s ease-in-out infinite reverse',
        'float-2': 'float 30s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'tech-line': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 }
        },
        'tech-line-vertical': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 }
        },
        'digital-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      utilities: {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
    },
  },
  plugins: [],
};
