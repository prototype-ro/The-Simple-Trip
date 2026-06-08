import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    number: '01',
    name: 'Branding',
    outcome: 'Perceived value up',
    description:
      'Clarify positioning, define tone of voice, build visual systems. Each sprint delivers logo, guidelines, and social kit.',
  },
  {
    number: '02',
    name: 'Product Design',
    outcome: 'UX friction down · Retention up',
    description:
      'Start from business goals, map critical journeys, prototype solutions. Ships clear flows, UI library, dev-ready assets.',
  },
  {
    number: '03',
    name: 'Web Design',
    outcome: 'Conversion ready',
    description:
      'Align messaging, page architecture, and UI. Fast-loading sites with clear structure and scalable bases for internal teams.',
  },
  {
    number: '04',
    name: 'Pitch Decks',
    outcome: 'Raise faster',
    description:
      'Craft narrative that gets meetings. Design supports story with readable numbers, slide rhythm, multiple versions.',
  },
]

export function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black text-[#F5F0E8] mb-16">What we do</h2>

      <div className="divide-y divide-[#1E1E1E]">
        {services.map((s) => (
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
              <div className="flex items-center gap-6">
                <span className="text-[#666666] text-sm hidden md:block">{s.outcome}</span>
                <span className="text-[#666666] text-xl leading-none">
                  {open === s.number ? '−' : '+'}
                </span>
              </div>
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
