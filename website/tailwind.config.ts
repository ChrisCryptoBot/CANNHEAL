import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CANNHEAL Brand Colors
        primary: {
          DEFAULT: '#1B4D3E', // Forest Green
          hover: '#2D7A5F',   // Sage Green
          light: '#4A9F7E',
        },
        accent: {
          DEFAULT: '#C4A962', // Warm Gold
          light: '#D4BC82',
        },
        background: {
          DEFAULT: '#F8F7F5', // Warm Off-White
          card: '#FFFFFF',    // Pure White
        },
        text: {
          primary: '#1A1A1A',   // Near Black
          secondary: '#4A4A4A', // Dark Gray
          tertiary: '#6B6B6B',  // Medium Gray
        },
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#333333',
        },
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 1.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 1.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1.75vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 2vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 2.5vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.75rem, 3vw, 2.25rem)',
        'fluid-4xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-5xl': 'clamp(2.5rem, 5vw, 4rem)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 2px 4px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.06), 0 16px 32px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
        'slide-up': 'slideUp 200ms ease-in-out',
        'slide-down': 'slideDown 200ms ease-in-out',
        'scale-up': 'scaleUp 200ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
