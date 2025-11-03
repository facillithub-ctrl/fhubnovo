'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)

  // 1. Medir o scroll da seção inteira (do topo ao fundo)
  // Isso é o que a "animação com java/dependência" faz.
  // Estamos usando o 'framer-motion' que já está no seu package.json.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Anima do início (start start) ao fim (end end) da seção
    offset: ['start start', 'end end'],
  })

  // 2. Animação da cor de fundo (O "Céu")
  // Transição de cinza (#e0e0e2) para preto (#131315) na primeira metade do scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5], // Começa no 0% do scroll, termina nos 50%
    ['#e0e0e2', '#131315'] // De 'brand-light-gray' para 'brand-deep-dark'
  )

  // 3. Animação da cor do texto
  // Transição de preto (#131315) para branco (#FFFFFF) para manter a legibilidade
  const textColor = useTransform(
    scrollYProgress,
    [0.1, 0.4], // Começa um pouco depois e termina um pouco antes do fundo
    ['#131315', '#FFFFFF']
  )

  // 4. Animação Parallax das Imagens
  // Montanhas (fundo.svg): movem-se 20% para baixo (lento)
  const mountainY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  // Árvores (arvore.svg): movem-se 60% para baixo (rápido, para dar profundidade)
  const treeY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    // CAMADA 0: O FUNDO DA PÁGINA (CÉU ANIMADO)
    <motion.section
      ref={targetRef}
      className="relative h-screen overflow-hidden" // Ocupa a tela inteira
      style={{ backgroundColor }} // Aplica a cor de fundo animada
    >
      {/* CAMADA 1: AS MONTANHAS (Z-10) */}
      <motion.div
        className="absolute inset-0 z-10" // Camada 1
        style={{ y: mountainY }}
      >
        <Image
          src="/images/hero/fundo.svg" // Imagem das montanhas
          alt="Paisagem de montanhas ao fundo"
          fill
          className="object-cover object-bottom" // Cobre a div e alinha na base
          priority
        />
      </motion.div>

      {/* CAMADA 2: O TEXTO "FACILLIT HUB" (Z-20) */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <motion.h1
          className="text-center text-5xl font-extrabold uppercase tracking-wider text-white md:text-7xl lg:text-8xl"
          style={{ color: textColor }} // Aplica a cor de texto animada
        >
          Facillit Hub
        </motion.h1>
      </div>

      {/* CAMADA 3: AS ÁRVORES DA FRENTE (Z-30) */}
      <motion.div
        className="absolute inset-0 z-30" // Camada 3 (NA FRENTE DO TEXTO)
        style={{ y: treeY }}
      >
        <Image
          src="/images/hero/arvore.svg" // Imagem das árvores
          alt="Silhueta de árvores em primeiro plano"
          fill
          className="object-cover object-bottom" // Cobre a div e alinha na base
          priority
        />
      </motion.div>
    </motion.section>
  )
}