// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX files in src for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'kohli-blue': '#003366',    // Dark Blue
        'kohli-gold': '#FFD700',    // Gold
        'kohli-red': '#B22222',     // Firebrick Red (for accents/highlights)
        'kohli-light-gray': '#f8f8f8', // Light background
        'kohli-dark-gray': '#333333', // Dark text
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Example font stack
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};