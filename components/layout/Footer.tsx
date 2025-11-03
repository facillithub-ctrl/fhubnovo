import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

// Reutilizando o Logo (poderia ser um componente importado)
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="url(#grad-footer)" />
        <defs>
          <linearGradient id="grad-footer" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#190894" />
            <stop offset="1" stopColor="#2e14ed" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold text-white">Facillit Hub</span>
    </Link>
  )
}

export default function Footer() {
  // Módulos principais baseados no PDF
  const modules = [
    { name: 'Facillit Edu', href: '#' },
    { name: 'Facillit Games', href: '#' },
    { name: 'Facillit Write', href: '#' },
    { name: 'Facillit Day', href: '#' },
    { name: 'Facillit Library', href: '#' },
    { name: 'Facillit Coach', href: '#' },
  ]

  const company = [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contato', href: '#' },
  ]

  const legal = [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Acessibilidade', href: '#' },
  ]

  return (
    <footer className="bg-brand-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Coluna 1: Logo e Social */}
          <div className="space-y-8 md:col-span-1">
            <Logo />
            <p className="text-base text-gray-300">
              Conectando tecnologia, propósito e pessoas.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Ecossistema */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Ecossistema
            </h3>
            <ul className="mt-4 space-y-4">
              {modules.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Empresa
            </h3>
            <ul className="mt-4 space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Facillit Hub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}