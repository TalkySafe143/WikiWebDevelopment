/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["../resources/templates/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            '1/6': "16%"
          },
          maxHeight: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            
          }
      },
    },
    plugins: [],
  }