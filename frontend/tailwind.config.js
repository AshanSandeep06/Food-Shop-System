/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-colors": {
            100: '#fafaff',
            200: '#66347F',
            300: '#865DFF'
        },
      },

      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "ubuntu": ['Ubuntu', "sans-serif"]
      }
    },
  },
  plugins: [],
}

