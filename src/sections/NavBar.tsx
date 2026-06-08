import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1E1E1E]' : 'bg-transparent'
      }`}
    >
      <span className="text-[#F5F0E8] font-bold text-lg tracking-tight">
        Brand Appart
      </span>

      <div className="hidden md:flex items-center gap-10">
        {['Works', 'About us', 'Contact'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#666666] hover:text-[#F5F0E8] text-sm transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[#666666] text-sm">FR</span>
        <a
          href="#"
          className="bg-[#C8FF00] text-[#0A0A0A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#d4ff33] transition-colors"
        >
          Book a call now
        </a>
      </div>
    </motion.nav>
  )
}
