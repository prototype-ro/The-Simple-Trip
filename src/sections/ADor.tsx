// src/sections/ADor.tsx
// No external assets required.

import { motion } from 'framer-motion'
import { AnimatedWordCycle } from '@/components/ui/animated-hero'

export function ADor() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-forge text-blanc">
      <div className="max-w-3xl mx-auto text-center space-y-16">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-blanc/50"
        >
          Parece familiar?
        </motion.p>

        {/* Animated word cycle */}
        <AnimatedWordCycle
          staticText="Tudo no mesmo lugar."
          words={['roteiro', 'gastos', 'documentos', 'hospedagem', 'transporte']}
          intervalMs={2000}
        />

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display italic text-2xl md:text-3xl text-blanc/80"
        >
          Parece familiar?
        </motion.p>
      </div>
    </section>
  )
}
