// src/sections/ProvaReal.tsx
// No external assets required.

import { motion } from 'framer-motion'

const contexts = [
  { label: 'Brasil, na estrada', description: 'Rodovias, cidades pequenas, improviso com sistema.' },
  { label: 'Europa, um mês', description: 'Dez países, dois viajantes, zero planilha perdida.' },
  { label: 'O outro lado do mundo', description: 'Fuso, idioma, moeda — tudo no mesmo lugar.' },
]

export function ProvaReal() {
  return (
    <section className="py-32 px-6 bg-forge text-blanc">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-blanc/40"
          >
            Testado na vida real
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl text-blanc leading-tight"
          >
            Não nasceu numa planilha.{' '}
            <span className="italic">Nasceu na estrada.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-blanc/60 text-base md:text-lg max-w-xl"
          >
            Cada campo desse template foi usado em viagem de verdade — de uma
            roadtrip pelo Brasil a um mês pela Europa, até o outro lado do
            mundo. O que não funcionava, eu cortei. O que ficou é o que você
            recebe.
          </motion.p>
        </div>

        {/* Context cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contexts.map((ctx, i) => (
            <motion.div
              key={ctx.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="border border-blanc/10 rounded-xl p-8 space-y-3"
            >
              <p className="font-display text-xl text-blanc">{ctx.label}</p>
              <p className="font-sans text-sm text-blanc/50 leading-relaxed">
                {ctx.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
