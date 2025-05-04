/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        primary: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#334155',
          300: '#475569',
          400: '#64748b',
          500: '#0ef', // neon cyan
          600: '#0cc',
          700: '#0aa',
          800: '#088',
          900: '#066',
          950: '#044',
          light: '#0ef',
          dark: '#0cc',
        },
        secondary: {
          50: '#111827',
          100: '#1e293b',
          200: '#374151',
          300: '#4b5563',
          400: '#6b7280',
          500: '#9ca3af',
          600: '#d1d5db',
          700: '#e5e7eb',
          800: '#f3f4f6',
          900: '#f9fafb',
          950: '#fafafa',
          light: '#9ca3af',
          dark: '#d1d5db',
        },
        background: {
          light: '#0f172a', // dark navy for light mode (inverted)
          dark: '#0a0a0a',  // almost black for dark mode
        },
        text: {
          light: '#d1d5db', // light gray for light mode
          dark: '#cbd5e1',  // lighter gray for dark mode
        },
        success: {
          50: '#e6f4ea',
          100: '#c1dfc4',
          500: '#3a8d3a',
          700: '#2e6e2e',
          light: '#3a8d3a', // muted green
          dark: '#5bb85b',  // lighter muted green
        },
        warning: {
          50: '#fff7e6',
          100: '#ffe8b3',
          500: '#b38600',
          700: '#7a5900',
          light: '#b38600', // muted yellow
          dark: '#d4b300',  // lighter muted yellow
        },
        error: {
          50: '#fbe6e6',
          100: '#f1b3b3',
          500: '#a83232',
          700: '#7a2626',
          light: '#a83232', // muted red
          dark: '#d45b5b',  // lighter muted red
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};