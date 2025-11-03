import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// 1. Definição da fonte
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// 2. Metadados com o link para o manifesto
export const metadata: Metadata = {
  title: 'Facillit Hub - Simplifica, Conecta, Potencializa',
  description: 'O ecossistema digital inteligente para organização, produtividade e educação.',
  manifest: '/manifest.json', // <-- Este link é crucial
}

export const viewport: Viewport = {
  themeColor: '#190894',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 3. Uso da fonte e classes globais do Tailwind
    <html lang="pt-br" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-brand-dark">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}