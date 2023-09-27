/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'overpass': ['Overpass', 'sans']
    },
    extend: {
      colors: {
        'orange': '#fb7413',
        'lightgrey': '#959eac',
        'mediumgrey': '	#7c8798',
        'darkblue': '#252d37',
        'verydarkblue': '	#121417'
      },
    }
  },
  plugins: [],
}

