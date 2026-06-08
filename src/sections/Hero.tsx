import { motion } from 'framer-motion'

const clients = ['LinkedIn', 'Forbes', 'PMU', 'Paris Blockchain', 'Rockfi', 'Ircam']

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export function Hero() {
  const headline = 'The design© partner for top-tier companies'.split(' ')

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
            className="inline-block mr-[0.25em]"
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
        We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <a
          href="#"
          className="inline-block border border-[#F5F0E8] text-[#F5F0E8] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#F5F0E8] hover:text-[#0A0A0A] transition-colors"
        >
          Book an intro call
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-24 flex items-center gap-8 flex-wrap"
      >
        <span className="text-[#666666] text-xs uppercase tracking-widest">Trusted by</span>
        {clients.map((client, i) => (
          <motion.span
            key={client}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            className="text-[#444444] text-sm font-medium"
          >
            {client}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
