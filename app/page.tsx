import React from 'react'
import Hero from '@/components/sections/Hero'// Importe a seção Hero

// Você pode importar outras seções aqui
// import Modules from '@/components/sections/Modules'
// import ValueProps from '@/components/sections/ValueProps'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Aqui é onde você adicionará as outras seções da Home Page 
        conforme as formos construindo.
      */}
      {/* <Modules /> */}
      {/* <ValueProps /> */}
    </>
  )
}