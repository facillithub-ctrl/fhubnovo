import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer' // Importando o Footer

// 1. Definição da fonte
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// 2. Metadados
export const metadata: Metadata = {
  title: 'Facillit Hub - Simplifica, Conecta, Potencializa',
  description: 'O ecossistema digital inteligente para organização, produtividade e educação.',
  manifest: '/manifest.json',
}

// 3. Viewport (Corrigido para a nova cor)
export const viewport: Viewport = {
  themeColor: '#131315',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.variable}>
      {/* 4. Body ATUALIZADO */}
      <body className="font-sans antialiased bg-brand-light-gray text-brand-deep-dark">
        <Header />
        {/* Adiciona padding-bottom (pb-20 = 80px) para compensar o footer fixo */}
        <main className="pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}