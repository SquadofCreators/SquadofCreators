/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6b7280 ',
        'secondary': '#120b42',
        'accent': '#f6f5fd',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        'border-spin': 'border-spin 7s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },

        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}