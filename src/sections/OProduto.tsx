// src/sections/OProduto.tsx
// Assets: /public/screenshots/slide-1.svg through slide-4.svg
// Replace .svg with .jpg when real screenshots are added.

import { motion } from 'framer-motion'
import { AnimatedSlideshow } from '@/components/AnimatedSlideshow'

export function OProduto() {
  return (
    <section className="py-32 px-6 bg-forge text-blanc">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-blanc/50"
          >
            O Template
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl text-blanc"
          >
            Tudo em um lugar só.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-blanc/60 text-base md:text-lg max-w-xl"
          >
            Roteiro, finanças, documentos, transporte e hospedagem.
            Organizado do jeito que faz sentido.
          </motion.p>
        </div>

        {/* Slideshow */}
        <AnimatedSlideshow
          slides={[
            { src: '/screenshots/slide-1.svg', alt: 'Dashboard' },
            { src: '/screenshots/slide-2.svg', alt: 'Roteiro' },
            { src: '/screenshots/slide-3.svg', alt: 'Finanças' },
            { src: '/screenshots/slide-4.svg', alt: 'Documentos' },
          ]}
        />
      </div>
    </section>
  )
}
