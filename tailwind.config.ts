import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // <-- Importante
    './app/**/*.{js,ts,jsx,tsx,mdx}',        // <-- Importante
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#190894',
        'brand-secondary': '#2e14ed',
        'brand-dark': '#111114',
        'brand-light-gray': '#e0e0e2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config