import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './index.tsx'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0a0b0f',
          panel: '#0f1117',
          text: '#e6e7ea',
          muted: '#9aa3b2',
          accent: '#22d3ee'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.35)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)',
        heroGradient: 'linear-gradient(135deg, #12131a 0%, #0b0d13 45%, #101522 100%)'
      }
    }
  },
  plugins: []
};

export default config;
