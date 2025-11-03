import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Importado para usar a logo
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  // --- Ícones para os Menus ---
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

// --- 1. DADOS DOS LINKS (COPIADOS DO HEADER PARA CONSISTÊNCIA) ---

const ecosystemLinks = {
  students: [
    { name: 'Facillit Games', href: '#', icon: Gamepad2 },
    { name: 'Facillit Write', href: '#', icon: Edit3 },
    { name: 'Facillit Library', href: '#', icon: Library },
    { name: 'Facillit Play', href: '#', icon: PlayCircle },
    { name: 'Facillit Test', href: '#', icon: ClipboardCheck },
    { name: 'Facillit C&C', href: '#', icon: Sparkles },
  ],
  schools: [
    { name: 'Facillit Edu', href: '#', icon: BookOpen },
    { name: 'Facillit Lab', href: '#', icon: Beaker },
  ],
  startups: [
    { name: 'Facillit Center', href: '#', icon: Building },
    { name: 'Facillit Host', href: '#', icon: Database },
    { name: 'Facillit API', href: '#', icon: Share2 },
  ],
  enterprise: [
    { name: 'Facillit Acess', href: '#', icon: Accessibility },
    { name: 'Facillit People', href: '#', icon: Users },
    { name: 'Facillit Card', href: '#', icon: CreditCard },
  ],
  global: [
    { name: 'Facillit Day', href: '#', icon: Calendar },
    { name: 'Facillit Finances', href: '#', icon: Banknote },
  ],
}

const resourcesLinks = [
  { name: 'Termos de Uso', href: '#', icon: FileText },
  { name: 'Políticas de Privacidade', href: '#', icon: Shield },
  { name: 'Uso de Dados', href: '#', icon: FileSearch },
  { name: 'Acessibilidade', href: '#', icon: Accessibility },
  { name: 'Trabalhe Conosco', href: '#', icon: Briefcase },
]

const supportLinks = [
  { name: 'Fale Conosco', href: '#', icon: Phone },
  { name: 'Perguntas Frequentes (FAQ)', href: '#', icon: HelpCircle },
  { name: 'Equipe de Vendas', href: '#', icon: Users },
]

// --- 2. COMPONENTES INTERNOS DO FOOTER ---

// Componente para a Logo Branca
function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/SVG/logotipo/all branco.svg"
        alt="Facillit Hub Logo (Branca)"
        width={160} // Um pouco maior para o rodapé
        height={36}
        priority
      />
    </Link>
  )
}

// Componente reutilizável para uma lista de links
function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string; icon: React.ElementType }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="flex items-center gap-2 text-base text-gray-300 transition-colors hover:text-white"
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// --- 3. COMPONENTE PRINCIPAL DO FOOTER ---

export default function Footer() {
  return (
    <footer
      className="bg-brand-dark text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Container principal do Mega-Footer (5 colunas em telas grandes) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Coluna 1: Logo e Social */}
          <div className="space-y-8 md:col-span-3 lg:col-span-1">
            <FooterLogo />
            <p className="text-base text-gray-300">
              Conectando tecnologia, propósito e pessoas.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Colunas do Ecossistema (divididas em 2) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
            {/* Coluna 2: Students & Global */}
            <div className="mt-12 md:mt-0 space-y-10">
              <FooterLinkList
                title="For Students"
                links={ecosystemLinks.students}
              />
              <FooterLinkList title="Global" links={ecosystemLinks.global} />
            </div>

            {/* Coluna 3: Schools, Startups, Enterprise */}
            <div className="mt-12 md:mt-0 space-y-10">
              <FooterLinkList
                title="For Schools"
                links={ecosystemLinks.schools}
              />
              <FooterLinkList
                title="For Startups"
                links={ecosystemLinks.startups}
              />
              <FooterLinkList
                title="For Enterprise"
                links={ecosystemLinks.enterprise}
              />
            </div>
          </div>

          {/* Colunas de Empresa e Suporte (divididas em 2) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-3 lg:col-span-2">
            {/* Coluna 4: Recursos */}
            <div className="mt-12 lg:mt-0">
              <FooterLinkList title="Recursos" links={resourcesLinks} />
            </div>

            {/* Coluna 5: Suporte */}
            <div className="mt-12 lg:mt-0">
              <FooterLinkList title="Suporte" links={supportLinks} />
            </div>
          </div>
        </div>

        {/* Barra Inferior de Copyright */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Facillit Hub. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}