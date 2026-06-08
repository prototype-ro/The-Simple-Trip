import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedWordCycleProps {
  staticText: string;
  words: string[];
  intervalMs?: number;
  className?: string;
}

export function AnimatedWordCycle({
  staticText,
  words,
  intervalMs = 2000,
  className,
}: AnimatedWordCycleProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrent((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, intervalMs);
    return () => clearTimeout(id);
  }, [current, words.length, intervalMs]);

  return (
    <div className={className}>
      <h2 className="font-display text-3xl md:text-5xl text-blanc text-center leading-tight">
        {staticText}
      </h2>
      <span className="relative flex w-full justify-center overflow-hidden h-14 md:h-20 mt-2">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="absolute font-display text-3xl md:text-5xl font-semibold text-lilac"
            initial={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 50, damping: 14 }}
            animate={
              current === index
                ? { y: 0, opacity: 1 }
                : { y: current > index ? -60 : 60, opacity: 0 }
            }
          >
            {word}
          </motion.span>
        ))}
      </span>
    </div>
  );
}
