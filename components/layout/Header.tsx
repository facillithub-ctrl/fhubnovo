'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  Menu,
  X,
  ChevronDown,
  BookOpen, // Edu
  Gamepad2, // Games
  Edit3, // Write
  Calendar, // Day
  Banknote, // Finances
  Users, // Corporativas
  Building, // Gestão
  Library, // Library
  Sparkles, // Coach
  ClipboardCheck, // Test
  PlayCircle, // Play
} from 'lucide-react'
import clsx from 'clsx'

// NOVOS DADOS (Divididos em 3 colunas)
const solutions = {
  column1: [
    {
      name: 'Facillit Edu',
      description: 'Gestão acadêmica e planos de aula.',
      href: '#',
      icon: BookOpen,
    },
    {
      name: 'Facillit Games',
      description: 'Aprendizado gamificado e adaptativo.',
      href: '#',
      icon: Gamepad2,
    },
    {
      name: 'Facillit Write',
      description: 'Produção e correção de textos.',
      href: '#',
      icon: Edit3,
    },
  ],
  column2: [
    {
      name: 'Facillit Day',
      description: 'Produtividade e rotina pessoal.',
      href: '#',
      icon: Calendar,
    },
    {
      name: 'Facillit Finances',
      description: 'Controle financeiro pessoal.',
      href: '#',
      icon: Banknote,
    },
    {
      name: 'Facillit Library',
      description: 'Portfólios e leituras guiadas.',
      href: '#',
      icon: Library,
    },
    {
      name: 'Facillit Play',
      description: 'Streaming educacional e aulas.',
      href: '#',
      icon: PlayCircle,
    },
  ],
  column3: [
    {
      name: 'Gestão Pedagógica (Escolas)',
      description: 'Integração de notas e currículo.',
      href: '#',
      icon: Building,
    },
    {
      name: 'Soluções Corporativas',
      description: 'Produtividade e bem-estar.',
      href: '#',
      icon: Users,
    },
    {
      name: 'Facillit Coach & Career',
      description: 'Orientação vocacional e metas.',
      href: '#',
      icon: Sparkles,
    },
    {
      name: 'Facillit Test',
      description: 'Criação de avaliações e simulados.',
      href: '#',
      icon: ClipboardCheck,
    },
  ],
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="url(#grad)" />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#190894" />
            <stop offset="1" stopColor="#2e14ed" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold text-brand-dark">Facillit Hub</span>
    </Link>
  )
}

// Componente para o item do Dropdown (para ficar mais limpo)
function SolutionItem({ item }: { item: typeof solutions.column1[0] }) {
  return (
    <Link
      href={item.href}
      className="-m-3 flex items-start gap-4 rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
    >
      {/* Ícone Estilizado */}
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10">
          <item.icon className="h-6 w-6 text-brand-primary" />
        </div>
      </div>
      <div>
        <p className="text-base font-medium text-brand-dark">{item.name}</p>
        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
      </div>
    </Link>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Efeito de scroll (você pediu, já está aqui)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        // Efeito de scroll:
        isScrolled
          ? 'bg-white/90 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Popover className="relative">
              {/* --- LINHA CORRIGIDA ABAIXO --- */}
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      'group inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium outline-none transition-colors',
                      open
                        ? 'text-brand-primary'
                        : 'text-brand-dark hover:text-brand-primary',
                      isScrolled ? '' : 'text-brand-dark' // Garante que o texto seja legível no fundo transparente
                    )}
                  >
                    <span>Ecossistema</span>
                    <ChevronDown
                      className={clsx(
                        'h-5 w-5 transition-transform',
                        open ? 'rotate-180' : ''
                      )}
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {/* Alterado para 3 colunas (max-w-4xl e grid-cols-3) */}
                    <Popover.Panel className="absolute -left-1/2 z-10 mt-3 w-screen max-w-4xl transform px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-3">
                          {/* Coluna 1 */}
                          <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold tracking-wide text-gray-500">
                              PARA ESTUDANTES
                            </h3>
                            {solutions.column1.map((item) => (
                              <SolutionItem key={item.name} item={item} />
                            ))}
                          </div>
                          {/* Coluna 2 */}
                          <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold tracking-wide text-gray-500">
                              PARA O DIA A DIA
                            </h3>
                            {solutions.column2.map((item) => (
                              <SolutionItem key={item.name} item={item} />
                            ))}
                          </div>
                          {/* Coluna 3 */}
                          <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold tracking-wide text-gray-500">
                              PARA INSTITUIÇÕES
                            </h3>
                            {solutions.column3.map((item) => (
                              <SolutionItem key={item.name} item={item} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              href="#"
              className={clsx(
                'px-3 py-2 text-base font-medium transition-colors hover:text-brand-primary',
                isScrolled ? 'text-brand-dark' : 'text-brand-dark'
              )}
            >
              Soluções
            </Link>
            <Link
              href="#"
              className={clsx(
                'px-3 py-2 text-base font-medium transition-colors hover:text-brand-primary',
                isScrolled ? 'text-brand-dark' : 'text-brand-dark'
              )}
            >
              Preços
            </Link>
          </div>

          {/* CTAs Desktop (Agora estilizados) */}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="#"
              className={clsx(
                'whitespace-nowrap px-4 py-2 text-base font-medium transition-colors hover:text-brand-primary',
                isScrolled ? 'text-brand-dark' : 'text-brand-dark'
              )}
            >
              Login
            </Link>
            <Link
              href="#"
              className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-brand-secondary px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-opacity-90"
            >
              Começar Agora
            </Link>
          </div>

          {/* Botão Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={clsx(
                'inline-flex items-center justify-center rounded-md p-2',
                isScrolled ? 'text-gray-400 hover:bg-gray-100' : 'text-brand-dark'
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Painel do Menu Mobile --- */}
      <Transition
        show={isMobileMenuOpen}
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-brand-dark hover:bg-gray-50">
                          Ecossistema
                          <ChevronDown
                            className={clsx(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                          {[
                            ...solutions.column1,
                            ...solutions.column2,
                            ...solutions.column3,
                          ].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Link href="#" className="-m-3 block rounded-md p-3 text-base font-medium text-brand-dark hover:bg-gray-50">
                    Soluções
                  </Link>
                  <Link href="#" className="-m-3 block rounded-md p-3 text-base font-medium text-brand-dark hover:bg-gray-50">
                    Preços
                  </Link>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-brand-secondary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-90"
                >
                  Começar Agora
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Já tem uma conta?{' '}
                  <a href="#" className="text-brand-primary hover:text-brand-secondary">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  )
}