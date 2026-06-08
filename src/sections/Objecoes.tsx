// src/sections/Objecoes.tsx
// No external assets required.
// PLACEHOLDERS: [RESPOSTA_FAQ_1] through [RESPOSTA_FAQ_4]

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Preciso saber usar Notion?', a: '[RESPOSTA_FAQ_1]' },
  { q: 'Funciona no celular?', a: '[RESPOSTA_FAQ_2]' },
  { q: 'É vitalício ou assinatura?', a: '[RESPOSTA_FAQ_3]' },
  { q: 'E se eu não gostar?', a: '[RESPOSTA_FAQ_4]' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-forge/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
      >
        <span className="font-display text-lg md:text-xl text-forge">{q}</span>
        <span className="flex-shrink-0 text-forge/40">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-forge/60 text-base pb-6 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Objecoes() {
  return (
    <section className="py-32 px-6 bg-blanc">
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forge/40">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forge">
            Antes de decidir.
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
