import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slateMist: '#eef2ff',
        sunrise: '#ff6b35',
        lagoon: '#14b8a6',
        night: '#111827'
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(20, 184, 166, 0.45)'
      },
      backgroundImage: {
        'grain-gradient':
          'radial-gradient(circle at 20% 20%, rgba(20,184,166,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,107,53,0.25), transparent 40%), radial-gradient(circle at 50% 100%, rgba(59,130,246,0.15), transparent 35%)'
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)'],
        body: ['var(--font-plus-jakarta)']
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-16px,0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.38' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
