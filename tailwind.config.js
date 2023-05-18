/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'tdeep': '#426696cc',
        'tlight': '#658ec6cc',
        'bdeep': '#ffffffb3',
        'blight': '#ffffff4d'
      }
    },
  },
  daisyui: {
    themes: false
  },
  plugins: [require('daisyui')],
}

