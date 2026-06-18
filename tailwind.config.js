/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17212b',
        paper: '#f7f8f5',
        basil: '#2e6b57',
        coral: '#d76b55',
        marigold: '#d8a23a',
        cloud: '#e8eee9',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 33, 43, 0.12)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        reveal: 'reveal 720ms ease both',
        shimmer: 'shimmer 9s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
