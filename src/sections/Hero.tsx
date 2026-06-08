import { motion } from 'framer-motion'
import { TypewriterEffect } from '@/components/TypewriterEffect'

interface HeroProps {
  onCtaClick: () => void
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-blanc text-forge">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto gap-10"
      >
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="The Simple Trip"
          className="w-12 h-12 md:w-16 md:h-16"
        />

        {/* Typewriter headline */}
        <TypewriterEffect
          words={[
            { text: 'Explore' },
            { text: 'qualquer' },
            { text: 'lugar.' },
            { text: 'Sem' },
            { text: 'medo.', className: 'text-[#F5E642]' },
          ]}
        />

        {/* Subtext */}
        <p className="font-sans text-base md:text-lg text-forge/70 max-w-xl leading-relaxed">
          O sistema de viagem que reúne roteiro, finanças, documentos e
          hospedagem em um só lugar.
        </p>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="mt-2 px-8 py-3 bg-forge text-blanc font-sans text-sm tracking-wide rounded-lg hover:bg-forge/90 transition-colors duration-300"
        >
          Ver o template
        </button>
      </motion.div>
    </section>
  )
}
