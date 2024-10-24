/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        crazy: 'var(--crazy)',
      },
      colors: {
        grey: 'var(--grey)',
        pink: 'var(--pink)',
        blue: 'var(--blue)',
        white: 'var(--bg)',
      }
    },
  },
  plugins: [],
}
