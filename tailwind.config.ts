import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#78350f',
        },
        accent: {
          50: '#fefdf9',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 10px 25px -3px rgb(245 158 11 / 0.15), 0 4px 6px -2px rgb(245 158 11 / 0.08)',
        warm: '0 20px 40px -12px rgb(245 158 11 / 0.25), 0 8px 16px -8px rgb(245 158 11 / 0.1)',
        glow: '0 0 20px rgb(250 204 21 / 0.6), 0 0 40px rgb(250 204 21 / 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgb(245 158 11) 0%, rgb(251 191 36) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, rgb(234 179 8) 0%, rgb(250 204 21) 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgb(245 158 11 / 0.08) 0%, rgb(234 179 8 / 0.05) 100%)',
        'gradient-warm': 'linear-gradient(135deg, rgb(255 237 213) 0%, rgb(254 240 138) 50%, rgb(253 224 71) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;