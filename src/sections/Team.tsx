import { motion } from 'framer-motion'

const members = [
  { name: 'Arthur', role: 'Creative Director' },
  { name: 'Léa',   role: 'Product Designer' },
  { name: 'Hugo',  role: 'Brand Strategist' },
]

export function Team() {
  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-black text-[#F5F0E8] mb-6"
          >
            Small team,<br />big results.
          </motion.h2>
          <p className="text-[#666666] mb-10 max-w-sm">
            A tight-knit crew of brand designers, product thinkers, and storytellers. No account managers. You work directly with the people doing the work.
          </p>
          <a
            href="#"
            className="inline-block border border-[#1E1E1E] text-[#F5F0E8] px-6 py-3 rounded-full text-sm hover:border-[#F5F0E8] transition-colors"
          >
            Know more about us
          </a>
        </div>

        <div className="flex gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1"
            >
              <div className="aspect-[3/4] bg-[#111111] rounded-xl mb-3" />
              <p className="text-[#F5F0E8] text-sm font-semibold">{m.name}</p>
              <p className="text-[#666666] text-xs">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
