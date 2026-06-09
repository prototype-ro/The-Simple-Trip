import { motion } from 'framer-motion'

const proofs = ['Brasil, na estrada', 'Europa, um mês', 'O outro lado do mundo']

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export function Hero() {
  const headline = ['Explore', 'qualquer', 'lugar.', 'Sem', 'medo.']

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-32 pb-20 max-w-7xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-black text-[#F5F0E8] leading-[0.95] tracking-tight max-w-4xl mb-8">
        {headline.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${word === 'medo.' ? 'text-[#C8FF00]' : ''}`}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-[#666666] text-lg max-w-xl mb-10"
      >
        O sistema de viagem que reúne roteiro, finanças, documentos e
        hospedagem em um só lugar.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <a
          href="#oferta"
          className="inline-block bg-[#C8FF00] text-[#0A0A0A] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#d4ff33] transition-colors"
        >
          Ver o template
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-24 flex items-center gap-8 flex-wrap"
      >
        <span className="text-[#666666] text-xs uppercase tracking-widest">
          Testado em
        </span>
        {proofs.map((proof, i) => (
          <motion.span
            key={proof}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            className="text-[#444444] text-sm font-medium"
          >
            {proof}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
