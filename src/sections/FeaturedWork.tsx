import { motion } from 'framer-motion'

const modules = [
  {
    kicker: 'Roteiro & Calendário',
    name: 'Cada dia, organizado.',
    body: 'Atividades por cidade, horário e data.',
    aspect: 'aspect-[4/3]',
  },
  {
    kicker: 'Budget & Controle',
    name: 'Quanto ainda tem.',
    body: 'Câmbio automático, budget por categoria, balanço em tempo real.',
    aspect: 'aspect-square',
  },
  {
    kicker: 'Tudo Incluso',
    name: 'Do passaporte ao check-out.',
    body: 'Documentos por viajante, transportes, hospedagens.',
    aspect: 'aspect-[4/3]',
  },
  {
    kicker: 'Dashboard',
    name: 'A viagem inteira numa tela.',
    body: 'Visão geral de tudo que importa, sempre à mão.',
    aspect: 'aspect-square',
  },
]

function ModuleCard({ kicker, name, body, aspect }: typeof modules[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-lg bg-[#111111] cursor-pointer"
    >
      <div className={`${aspect} bg-[#1E1E1E] w-full`} />
      <div className="absolute inset-0 bg-[#0A0A0A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-[#F5F0E8] text-sm font-semibold">Ver no template →</span>
      </div>
      <div className="p-5">
        <p className="text-[#C8FF00] text-xs uppercase tracking-widest mb-2">{kicker}</p>
        <p className="text-[#F5F0E8] font-semibold mb-1">{name}</p>
        <p className="text-[#666666] text-sm">{body}</p>
      </div>
    </motion.div>
  )
}

export function FeaturedWork() {
  return (
    <section id="produto" className="px-8 py-32 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl font-black text-[#F5F0E8] mb-4">Tudo em um lugar só.</h2>
        <p className="text-[#666666] max-w-lg">
          Você não quer organizar a viagem. Quer viver ela. Roteiro, finanças,
          documentos, transporte e hospedagem — organizado do jeito que faz sentido.
        </p>
      </div>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {modules.map((m) => (
          <div key={m.kicker} className="break-inside-avoid">
            <ModuleCard {...m} />
          </div>
        ))}
      </div>
    </section>
  )
}
