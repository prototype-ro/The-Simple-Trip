// src/sections/Fechamento.tsx
// Assets: /public/logo.svg (fox logo)

import { motion } from 'framer-motion'

interface FechamentoProps {
  onCtaClick: () => void
}

export function Fechamento({ onCtaClick }: FechamentoProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-forge text-blanc">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/logo.svg"
          alt="The Simple Trip"
          className="w-12 h-12 mx-auto brightness-0 invert"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display italic text-4xl md:text-5xl lg:text-6xl text-blanc leading-tight"
        >
          agora você está{' '}
          <span className="not-italic font-display font-semibold">
            viajando de verdade.
          </span>
        </motion.h2>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onClick={onCtaClick}
          className="px-8 py-3 bg-blanc text-forge font-sans text-sm tracking-wide rounded-lg hover:bg-blanc/90 transition-colors duration-300"
        >
          Ver o template
        </motion.button>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 font-mono text-xs text-blanc/30 tracking-widest"
      >
        @thesimpletrip_
      </motion.footer>
    </section>
  )
}
