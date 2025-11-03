import React from 'react'
import Hero from '@/components/sections/Hero' // Importe a seção Hero

// Você pode importar outras seções aqui
// import Modules from '@/components/sections/Modules'
// import ValueProps from '@/components/sections/ValueProps'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ====================================================================
        ADIÇÃO: Conteúdo de teste para habilitar o scroll e ver o parallax
        ====================================================================
        Adicionei estas duas seções. Ao rolar para baixo, você verá 
        as árvores e montanhas se moverem em velocidades diferentes.
      */}

      {/* Esta div simula a primeira seção "Início" */}
      <div id="inicio" className="relative h-screen bg-brand-deep-dark text-white">
        <div className="container mx-auto max-w-7xl p-10 pt-20">
          <h2 className="text-4xl font-bold">Início</h2>
          <p className="mt-4">
            Este é o conteúdo da primeira seção. O fundo da página
            agora está escuro, como definido na animação do Hero.
          </p>
        </div>
      </div>

      {/* Esta div simula a segunda seção "Ecossistema" */}
      <div id="ecossistema" className="relative h-screen bg-neutral-800 text-white">
        <div className="container mx-auto max-w-7xl p-10 pt-20">
          <h2 className="text-4xl font-bold">Ecossistema</h2>
          <p className="mt-4">Este é o conteúdo da segunda seção.</p>
        </div>
      </div>
      
      {/* <Modules /> */}
      {/* <ValueProps /> */}
    </>
  )
}