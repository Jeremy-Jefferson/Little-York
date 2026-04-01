/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4B2E73',
          dark: '#351C57',
          deep: '#221233',
        },
        accent: {
          DEFAULT: '#28D95D',
          hover: '#1FC451',
          soft: 'rgba(40, 217, 93, 0.12)',
        },
        surface: {
          base: '#120B1D',
          elevated: '#1B1228',
          card: '#241735',
          card2: '#2D1D42',
        },
        text: {
          DEFAULT: '#F3F1F6',
          muted: '#CFC8D8',
          dim: '#A999BF',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(110, 90, 138, 0.5)',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        'card': '0.75rem',
        'button': '0.5rem',
        'badge': '9999px',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
