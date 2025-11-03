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
        'brand-primary': '#190894',
        'brand-secondary': '#2e14ed',
        'brand-dark': '#111114',
        
        // Cores-chave para o novo design
        'brand-light-gray': '#e0e0e2', // Céu / Fundo claro
        'brand-deep-dark': '#131315', // Header / Footer / Fundo escuro
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config