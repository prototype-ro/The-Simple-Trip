import { motion } from 'framer-motion'

const contexts = [
  {
    quote: 'Rodovias, cidades pequenas, improviso com sistema. Zero planilha perdida na estrada.',
    label: 'Brasil, na estrada',
  },
  {
    quote: 'Dez países, dois viajantes, um mês. Câmbio, roteiro e documentos sempre em ordem.',
    label: 'Europa, um mês',
  },
  {
    quote: 'Fuso, idioma, moeda — tudo no mesmo lugar. Funcionou do outro lado do mundo.',
    label: 'O outro lado do mundo',
  },
]

export function Testimonials() {
  return (
    <section id="prova" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-12 max-w-2xl">
        <p className="text-[#C8FF00] text-xs uppercase tracking-widest mb-4">
          Testado na vida real
        </p>
        <h2 className="text-5xl font-black text-[#F5F0E8] mb-4">
          Não nasceu numa planilha.<br />
          <span className="text-[#666666]">Nasceu na estrada.</span>
        </h2>
        <p className="text-[#666666]">
          Cada campo desse template foi usado em viagem de verdade. O que não
          funcionava, eu cortei. O que ficou é o que você recebe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contexts.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-8"
          >
            <p className="text-[#F5F0E8] text-sm leading-relaxed mb-6">"{c.quote}"</p>
            <p className="text-[#666666] text-xs uppercase tracking-widest">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
