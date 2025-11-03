'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  Menu,
  X,
  ChevronDown,
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
  Beaker,
  FileText,
  Phone,
  Shield,
  FileSearch,
  HelpCircle,
} from 'lucide-react'
import clsx from 'clsx'

// --- 1. DADOS PARA OS MENUS (Sem alteração) ---
const ecosystemLinks = {
  students: [
    { name: 'Facillit Games', description: 'Aprendizado gamificado e adaptativo.', href: '#', icon: Gamepad2 },
    { name: 'Facillit Write', description: 'Produção e correção de textos com IA.', href: '#', icon: Edit3 },
    { name: 'Facillit Library', description: 'Portfólios e bibliotecas de conteúdo.', href: '#', icon: Library },
    { name: 'Facillit Play', description: 'Streaming educacional e aulas.', href: '#', icon: PlayCircle },
    { name: 'Facillit Test', description: 'Criação de avaliações e simulados.', href: '#', icon: ClipboardCheck },
    { name: 'Facillit C&C', description: 'Orientação vocacional e de carreira.', href: '#', icon: Sparkles },
  ],
  schools: [
    { name: 'Facillit Edu', description: 'Gestão acadêmica e planos de aula.', href: '#', icon: BookOpen },
    { name: 'Facillit Lab', description: 'Laboratório de projetos e inovação.', href: '#', icon: Beaker },
  ],
  startups: [
    { name: 'Facillit Center', description: 'Gestão integrada para sua startup.', href: '#', icon: Building },
    { name: 'Facillit Host', description: 'Serviços de nuvem e hospedagem.', href: '#', icon: Database },
    { name: 'Facillit API', description: 'Integre seus apps ao nosso ecossistema.', href: '#', icon: Share2 },
  ],
  enterprise: [
    { name: 'Facillit Acess', description: 'Soluções de acessibilidade digital.', href: '#', icon: Accessibility },
    { name: 'Facillit People', description: 'Gestão de talentos e bem-estar.', href: '#', icon: Users },
    { name: 'Facillit Card', description: 'Solução de pagamentos corporativos.', href: '#', icon: CreditCard },
  ],
  global: [
    { name: 'Facillit Day', description: 'Produtividade e rotina pessoal.', href: '#', icon: Calendar },
    { name: 'Facillit Finances', description: 'Controle financeiro inteligente.', href: '#', icon: Banknote },
  ],
}

const resourcesLinks = [
  { name: 'Termos de Uso', description: 'Regras de utilização da plataforma.', href: '#', icon: FileText },
  { name: 'Políticas de Privacidade', description: 'Nossas políticas de privacidade.', href: '#', icon: Shield },
  { name: 'Uso de Dados', description: 'Como tratamos seus dados.', href: '#', icon: FileSearch },
  { name: 'Acessibilidade', description: 'Nosso compromisso com a inclusão.', href: '#', icon: Accessibility },
  { name: 'Trabalhe Conosco', description: 'Faça parte da nossa equipe.', href: '#', icon: Briefcase },
]

const supportLinks = [
  { name: 'Fale Conosco', description: 'Entre em contato por e-mail ou chat.', href: '#', icon: Phone },
  { name: 'Perguntas Frequentes (FAQ)', description: 'Respostas para suas dúvidas.', href: '#', icon: HelpCircle },
  { name: 'Equipe de Vendas', description: 'Converse com um especialista.', href: '#', icon: Users },
]


// --- 2. COMPONENTES DE MENU REUTILIZÁVEIS (MUDANÇA: Tema Claro) ---

function DropdownItem({
  item,
}: {
  item: { name: string; href: string; description: string; icon: React.ElementType }
}) {
  return (
    <Link
      href={item.href}
      // MUDANÇA: hover:bg-neutral-100 (cinza claro)
      className="-m-3 flex items-start gap-4 rounded-lg p-3 transition duration-150 ease-in-out hover:bg-neutral-100"
    >
      <div className="flex-shrink-0">
        {/* MUDANÇA: bg-neutral-100 (cinza claro) */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100"> 
          {/* MUDANÇA: text-neutral-700 (preto/cinza escuro) */}
          <item.icon className="h-6 w-6 text-neutral-700" /> 
        </div>
      </div>
      <div>
        {/* MUDANÇA: text-neutral-900 (preto) */}
        <p className="text-base font-medium text-neutral-900">{item.name}</p>
        {/* MUDANÇA: text-neutral-600 (cinza escuro) */}
        <p className="mt-1 text-sm text-neutral-600">{item.description}</p> 
      </div>
    </Link>
  )
}

function PillPopoverMenu({
  buttonText,
  links,
}: {
  buttonText: string
  links: { name: string; href: string; description: string; icon: React.ElementType }[]
}) {
  return (
    <Popover className="static">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              'group inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium outline-none transition-colors',
              open
                ? 'bg-neutral-600 text-white' 
                : 'text-neutral-200 hover:text-white hover:bg-neutral-700/80'
            )}
          >
            <span>{buttonText}</span>
            <ChevronDown
              className={clsx('h-4 w-4 transition-transform', open ? 'rotate-180' : '')}
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
            {/* MUDANÇA: Painel do Dropdown (Tema Claro) */}
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {/* MUDANÇA: bg-white (fundo branco/cinza) */}
                <div className="relative flex flex-col gap-4 bg-brand-light-gray p-7"> 
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


// --- 3. COMPONENTE HEADER PRINCIPAL ---

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50',
        'bg-transparent'
      )}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          
          {/* Coluna 1: Logo Flutuante (Preta) */}
          <div className="flex-1 md:flex">
             <Link href="/" className="flex flex-shrink-0 items-center">
              <span className="sr-only">Facillit Hub</span>
              {/* MUDANÇA: Logo trocada. 
                O caminho que você passou ('public/images/logos/F/isologo.png') não foi encontrado.
                Estou usando 'public/images/PNG/isologo/vec-preta F.png' como exemplo. 
                Por favor, ajuste o 'src' para o caminho correto que você deseja.
              */}
              <img
                className="h-8 w-auto"
                src={"/images/logos/F/isologo.png"} // MUDANÇA AQUI
                alt="Facillit Hub Logo"
              />
            </Link>
          </div>

          {/* Coluna 2: Navegação Central (Pill Escuro) */}
          <div className="hidden md:flex flex-none items-center justify-center gap-1 rounded-full bg-brand-deep-dark px-3 py-2 shadow-lg">
            
            <Link
              href="/"
              className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-700/80 hover:text-white"
            >
              Início
            </Link>

            {/* Dropdown Ecossistema (Texto Claro) */}
            <Popover className="static">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      'group inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium outline-none transition-colors',
                      open
                        ? 'bg-neutral-600 text-white' 
                        : 'text-neutral-200 hover:text-white hover:bg-neutral-700/80'
                    )}
                  >
                    <span>Ecossistema</span>
                    <ChevronDown className={clsx('h-4 w-4 transition-transform', open ? 'rotate-180' : '')} />
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
                    {/* MUDANÇA: Painel do Dropdown (Tema Claro) */}
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-5xl -translate-x-1/2 transform px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        {/* MUDANÇA: bg-white */}
                        <div className="relative grid gap-x-12 gap-y-12 bg-brand-light-gray p-6 lg:grid-cols-3">
                          <div className="flex flex-col gap-5">
                            {/* MUDANÇA: text-gray-500 */}
                            <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">FOR STUDENTS</h3>
                            {ecosystemLinks.students.map((item) => <DropdownItem key={item.name} item={item} />)}
                          </div>
                          <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">FOR SCHOOLS</h3>
                              {ecosystemLinks.schools.map((item) => <DropdownItem key={item.name} item={item} />)}
                            </div>
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">FOR STARTUPS</h3>
                              {ecosystemLinks.startups.map((item) => <DropdownItem key={item.name} item={item} />)}
                            </div>
                          </div>
                          <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">FOR ENTERPRISE</h3>
                              {ecosystemLinks.enterprise.map((item) => <DropdownItem key={item.name} item={item} />)}
                            </div>
                            <div className="flex flex-col gap-5">
                              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500">GLOBAL</h3>
                              {ecosystemLinks.global.map((item) => <DropdownItem key={item.name} item={item} />)}
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
              className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-700/80 hover:text-white"
            >
              Preços
            </Link>

            <PillPopoverMenu buttonText="Recursos" links={resourcesLinks} />
            <PillPopoverMenu buttonText="Suporte" links={supportLinks} />
          </div>

          {/* Coluna 3: CTAs Flutuantes */}
          <div className="hidden flex-1 items-center justify-end md:flex">
            
            <Link
              href="#"
              className={clsx(
                'whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors',
                'text-black hover:text-neutral-700'
              )}
            >
              Entrar
            </Link>
            
            <Link
              href="#"
              className={clsx(
                'ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent px-5 py-2 text-sm font-medium shadow-lg transition-colors',
                'bg-brand-deep-dark text-white hover:bg-neutral-800'
              )}
            >
              Criar conta
            </Link>
          </div>

          {/* Botão Mobile (Alinhado à direita) */}
          <div className="flex items-center md:hidden w-full justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={clsx(
                'inline-flex items-center justify-center rounded-md p-2',
                'text-black hover:bg-black/5'
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- 4. PAINEL DO MENU MOBILE (MUDANÇA: Tema Claro) --- */}
      {/* O menu mobile agora também terá o tema claro para ser consistente */}
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
          {/* MUDANÇA: Fundo branco/cinza claro */}
          <div className="divide-y-2 divide-neutral-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    // MUDANÇA: Tema claro
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-neutral-500 hover:bg-neutral-100"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-7">
                  <Link
                    href="/"
                    // MUDANÇA: Tema claro
                    className="-m-3 block rounded-md p-3 text-base font-medium text-neutral-900 hover:bg-neutral-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Início
                  </Link>
                  
                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        {/* MUDANÇA: Tema claro */}
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                          Ecossistemas
                          <ChevronDown className={clsx(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} />
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
                              // MUDANÇA: Tema claro
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
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
                    // MUDANÇA: Tema claro
                    className="-m-3 block rounded-md p-3 text-base font-medium text-neutral-900 hover:bg-neutral-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Preços
                  </Link>

                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        {/* MUDANÇA: Tema claro */}
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                          Recursos
                          <ChevronDown className={clsx(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                          {resourcesLinks.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              // MUDANÇA: Tema claro
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-m-3">
                    {({ open }) => (
                      <>
                        {/* MUDANÇA: Tema claro */}
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3-5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                          Suporte
                          <ChevronDown className={clsx(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                          {supportLinks.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              // MUDANÇA: Tema claro
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
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
            
            <div className="space-y-6 py-6 px-5">
              <div>
                {/* MUDANÇA: Botão CTA escuro (como na imagem) */}
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-brand-deep-dark px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-neutral-800"
                >
                  Criar conta
                </a>
                {/* MUDANÇA: Tema claro */}
                <p className="mt-6 text-center text-base font-medium text-neutral-500">
                  Já tem uma conta?{' '}
                  <a href="#" className="text-neutral-800 hover:text-black">
                    Entrar
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