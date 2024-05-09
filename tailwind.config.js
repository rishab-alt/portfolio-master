module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: '#ff5722',
        secondary: '#3f51b5',
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        // Add custom font sizes here
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
  },
  variants: {
    extend: {
      // Add custom variants here
    },
  },
  plugins: [
    // Add custom plugins here
  ],
}
