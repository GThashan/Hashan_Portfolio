/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'], // Set Merriweather as the serif font
      },
      colors: {
        pageBg: '#172032',
      },
    },
  },
  plugins: [],
}

