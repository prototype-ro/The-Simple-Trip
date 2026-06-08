import { useRef } from 'react'
import { Hero } from '@/sections/Hero'
import { ADor } from '@/sections/ADor'
import { AViradaDeChave } from '@/sections/AViradaDeChave'
import { OProduto } from '@/sections/OProduto'
import { SecoesEmDetalhe } from '@/sections/SecoesEmDetalhe'
import { ProvaReal } from '@/sections/ProvaReal'
import { AOferta } from '@/sections/AOferta'
import { Objecoes } from '@/sections/Objecoes'
import { Fechamento } from '@/sections/Fechamento'

export default function App() {
  const ofertaRef = useRef<HTMLDivElement>(null)

  const scrollToOferta = () => {
    ofertaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Hero onCtaClick={scrollToOferta} />
      <ADor />
      <AViradaDeChave />
      <OProduto />
      <SecoesEmDetalhe />
      <ProvaReal />
      <div ref={ofertaRef}>
        <AOferta />
      </div>
      <Objecoes />
      <Fechamento onCtaClick={scrollToOferta} />
    </main>
  )
}
