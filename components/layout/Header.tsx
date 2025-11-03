'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Importado para usar a logo
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  Menu,
  X,
  ChevronDown,
  // --- Ícones para os Menus ---
  Home,
  // Ecossistema
  Gamepad2,
  Edit3,
  Library,
  PlayCircle,
  ClipboardCheck,
  Sparkles,
  BookOpen,
  Briefcase,
  Building,
  Database,
  Share2,
  Accessibility,
  Users,
  CreditCard,
  Calendar,
  Banknote,
  Beaker, // Para Lab
  // Recursos
  FileText,
  Phone,
  Shield,
  FileSearch,
  // Suporte
  HelpCircle,
} from 'lucide-react'
import clsx from 'clsx'

// --- 1. NOVOS DADOS PARA OS MENUS (COM DESCRIÇÕES) ---

const ecosystemLinks = {
  students: [
    {
      name: 'Facillit Games',
      description: 'Aprendizado gamificado e adaptativo.',
      href: '#',
      icon: Gamepad2,
    },
    {
      name: 'Facillit Write',
      description: 'Produção e correção de textos com IA.',
      href: '#',
      icon: Edit3,
    },
    {
      name: 'Facillit Library',
      description: 'Portfólios e bibliotecas de conteúdo.',
      href: '#',
      icon: Library,
    },
    {
      name: 'Facillit Play',
      description: 'Streaming educacional e aulas.',
      href: '#',
      icon: PlayCircle,
    },
    {
      name: 'Facillit Test',
      description: 'Criação de avaliações e simulados.',
      href: '#',
      icon: ClipboardCheck,
    },
    {
      name: 'Facillit C&C',
      description: 'Orientação vocacional e de carreira.',
      href: '#',
      icon: Sparkles,
    },
  ],
  schools: [
    {
      name: 'Facillit Edu',
      description: 'Gestão acadêmica e planos de aula.',
      href: '#',
      icon: BookOpen,
    },
    {
      name: 'Facillit Lab',
      description: 'Laboratório de projetos e inovação.',
      href: '#',
      icon: Beaker,
    },
  ],
  startups: [
    {
      name: 'Facillit Center',
      description: 'Gestão integrada para sua startup.',
      href: '#',
      icon: Building,
    },
    {
      name: 'Facillit Host',
      description: 'Serviços de nuvem e hospedagem.',
      href: '#',
      icon: Database,
    },
    {
      name: 'Facillit API',
      description: 'Integre seus apps ao nosso ecossistema.',
      href: '#',
      icon: Share2,
    },
  ],
  enterprise: [
    {
      name: 'Facillit Acess',
      description: 'Soluções de acessibilidade digital.',
      href: '#',
      icon: Accessibility,
    },
    {
      name: 'Facillit People',
      description: 'Gestão de talentos e bem-estar.',
      href: '#',
      icon: Users,
    },
    {
      name: 'Facillit Card',
      description: 'Solução de pagamentos corporativos.',
      href: '#',
      icon: CreditCard,
    },
  ],
  global: [
    {
      name: 'Facillit Day',
      description: 'Produtividade e rotina pessoal.',
      href: '#',
      icon: Calendar,
    },
    {
      name: 'Facillit Finances',
      description: 'Controle financeiro inteligente.',
      href: '#',
      icon: Banknote,
    },
  ],
}

const resourcesLinks = [
  {
    name: 'Termos de Uso',
    description: 'Regras de utilização da plataforma.',
    href: '#',
    icon: FileText,
  },
  {
    name: 'Políticas de Privacidade',
    description: 'Nossas políticas de privacidade.',
    href: '#',
    icon: Shield,
  },
  {
    name: 'Uso de Dados',
    description: 'Como tratamos seus dados.',
    href: '#',
    icon: FileSearch,
  },
  {
    name: 'Acessibilidade',
    description: 'Nosso compromisso com a inclusão.',
    href: '#',
    icon: Accessibility,
  },
  {
    name: 'Trabalhe Conosco',
    description: 'Faça parte da nossa equipe.',
    href: '#',
    icon: Briefcase,
  },
]

const supportLinks = [
  {
    name: 'Fale Conosco',
    description: 'Entre em contato por e-mail ou chat.',
    href: '#',
    icon: Phone,
  },
  {
    name: 'Perguntas Frequentes (FAQ)',
    description: 'Respostas para suas dúvidas.',
    href: '#',
    icon: HelpCircle,
  },
  {
    name: 'Equipe de Vendas',
    description: 'Converse com um especialista.',
    href: '#',
    icon: Users,
  },
]

// --- 2. COMPONENTE LOGO ATUALIZADO ---
function Logo() {
  return (
    <Link href="/" className="flex flex-shrink-0 items-center">
      {/* Imagem da logo vinda da pasta public */}
      <Image
        src="/images/SVG/logotipo/azul.svg"
        alt="Facillit Hub Logo"
        width={140} // Largura original da logo
        height={32} // Altura original da logo
        priority // Otimiza o carregamento da logo
      />
    </Link>
  )
}

// --- 3. COMPONENTES DE MENU REUTILIZÁVEIS (COM DESCRIÇÃO) ---

/**
 * Componente de item de menu com ícone, nome e descrição
 */
function DropdownItem({
  item,
}: {
  item: {
    name: string
    href: string
    description: string
    icon: React.ElementType
  }
}) {
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
      {/* Nome e Descrição */}
      <div>
        <p className="text-base font-medium text-brand-dark">{item.name}</p>
        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
      </div>
    </Link>
  )
}

/**
 * Componente de Popover genérico para menus simples (Recursos, Suporte)
 */
function SimplePopoverMenu({
  buttonText,
  links,
}: {
  buttonText: string
  links: {
    name: string
    href: string
    description: string
    icon: React.ElementType
  }[]
}) {
  return (
    // *** CORREÇÃO AQUI: Mudado de 'relative' para 'static' ***
    <Popover className="static">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              'group inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium outline-none transition-colors',
              open
                ? 'text-brand-primary'
                : 'text-brand-dark hover:text-brand-primary'
            )}
          >
            <span>{buttonText}</span>
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
            {/* Este painel agora se centraliza na TELA, não no botão */}
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {/* Padding e gap aumentados para "alívio" */}
                <div className="relative flex flex-col gap-4 bg-white p-7">
                  {links.map((item) => (
                    <DropdownItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

// --- 4. COMPONENTE HEADER PRINCIPAL ---

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Efeito de scroll para transparência
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
        isScrolled
          ? 'bg-white/90 shadow-md backdrop-blur-sm' // Efeito de transparência/blur quando scrollado
          : 'bg-transparent' // Totalmente transparente no topo
      )}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- LAYOUT ATUALIZADO (Esquerda, Centro, Direita) --- */}
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Esquerda: Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Centro: Navegação Desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="px-3 py-2 text-base font-medium text-brand-dark transition-colors hover:text-brand-primary"
            >
              Início
            </Link>

            {/* Dropdown Ecossistemas (Largo e com colunas) */}
            {/* *** CORREÇÃO AQUI: Mudado de 'relative' para 'static' *** */}
            <Popover className="static">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      'group inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium outline-none transition-colors',
                      open
                        ? 'text-brand-primary'
                        : 'text-brand-dark hover:text-brand-primary'
                    )}
                  >
                    <span>Ecossistemas</span>
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
                    {/* Este painel agora se centraliza na TELA, não no botão */}
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-5xl -translate-x-1/2 transform px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        {/* Padding e gaps aumentados para "alívio" */}
                        <div className="relative grid gap-x-12 gap-y-12 bg-white p-10 lg:grid-cols-3">
                          {/* Coluna 1: Students */}
                          <div className="flex flex-col gap-5">
                            <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">
                              FOR STUDENTS
                            </h3>
                            {ecosystemLinks.students.map((item) => (
                              <DropdownItem key={item.name} item={item} />
                            ))}
                          </div>
                          {/* Coluna 2: Schools & Startups */}
                          <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">
                                FOR SCHOOLS
                              </h3>
                              {ecosystemLinks.schools.map((item) => (
                                <DropdownItem key={item.name} item={item} />
                              ))}
                            </div>
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">
                                FOR STARTUPS
                              </h3>
                              {ecosystemLinks.startups.map((item) => (
                                <DropdownItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                          {/* Coluna 3: Enterprise & Global */}
                          <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">
                                FOR ENTERPRISE
                              </h3>
                              {ecosystemLinks.enterprise.map((item) => (
                                <DropdownItem key={item.name} item={item} />
                              ))}
                            </div>
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">
                                GLOBAL
                              </h3>
                              {ecosystemLinks.global.map((item) => (
                                <DropdownItem key={item.name} item={item} />
                              ))}
                            </div>
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
              className="px-3 py-2 text-base font-medium text-brand-dark transition-colors hover:text-brand-primary"
            >
              Preços
            </Link>

            {/* Dropdown Recursos */}
            <SimplePopoverMenu
              buttonText="Recursos"
              links={resourcesLinks}
            />

            {/* Dropdown Suporte */}
            <SimplePopoverMenu buttonText="Suporte" links={supportLinks} />
          </div>

          {/* Direita: CTAs Desktop */}
          <div className="hidden items-center justify-end md:flex">
            <Link
              href="#"
              className="whitespace-nowrap px-4 py-2 text-base font-medium text-brand-dark transition-colors hover:text-brand-primary"
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
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-dark/70 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- 5. PAINEL DO MENU MOBILE ATUALIZADO --- */}
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
                <nav className="grid gap-y-7">
                  <Link
                    href="/"
                    className="-m-3 block rounded-md p-3 text-base font-medium text-brand-dark hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Início
                  </Link>

                  {/* Disclosure Ecossistemas (Mobile) */}
                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-brand-dark hover:bg-gray-50">
                          Ecossistemas
                          <ChevronDown
                            className={clsx(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                          {[
                            ...ecosystemLinks.students,
                            ...ecosystemLinks.schools,
                            ...ecosystemLinks.startups,
                            ...ecosystemLinks.enterprise,
                            ...ecosystemLinks.global,
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

                  <Link
                    href="#"
                    className="-m-3 block rounded-md p-3 text-base font-medium text-brand-dark hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Preços
                  </Link>

                  {/* Disclosure Recursos (Mobile) */}
                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-brand-dark hover:bg-gray-50">
                          Recursos
                          <ChevronDown
                            className={clsx(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                          {resourcesLinks.map((item) => (
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

                  {/* Disclosure Suporte (Mobile) */}
                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-brand-dark hover:bg-gray-50">
                          Suporte
                          <ChevronDown
                            className={clsx(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                          {supportLinks.map((item) => (
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
                </nav>
              </div>
            </div>
            {/* Botões do Mobile */}
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
                  <a
                    href="#"
                    className="text-brand-primary hover:text-brand-secondary"
                  >
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