import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Slide {
  src: string
  alt: string
}

interface AnimatedSlideshowProps {
  slides: Slide[]
}

export function AnimatedSlideshow({ slides }: AnimatedSlideshowProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Slide images */}
      <div className="relative w-full aspect-video">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-forge" : "bg-forge/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
