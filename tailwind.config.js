module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
      opacity: ['disabled'],
      borderRadius: ['first', 'last']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
