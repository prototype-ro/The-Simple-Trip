const navLinks = [
  { label: 'Produto', href: '#produto' },
  { label: 'Prova', href: '#prova' },
  { label: 'FAQ', href: '#faq' },
]

export function FooterCTA() {
  return (
    <footer className="border-t border-[#1E1E1E]">
      <div className="px-8 py-32 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-[#F5F0E8] mb-8 leading-tight">
          Agora você está<br />
          <span className="text-[#C8FF00]">viajando de verdade.</span>
        </h2>
        <a
          href="#oferta"
          className="inline-block bg-[#C8FF00] text-[#0A0A0A] font-bold px-10 py-5 rounded-full text-lg hover:bg-[#d4ff33] transition-colors"
        >
          Ver o template
        </a>
      </div>

      <div className="border-t border-[#1E1E1E] px-8 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[#F5F0E8] font-bold">The Simple Trip</span>

        <nav className="flex gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[#666666] text-sm hover:text-[#F5F0E8] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://instagram.com/thesimpletrip_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666666] text-sm hover:text-[#F5F0E8] transition-colors font-mono tracking-widest"
        >
          @thesimpletrip_
        </a>
      </div>
    </footer>
  )
}
