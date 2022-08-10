module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [require('daisyui')],
}
