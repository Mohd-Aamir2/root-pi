import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#14183A', sky: '#EAF3FF', halo: '#F2B544', iris: '#5B5BD6', mist: '#F6F8FD', line: '#E3E8F4' },
      fontFamily: { sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
export default config;
