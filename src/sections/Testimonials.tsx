import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'They delivered an iconic brand identity in record time. Investors noticed immediately.',
    name: 'Marc D.',
    company: 'Incard',
  },
  {
    quote: 'Responsiveness and creativity combined. Our conversion rate jumped 40% after the redesign.',
    name: 'Sophie L.',
    company: 'Sowbeez',
  },
  {
    quote: 'The pitch deck they built helped us close our seed round in under 3 weeks.',
    name: 'Thomas B.',
    company: 'Stables',
  },
  {
    quote: 'Small team, enterprise-grade output. They understood our product better than we did.',
    name: 'Julie M.',
    company: 'We Are',
  },
  {
    quote: 'Best design partner we have worked with. Every pixel serves a purpose.',
    name: 'Alex R.',
    company: 'Rockfi',
  },
]

export function Testimonials() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="px-8 max-w-7xl mx-auto mb-12">
        <h2 className="text-5xl font-black text-[#F5F0E8]">Trusted by +40 founders</h2>
      </div>

      <motion.div
        className="flex gap-6 px-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -(testimonials.length * 344) }}
        dragElastic={0.1}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex-shrink-0 w-80 bg-[#111111] border border-[#1E1E1E] rounded-xl p-8"
          >
            <p className="text-[#F5F0E8] text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="text-[#F5F0E8] text-sm font-semibold">{t.name}</p>
              <p className="text-[#666666] text-xs">{t.company}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
