/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /glass-(card|pill|button)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};