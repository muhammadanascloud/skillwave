import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF75', // Replace this with the main heading color
        secondary: '#1B1B1B', // Background of cards or darker sections
        darkPrimary: '#0D0D0D', // Main dark background
        darkSecondary: '#262626', // Slightly lighter dark background
        white: '#FFFFFF', // For text or light backgrounds
        gray: {
          300: '#A3A3A3', // Lighter text or elements
          400: '#808080', // Intermediate gray
          800: '#1C1C1C', // Darker gray elements
        },
        green: {
          500: '#00FF75', // Green used in buttons
          400: '#2ECC71', // Hover green color for buttons
        },
        red: {
          500: '#E74C3C', // Best Seller tag background color
        },
      },
      fontSize: {
        '5xl': '3rem', // Match the large heading sizes
        '4xl': '2.5rem',
        '3xl': '2rem',
        '2xl': '1.75rem',
        xl: '1.25rem',
        lg: '1.125rem',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '32': '8rem',
        '64': '16rem',
      },
      animation: {
        'scroll-slow': 'scroll 30s linear infinite', // Faster scroll for mobile
        'scroll-fast': 'scroll 60s linear infinite', // Normal scroll for desktop
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
