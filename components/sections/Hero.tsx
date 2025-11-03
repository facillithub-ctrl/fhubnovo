'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  // --- MUDANÇA: Animações de COR REMOVIDAS ---
  // const backgroundColor = useTransform(...)
  // const textColor = useTransform(...)

  // 4. Animação Parallax das Imagens (Mantida)
  const mountainY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const treeY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    // CAMADA 0: O FUNDO DA PÁGINA
    <motion.section
      ref={targetRef}
      className="relative h-screen overflow-hidden" // Ocupa a tela inteira
      // MUDANÇA: Removido o style={{ backgroundColor }}
      // Agora esta seção é transparente, mostrando o fundo do layout.tsx
    >
      {/* CAMADA 1: AS MONTANHAS (Z-10) */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: mountainY }}
      >
        <Image
          src="/images/hero/fundo.svg" // Imagem das montanhas
          alt="Paisagem de montanhas ao fundo"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* CAMADA 2: O TEXTO "FACILLIT HUB" (Z-20) */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <motion.h1
          // MUDANÇA: Removido style={{ color: textColor }}
          // Adicionado 'text-brand-deep-dark' para que o texto seja sempre escuro
          className="text-center text-5xl font-extrabold uppercase tracking-wider text-brand-deep-dark md:text-7xl lg:text-8xl"
        >
          Facillit Hub
        </motion.h1>
      </div>

      {/* CAMADA 3: AS ÁRVORES DA FRENTE (Z-30) */}
      <motion.div
        className="absolute inset-0 z-30"
        style={{ y: treeY }}
      >
        <Image
          src="/images/hero/arvore.svg" // Imagem das árvores
          alt="Silhueta de árvores em primeiro plano"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>
    </motion.section>
  )
}