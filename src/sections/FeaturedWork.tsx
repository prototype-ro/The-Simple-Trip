import { motion } from 'framer-motion'

const projects = [
  { name: 'Incard',     category: 'Fintech',    year: '2024', aspect: 'aspect-[4/3]' },
  { name: 'Sowbeez',    category: 'B2C App',    year: '2023', aspect: 'aspect-square' },
  { name: 'Forbes',     category: 'Web 3.0',    year: '2023', aspect: 'aspect-[4/3]' },
  { name: 'Sobry',      category: 'Electrical', year: '2026', aspect: 'aspect-square' },
  { name: 'We Are',     category: 'B2B SaaS',   year: '2024', aspect: 'aspect-[4/3]' },
  { name: 'Stables',    category: 'Web 3.0',    year: '2022', aspect: 'aspect-square' },
  { name: 'Jaws Group', category: 'Agency',     year: '2026', aspect: 'aspect-[4/3]' },
]

function WorkCard({ name, category, year, aspect }: typeof projects[0]) {
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
        <span className="text-[#F5F0E8] text-sm font-semibold">Discover case →</span>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-[#F5F0E8] font-semibold">{name}</p>
          <p className="text-[#666666] text-sm">{category}</p>
        </div>
        <span className="text-[#444444] text-sm">{year}</span>
      </div>
    </motion.div>
  )
}

export function FeaturedWork() {
  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl font-black text-[#F5F0E8] mb-4">Featured work</h2>
        <p className="text-[#666666] max-w-lg">
          We create innovative and purposeful designs that capture attention and drive meaningful results.
        </p>
      </div>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {projects.map((p) => (
          <div key={p.name} className="break-inside-avoid">
            <WorkCard {...p} />
          </div>
        ))}
      </div>
    </section>
  )
}
