import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    number: '01',
    name: 'Preciso saber usar Notion?',
    description:
      'Não. O template já vem montado e pronto pra usar. Você só preenche — e tem um guia rápido pra qualquer dúvida.',
  },
  {
    number: '02',
    name: 'Funciona no celular?',
    description:
      'Sim. Roda no app do Notion no iOS e Android, além do desktop e navegador. Sua viagem inteira no bolso.',
  },
  {
    number: '03',
    name: 'É vitalício ou assinatura?',
    description:
      'Pagamento único, acesso vitalício. Comprou, é seu — sem mensalidade, sem renovação.',
  },
  {
    number: '04',
    name: 'E se eu não gostar?',
    description:
      'Garantia de 7 dias. Não curtiu, devolvo o valor integral, sem perguntas.',
  },
]

export function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="faq" className="px-8 py-32 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black text-[#F5F0E8] mb-16">Antes de decidir.</h2>

      <div className="divide-y divide-[#1E1E1E]">
        {faqs.map((s) => (
          <div key={s.number}>
            <button
              onClick={() => setOpen(open === s.number ? null : s.number)}
              className="w-full py-7 flex items-center justify-between group text-left"
            >
              <div className="flex items-center gap-6">
                <span className="text-[#444444] text-sm font-mono">{s.number}</span>
                <span className="text-[#F5F0E8] text-2xl font-bold group-hover:text-[#C8FF00] transition-colors">
                  {s.name}
                </span>
              </div>
              <span className="text-[#666666] text-xl leading-none">
                {open === s.number ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open === s.number && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pl-14 text-[#666666] max-w-2xl">{s.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
