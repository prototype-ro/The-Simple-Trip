# brandappart.com Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace existing App.tsx sections with pixel-perfect brandappart.com clone — 7 sections, dark agency aesthetic.

**Architecture:** Each section is an isolated React component in `src/sections/`. Design tokens live in `src/lib/tokens.ts` and override `index.css`. App.tsx is wiped and reassembled with new sections only.

**Tech Stack:** React 19, Tailwind v4 (`@theme`), Framer Motion 12

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Modify | `src/index.css` | Replace token theme with brandappart tokens |
| Create | `src/lib/tokens.ts` | TS token constants for use in components |
| Modify | `src/App.tsx` | Replace all sections with brandappart sections |
| Create | `src/sections/NavBar.tsx` | Sticky nav |
| Create | `src/sections/Hero.tsx` (replace) | Hero with logo strip |
| Create | `src/sections/FeaturedWork.tsx` | Portfolio grid |
| Create | `src/sections/Services.tsx` | Accordion services |
| Create | `src/sections/Testimonials.tsx` | Horizontal scroll quotes |
| Create | `src/sections/Team.tsx` | Team section |
| Create | `src/sections/FooterCTA.tsx` | Footer with CTA |
| Delete | `src/sections/ADor.tsx` + 7 others | Old sections no longer used |

---

## Task 1: Replace Design Tokens

**Files:**
- Modify: `src/index.css`
- Create: `src/lib/tokens.ts`

- [ ] **Step 1: Update `src/index.css`**

Replace the entire `@theme` block and body styles:

```css
@import "tailwindcss";

@theme {
  --color-bg:      #0A0A0A;
  --color-surface: #111111;
  --color-text:    #F5F0E8;
  --color-muted:   #666666;
  --color-accent:  #C8FF00;
  --color-border:  #1E1E1E;

  --font-sans: 'Inter', 'Helvetica Neue', sans-serif;

  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-pill: 9999px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-sans);
}
```

- [ ] **Step 2: Create `src/lib/tokens.ts`**

```ts
export const tokens = {
  bg:      '#0A0A0A',
  surface: '#111111',
  text:    '#F5F0E8',
  muted:   '#666666',
  accent:  '#C8FF00',
  border:  '#1E1E1E',
} as const
```

- [ ] **Step 3: Add Inter font via Google Fonts in `index.html`**

In `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

- [ ] **Step 4: Commit**

```bash
git add src/index.css src/lib/tokens.ts index.html
git commit -m "feat: replace design tokens with brandappart theme"
```

---

## Task 2: NavBar

**Files:**
- Create: `src/sections/NavBar.tsx`

- [ ] **Step 1: Create `src/sections/NavBar.tsx`**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/NavBar.tsx
git commit -m "feat: add NavBar section"
```

---

## Task 3: Hero Section

**Files:**
- Replace: `src/sections/Hero.tsx`

- [ ] **Step 1: Overwrite `src/sections/Hero.tsx`**

```tsx
import { motion } from 'framer-motion'

const clients = ['LinkedIn', 'Forbes', 'PMU', 'Paris Blockchain', 'Rockfi', 'Ircam']

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export function Hero() {
  const headline = 'The design© partner for top-tier companies'.split(' ')

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-32 pb-20 max-w-7xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-black text-[#F5F0E8] leading-[0.95] tracking-tight max-w-4xl mb-8">
        {headline.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-[#666666] text-lg max-w-xl mb-10"
      >
        We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <a
          href="#"
          className="inline-block border border-[#F5F0E8] text-[#F5F0E8] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#F5F0E8] hover:text-[#0A0A0A] transition-colors"
        >
          Book an intro call
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-24 flex items-center gap-8 flex-wrap"
      >
        <span className="text-[#666666] text-xs uppercase tracking-widest">Trusted by</span>
        {clients.map((client, i) => (
          <motion.span
            key={client}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            className="text-[#444444] text-sm font-medium"
          >
            {client}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat: add Hero section (brandappart clone)"
```

---

## Task 4: Featured Work

**Files:**
- Create: `src/sections/FeaturedWork.tsx`

- [ ] **Step 1: Create `src/sections/FeaturedWork.tsx`**

```tsx
import { motion } from 'framer-motion'

const projects = [
  { name: 'Incard',     category: 'Fintech',   year: '2024', aspect: 'aspect-[4/3]' },
  { name: 'Sowbeez',    category: 'B2C App',   year: '2023', aspect: 'aspect-square' },
  { name: 'Forbes',     category: 'Web 3.0',   year: '2023', aspect: 'aspect-[4/3]' },
  { name: 'Sobry',      category: 'Electrical',year: '2026', aspect: 'aspect-square' },
  { name: 'We Are',     category: 'B2B SaaS',  year: '2024', aspect: 'aspect-[4/3]' },
  { name: 'Stables',    category: 'Web 3.0',   year: '2022', aspect: 'aspect-square' },
  { name: 'Jaws Group', category: 'Agency',    year: '2026', aspect: 'aspect-[4/3]' },
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
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/FeaturedWork.tsx
git commit -m "feat: add FeaturedWork section"
```

---

## Task 5: Services Accordion

**Files:**
- Create: `src/sections/Services.tsx`

- [ ] **Step 1: Create `src/sections/Services.tsx`**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Services.tsx
git commit -m "feat: add Services accordion section"
```

---

## Task 6: Testimonials

**Files:**
- Create: `src/sections/Testimonials.tsx`

- [ ] **Step 1: Create `src/sections/Testimonials.tsx`**

```tsx
import { useRef } from 'react'
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
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section className="py-32 overflow-hidden">
      <div className="px-8 max-w-7xl mx-auto mb-12">
        <h2 className="text-5xl font-black text-[#F5F0E8]">Trusted by +40 founders</h2>
      </div>

      <motion.div
        ref={ref}
        className="flex gap-6 px-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -(testimonials.length * 360 - window.innerWidth + 64) }}
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
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Testimonials.tsx
git commit -m "feat: add Testimonials drag-scroll section"
```

---

## Task 7: Team Section

**Files:**
- Create: `src/sections/Team.tsx`

- [ ] **Step 1: Create `src/sections/Team.tsx`**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Team.tsx
git commit -m "feat: add Team section"
```

---

## Task 8: Footer CTA

**Files:**
- Create: `src/sections/FooterCTA.tsx`

- [ ] **Step 1: Create `src/sections/FooterCTA.tsx`**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/FooterCTA.tsx
git commit -m "feat: add FooterCTA section"
```

---

## Task 9: Wire Up App.tsx + Delete Old Sections

**Files:**
- Modify: `src/App.tsx`
- Delete: `src/sections/ADor.tsx`, `AOferta.tsx`, `AViradaDeChave.tsx`, `Fechamento.tsx`, `OProduto.tsx`, `Objecoes.tsx`, `ProvaReal.tsx`, `SecoesEmDetalhe.tsx`

- [ ] **Step 1: Delete old sections**

```bash
rm src/sections/ADor.tsx src/sections/AOferta.tsx src/sections/AViradaDeChave.tsx \
   src/sections/Fechamento.tsx src/sections/OProduto.tsx src/sections/Objecoes.tsx \
   src/sections/ProvaReal.tsx src/sections/SecoesEmDetalhe.tsx
```

- [ ] **Step 2: Rewrite `src/App.tsx`**

```tsx
import { NavBar }       from '@/sections/NavBar'
import { Hero }         from '@/sections/Hero'
import { FeaturedWork } from '@/sections/FeaturedWork'
import { Services }     from '@/sections/Services'
import { Testimonials } from '@/sections/Testimonials'
import { Team }         from '@/sections/Team'
import { FooterCTA }    from '@/sections/FooterCTA'

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <Team />
      <FooterCTA />
    </main>
  )
}
```

- [ ] **Step 3: Verify dev server compiles**

```bash
npm run dev
```

Expected: no TypeScript errors, app renders at `http://localhost:5173`

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: assemble brandappart clone — all 7 sections wired"
```

---

## Task 10: Smoke Test + Cleanup

- [ ] **Step 1: Check for unused imports**

```bash
npx tsc --noEmit
```

Expected: 0 errors

- [ ] **Step 2: Verify old components don't block build**

```bash
npm run build
```

Expected: build succeeds with no errors

- [ ] **Step 3: Delete unused old components (if safe)**

```bash
# Only if these are confirmed unused:
rm -f src/components/GooeyTextMorphing.tsx src/components/TypewriterEffect.tsx \
      src/components/AnimatedSlideshow.tsx src/components/PricingSection.tsx
```

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: remove unused components from previous landing page"
```
