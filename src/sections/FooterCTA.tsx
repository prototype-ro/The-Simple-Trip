const navLinks = ['Works', 'About us', 'Contact']
const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/brandappart/' },
  { label: 'X',         href: 'https://x.com/brandappart_' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/brandappart/' },
  { label: 'Behance',   href: 'https://www.behance.net/brandappart-' },
]

export function FooterCTA() {
  return (
    <footer className="border-t border-[#1E1E1E]">
      <div className="px-8 py-32 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-[#F5F0E8] mb-8 leading-tight">
          Make every pixel<br />pay for itself!
        </h2>
        <a
          href="#"
          className="inline-block bg-[#C8FF00] text-[#0A0A0A] font-bold px-10 py-5 rounded-full text-lg hover:bg-[#d4ff33] transition-colors"
        >
          Get your quote in 24h
        </a>
      </div>

      <div className="border-t border-[#1E1E1E] px-8 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[#F5F0E8] font-bold">Brand Appart</span>

        <nav className="flex gap-8">
          {navLinks.map((l) => (
            <a key={l} href="#" className="text-[#666666] text-sm hover:text-[#F5F0E8] transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] text-sm hover:text-[#F5F0E8] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <span className="text-[#444444] text-xs">© 2024 Brand Appart</span>
      </div>
    </footer>
  )
}
