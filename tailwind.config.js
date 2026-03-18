/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
       animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
      },
      colors: {
        // Brand palette
        pride: {
          purple:    '#7c5cbf',
          lavender:  '#b8a7e0',
          pink:      '#e891a8',
          rose:      '#f4b8cb',
          mint:      '#7dcbb8',
          teal:      '#a8d8cc',
          cream:     '#faf8f4',
          sand:      '#f5efe6',
          navy:      '#2d2a4a',
          muted:     '#6b6888',
        },
      },
      backgroundImage: {
        // Main CTA gradient (purple → pink)
        'gradient-cta':   'linear-gradient(135deg, #8b5ecf 0%, #e888a8 100%)',
        // Hero section background
        'gradient-hero':  'linear-gradient(160deg, #ede9f8 0%, #faf8f4 60%, #fdf2f6 100%)',
        // About image placeholder
        'gradient-about': 'linear-gradient(135deg, #c4aee8 0%, #e8a8c8 100%)',
        // Gallery card gradients
        'gradient-g1':    'linear-gradient(135deg, #b8b0e8 0%, #88c8b8 100%)',
        'gradient-g2':    'linear-gradient(135deg, #e8a0b8 0%, #c898e0 100%)',
        'gradient-g3':    'linear-gradient(135deg, #c8e0cc 0%, #d0c8e8 100%)',
        'gradient-g4':    'linear-gradient(135deg, #f0d060 0%, #f0a840 100%)',
        'gradient-g5':    'linear-gradient(135deg, #c0b0e0 0%, #d8c070 100%)',
        'gradient-g6':    'linear-gradient(135deg, #80d0b8 0%, #90c0d8 100%)',
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
