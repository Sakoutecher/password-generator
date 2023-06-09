/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jetbrains: 'JetBrains Mono, sans-serif',
    },
    extend: {
      translate: {
        '1/2': '-50%',
      },
    },
  },
  plugins: [],
}
