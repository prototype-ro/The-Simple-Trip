// src/sections/AViradaDeChave.tsx
// No external assets required. Heart of the page — editorial text only.

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
}

export function AViradaDeChave() {
  return (
    <section className="min-h-screen flex items-center px-6 py-32 bg-blanc">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Headline */}
        <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-forge leading-tight"
        >
          Você não quer organizar a viagem.{' '}
          <span className="italic">Quer viver ela.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-sans text-base md:text-lg text-forge/70 leading-relaxed"
        >
          Turista agenda tudo. Viajante deixa espaço pra cidade acontecer.
          O melhor momento da viagem raramente estava no plano.
        </motion.p>

        {/* Signature */}
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-hand text-2xl text-forge/50"
        >
          viajar de verdade
        </motion.p>
      </div>
    </section>
  )
}
