'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Variantes da animação para o TEXTO
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2, // Começa depois da mascote
    },
  },
}

const textItemVariants = {
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
  // 1. Criamos uma referência para a seção <section>
  const targetRef = useRef<HTMLDivElement>(null)

  // 2. Medimos o progresso do scroll DENTRO desta seção
  // 'start start' = quando o topo da seção bate no topo da tela
  // 'end start' = quando o fundo da seção bate no topo da tela
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  // 3. Transformamos o progresso do scroll (0 a 1) em movimento
  
  // A mascote se moverá 20% para baixo (y) e 25% para a direita (x)
  // em uma velocidade diferente do scroll, criando o parallax.
  const mascotY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const mascotX = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  // O texto se moverá 15% para baixo, mais rápido, para dar profundidade
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    // Adicionamos a referência aqui e overflow-hidden
    <section
      ref={targetRef}
      className="relative flex min-h-screen items-center justify-center bg-brand-light-gray pt-32 overflow-hidden" // overflow-hidden é crucial
    >
      {/* Container principal com layout de 2 colunas em telas grandes */}
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        
        {/* Coluna 1: Texto Animado (com parallax) */}
        <motion.div
          style={{ y: textY }} // Aplica o movimento parallax no container do texto
          className="max-w-xl text-center md:text-left"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* H1 - Headline */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl md:text-6xl"
            variants={textItemVariants}
          >
            Tecnologia que <span className="text-brand-primary">simplifica</span>,{' '}
            <span className="text-brand-primary">conecta</span> e{' '}
            <span className="text-brand-primary">potencializa</span>.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-6 text-lg text-gray-600 sm:text-xl"
            variants={textItemVariants}
          >
            O ecossistema digital inteligente criado para centralizar e integrar as
            principais dimensões da vida moderna.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start"
            variants={textItemVariants}
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

      {/* Coluna 2: Mascote (Posicionada absolutamente para o parallax) */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-2/3 max-w-2xl opacity-80 md:opacity-100 lg:-bottom-40 lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        style={{ y: mascotY, x: mascotX }} // Aplica o parallax
      >
        <Image
          // *** IMPORTANTE ***
          // Você precisa colocar sua mascote com fundo transparente aqui
          src="/images/mascote-hero.png" 
          alt="Mascote Facillit Hub"
          width={1024}
          height={1024}
          priority
          className="object-contain"
        />
      </motion.div>
    </section>
  )
}