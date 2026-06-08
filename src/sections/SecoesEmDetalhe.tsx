// src/sections/SecoesEmDetalhe.tsx
// Assets: /public/screenshots/detail-1.svg, detail-2.svg, detail-3.svg
// Replace .svg with .jpg when real screenshots are added.

import { motion } from 'framer-motion'

const blocks = [
  {
    kicker: 'Roteiro & Calendário',
    headline: 'Cada dia da sua viagem, organizado.',
    body: 'Atividades por cidade, horário e data.',
    image: '/screenshots/detail-1.svg',
    imageAlt: 'Roteiro e Calendário',
    reverse: false,
  },
  {
    kicker: 'Budget & Controle',
    headline: 'Você sabe exatamente quanto ainda tem.',
    body: 'Câmbio automático, budget por categoria, balanço em tempo real.',
    image: '/screenshots/detail-2.svg',
    imageAlt: 'Budget e Controle',
    reverse: true,
  },
  {
    kicker: 'Tudo Incluso',
    headline: 'Do passaporte ao check-out.',
    body: 'Documentos por viajante, transportes, hospedagens.',
    image: '/screenshots/detail-3.svg',
    imageAlt: 'Tudo Incluso',
    reverse: false,
  },
]

export function SecoesEmDetalhe() {
  return (
    <section className="py-32 px-6 bg-blanc">
      <div className="max-w-5xl mx-auto space-y-32">
        {blocks.map((block, i) => (
          <motion.div
            key={block.kicker}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
          >
            {/* Text */}
            <div className="flex-1 space-y-4">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-forge/40">
                {block.kicker}
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-forge leading-snug">
                {block.headline}
              </h3>
              <p className="font-sans text-forge/60 text-base leading-relaxed">
                {block.body}
              </p>
            </div>

            {/* Screenshot */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-sm">
              <img
                src={block.image}
                alt={block.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
