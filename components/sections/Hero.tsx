'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Variantes da animação (para o efeito de fade-in + slide-up)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Anima os filhos (H1, p, botões) um após o outro
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-brand-light-gray py-24 pt-32"> {/* Adicionado pt-32 para não ficar atrás do header */}
      {/* Container principal */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl text-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* H1 - Headline */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Tecnologia que <span className="text-brand-primary">simplifica</span>,{' '}
            <span className="text-brand-primary">conecta</span> e{' '}
            <span className="text-brand-primary">potencializa</span>.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl"
            variants={itemVariants}
          >
            O ecossistema digital inteligente criado para centralizar e integrar as
            principais dimensões da vida moderna: organização, produtividade,
            educação e desenvolvimento pessoal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-transparent bg-brand-secondary px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-opacity-90"
            >
              Começar Agora
            </Link>
            <Link
              href="#modulos" // Link para rolar para a próxima seção
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-brand-primary bg-transparent px-8 py-3 text-base font-medium text-brand-primary transition-colors hover:bg-brand-primary/10"
            >
              Conheça o Ecossistema
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}