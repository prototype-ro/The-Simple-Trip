import { motion } from 'framer-motion'

export function Garantia() {
  return (
    <section className="px-8 py-24 border-y border-[#1E1E1E]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-3xl md:text-4xl font-black text-[#F5F0E8] leading-tight">
          Menos que um lanche no aeroporto.
        </p>
        <p className="text-3xl md:text-4xl font-black text-[#666666] leading-tight">
          Pra não perder uma viagem que custou meses de planejamento.
        </p>
      </motion.div>
    </section>
  )
}
