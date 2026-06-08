# The Simple Trip — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 9-section editorial landing page for The Simple Trip Notion template, Vite + React + TS + Tailwind CSS v4 + Framer Motion + shadcn/ui.

**Architecture:** Each section is an isolated component in `src/sections/`. Three animated components (Typewriter, Gooey Morph, Slideshow) live in `src/components/` alongside the shadcn-sourced PricingSection. App.tsx assembles sections in order with a single scroll-to-offer ref.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS v4, Framer Motion (framer-motion npm), shadcn/ui (for pricing card deps), lucide-react, Google Fonts via `@import` in CSS.

---

## File Map

```
/
├── index.html                          # font preconnect + Google Fonts link
├── vite.config.ts
├── tsconfig.json
├── package.json
├── components.json                     # shadcn config
├── src/
│   ├── main.tsx
│   ├── App.tsx                         # assembles all 9 sections, scroll ref
│   ├── index.css                       # Tailwind v4 @theme tokens + font imports
│   ├── lib/
│   │   └── utils.ts                    # shadcn cn() helper
│   ├── components/
│   │   ├── ui/                         # shadcn primitives (badge, button, card, separator)
│   │   ├── TypewriterEffect.tsx        # [npx shadcn@latest add https://21st.dev/r/aceternity/typewriter-effect] — adapted
│   │   ├── GooeyTextMorphing.tsx       # [npx shadcn@latest add https://21st.dev/r/victorwelander/gooey-text-morphing] — adapted
│   │   ├── AnimatedSlideshow.tsx       # [PASTE: YoucefBnm/animated-slideshow] — adapted
│   │   └── PricingSection.tsx          # [ALREADY PASTED: bankkroll/single-pricing-card] — adapted
│   └── sections/
│       ├── Hero.tsx                    # expects: /public/logo.svg
│       ├── ADor.tsx                    # no assets
│       ├── AViradaDeChave.tsx          # no assets
│       ├── OProduto.tsx                # expects: /public/screenshots/slide-{1-4}.jpg
│       ├── SecoesEmDetalhe.tsx         # expects: /public/screenshots/detail-{1-3}.jpg
│       ├── ProvaReal.tsx               # no assets
│       ├── AOferta.tsx                 # uses PricingSection.tsx
│       ├── Objecoes.tsx                # FAQ accordion (Framer Motion)
│       └── Fechamento.tsx             # expects: /public/logo.svg
└── public/
    ├── logo.svg                        # [PLACEHOLDER — fox logo]
    └── screenshots/
        ├── slide-1.jpg                 # [PLACEHOLDER]
        ├── slide-2.jpg                 # [PLACEHOLDER]
        ├── slide-3.jpg                 # [PLACEHOLDER]
        ├── slide-4.jpg                 # [PLACEHOLDER]
        ├── detail-1.jpg               # [PLACEHOLDER]
        ├── detail-2.jpg               # [PLACEHOLDER]
        └── detail-3.jpg               # [PLACEHOLDER]
```

---

## Task 1: Scaffold Vite + React + TS project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`

- [ ] **Step 1: Init project**

```bash
cd /Users/rodgz_mac/Developer/TheSimpleTrip_LandingPage
npm create vite@latest . -- --template react-ts
```

Expected: scaffolds `src/`, `index.html`, `vite.config.ts`, `tsconfig.json`, `package.json`

- [ ] **Step 2: Install core deps**

```bash
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configure Tailwind v4 in vite.config.ts**

Replace contents of `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
```

- [ ] **Step 4: Add path types**

In `tsconfig.json`, add inside `compilerOptions`:

```json
"baseUrl": ".",
"paths": { "@/*": ["./src/*"] }
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite dev server running at `http://localhost:5173`

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold Vite + React + TS project"
```

---

## Task 2: Design tokens + Google Fonts + global CSS

**Files:**
- Modify: `src/index.css`
- Modify: `index.html`

- [ ] **Step 1: Add Google Fonts preconnect to index.html**

Replace the `<head>` section of `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Simple Trip — Explore qualquer lugar. Sem medo.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Caveat:wght@400;600&display=swap"
    rel="stylesheet"
  />
</head>
```

- [ ] **Step 2: Write design tokens in src/index.css**

Replace entire file:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-blanc: #F3F4F4;
  --color-forge: #2C2C2C;
  --color-lilac: #E9B5CC;
  --color-rouge: #853953;
  --color-burgundy: #612D53;
  --color-forest: #39856B;
  --color-eclair: #F5E642;

  /* Typography */
  --font-display: "Playfair Display", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;
  --font-mono: "DM Mono", monospace;
  --font-hand: "Caveat", cursive;

  /* Spacing / Radii */
  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-blanc);
  color: var(--color-forge);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 3: Verify fonts load**

```bash
npm run dev
```

Open browser → DevTools → Network → filter "fonts.gstatic" — should see 4 font families loading.

- [ ] **Step 4: Commit**

```bash
git add src/index.css index.html
git commit -m "chore: add design tokens and Google Fonts"
```

---

## Task 3: shadcn/ui setup + install pricing card deps

**Files:**
- Create: `components.json`, `src/lib/utils.ts`, `src/components/ui/badge.tsx`, `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, `src/components/ui/separator.tsx`

- [ ] **Step 1: Install shadcn peer deps**

```bash
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-separator
```

- [ ] **Step 2: Create cn() helper**

Create `src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 3: Create components.json for shadcn CLI**

Create `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

- [ ] **Step 4: Add shadcn UI primitives needed by PricingSection**

```bash
npx shadcn@latest add badge button card separator
```

Expected: creates `src/components/ui/badge.tsx`, `button.tsx`, `card.tsx`, `separator.tsx`

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: setup shadcn/ui and install pricing card deps"
```

---

## Task 4: Adapt PricingSection.tsx (already pasted)

**Files:**
- Modify: `src/components/PricingSection.tsx`

The pasted component uses `"use client"` (Next.js) and `Link from "next/link"`. Must adapt for Vite/React.

- [ ] **Step 1: Remove "use client" directive**

Delete line 1: `"use client"`

- [ ] **Step 2: Replace next/link import**

Change:
```ts
import Link from "next/link"
```
To: *(delete this line entirely — will use `<a>` tags)*

- [ ] **Step 3: Replace all Link usages with anchor tags**

Find all `<Link href={...}>` in the file and replace with `<a href={...}>`.
Find all `</Link>` and replace with `</a>`.

- [ ] **Step 4: Verify no Next.js imports remain**

```bash
grep -n "next/" src/components/PricingSection.tsx
```

Expected: no output (zero matches)

- [ ] **Step 5: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "fix: adapt PricingSection for Vite (remove next/link and use client)"
```

---

## Task 5: Public asset placeholders

**Files:**
- Create: `public/logo.svg`, `public/screenshots/slide-{1-4}.jpg`, `public/screenshots/detail-{1-3}.jpg`

- [ ] **Step 1: Create placeholder logo SVG**

Create `public/logo.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <!-- PLACEHOLDER: replace with fox logo -->
  <rect width="48" height="48" rx="8" fill="#2C2C2C"/>
  <text x="50%" y="55%" font-family="serif" font-size="10" fill="#F3F4F4" text-anchor="middle" dominant-baseline="middle">TST</text>
</svg>
```

- [ ] **Step 2: Create screenshot placeholders directory**

```bash
mkdir -p public/screenshots
```

- [ ] **Step 3: Create placeholder screenshot SVGs**

Create `public/screenshots/slide-1.svg` through `slide-4.svg` and `detail-1.svg` through `detail-3.svg` — all with the same pattern, different labels:

`public/screenshots/slide-1.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#2C2C2C"/>
  <text x="50%" y="50%" font-family="serif" font-size="32" fill="#F3F4F4" text-anchor="middle" dominant-baseline="middle">Dashboard — slide-1.jpg</text>
</svg>
```

Repeat for `slide-2.svg` (label: "Roteiro"), `slide-3.svg` (label: "Finanças"), `slide-4.svg` (label: "Documentos"), `detail-1.svg` (label: "Roteiro & Calendário"), `detail-2.svg` (label: "Budget & Controle"), `detail-3.svg` (label: "Tudo Incluso").

- [ ] **Step 4: Commit**

```bash
git add public/
git commit -m "chore: add placeholder assets for logo and screenshots"
```

---

## Task 6: TypewriterEffect component

**Files:**
- Modify: `src/components/TypewriterEffect.tsx` (installed by shadcn CLI)

- [ ] **Step 1: Install via shadcn CLI**

```bash
npx shadcn@latest add https://21st.dev/r/aceternity/typewriter-effect
```

Expected: creates/updates `src/components/TypewriterEffect.tsx` (or similar path — check CLI output for exact path).

- [ ] **Step 2: Brand adaptation — serif font**

Find the className that applies font styling to the words/spans and ensure Playfair Display is applied. Add `font-display` (maps to `"Playfair Display"`) to the text container:

```tsx
// Find the words container element, add:
className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight"
```

- [ ] **Step 3: Brand adaptation — Éclair highlight**

Find where the cursor word / highlighted word is rendered. The emphasis word "Sem medo." must use color `#F5E642`:

```tsx
// For the highlighted/emphasis span:
className="text-eclair"   // or inline style={{ color: '#F5E642' }}
```

The TypewriterEffect component receives words as a prop. The component should be called with:

```tsx
<TypewriterEffect
  words={[
    { text: "Explore" },
    { text: "qualquer" },
    { text: "lugar." },
    { text: "Sem" },
    { text: "medo.", className: "text-[#F5E642]" },
  ]}
/>
```

- [ ] **Step 4: Brand adaptation — cursor style**

Find the cursor element. Remove any glow/pulse classes. Keep a simple blinking bar:

```tsx
// Cursor should be: w-[2px] md:w-[3px] h-8 md:h-12 bg-forge animate-blink
// Remove: shadow, glow, colorful backgrounds
```

- [ ] **Step 5: Commit**

```bash
git add src/components/TypewriterEffect.tsx
git commit -m "feat: add TypewriterEffect with brand adaptations"
```

---

## Task 7: GooeyTextMorphing component

**Files:**
- Modify: `src/components/GooeyTextMorphing.tsx` (installed by shadcn CLI)

- [ ] **Step 1: Install via shadcn CLI**

```bash
npx shadcn@latest add https://21st.dev/r/victorwelander/gooey-text-morphing
```

Expected: creates/updates `src/components/GooeyTextMorphing.tsx` (check CLI output for exact path).

- [ ] **Step 2: Reduce blur for restrained morph**

Find the SVG `<feGaussianBlur>` element. Set `stdDeviation` to `3` (original is likely 8–15):

```tsx
<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
```

Also find the `<feColorMatrix>` that sharpens the goo and adjust values to reduce blobbing. The matrix `values` fourth row controls threshold — increase the contrast value (e.g. `20` → `40`) to compensate for lower blur:

```tsx
<feColorMatrix
  in="blur"
  mode="matrix"
  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
  result="goo"
/>
```

- [ ] **Step 3: Set brand phrases**

The component receives phrases as a prop (or has them hardcoded). Update to:

```tsx
const phrases = [
  "Roteiro num app.",
  "Gastos em outro.",
  "Documentos no WhatsApp.",
  "Hospedagem numa aba perdida.",
]
```

- [ ] **Step 4: Apply brand typography to morph text**

The morphing text container should use:

```tsx
className="font-display text-3xl md:text-5xl text-forge"
```

- [ ] **Step 5: Commit**

```bash
git add src/components/GooeyTextMorphing.tsx
git commit -m "feat: add GooeyTextMorphing with restrained blur and brand phrases"
```

---

## Task 8: AnimatedSlideshow component

**Files:**
- Modify: `src/components/AnimatedSlideshow.tsx`

No shadcn CLI command available for this one. Paste from:
`https://21st.dev/community/components/YoucefBnm/animated-slideshow/default`

- [ ] **Step 1: Confirm code is pasted into src/components/AnimatedSlideshow.tsx**

```bash
wc -l src/components/AnimatedSlideshow.tsx
```

Expected: >10 lines. If still placeholder, paste code from URL above first.

- [ ] **Step 2: Set auto-advance only (no arrows)**

Find any prev/next arrow button elements and remove them entirely. Keep only the dots indicator.

- [ ] **Step 3: Set slow transition duration**

Find the Framer Motion `transition` prop on slide animations. Set:

```tsx
transition={{ duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] }}
```

- [ ] **Step 4: Set slide images to placeholders**

```tsx
const slides = [
  { src: "/screenshots/slide-1.svg", alt: "Dashboard" },
  { src: "/screenshots/slide-2.svg", alt: "Roteiro" },
  { src: "/screenshots/slide-3.svg", alt: "Finanças" },
  { src: "/screenshots/slide-4.svg", alt: "Documentos" },
]
```

- [ ] **Step 5: Style dots to brand**

Dots: inactive `bg-forge/30`, active `bg-forge`. Rounded full. No glow.

- [ ] **Step 6: Commit**

```bash
git add src/components/AnimatedSlideshow.tsx
git commit -m "feat: add AnimatedSlideshow with auto-advance and brand styling"
```

---

## Task 9: Section 1 — Hero

**Files:**
- Create: `src/sections/Hero.tsx`
- Asset: `public/logo.svg` (placeholder already exists)

- [ ] **Step 1: Create Hero.tsx**

```tsx
// src/sections/Hero.tsx
// Assets: /public/logo.svg (fox logo — replace placeholder with real SVG)

import { motion } from 'framer-motion'
import { TypewriterEffect } from '@/components/TypewriterEffect'

interface HeroProps {
  onCtaClick: () => void
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-blanc text-forge">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto gap-10"
      >
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="The Simple Trip"
          className="w-12 h-12 md:w-16 md:h-16"
        />

        {/* Typewriter headline */}
        <TypewriterEffect
          words={[
            { text: 'Explore' },
            { text: 'qualquer' },
            { text: 'lugar.' },
            { text: 'Sem' },
            { text: 'medo.', className: 'text-[#F5E642]' },
          ]}
        />

        {/* Subtext */}
        <p className="font-sans text-base md:text-lg text-forge/70 max-w-xl leading-relaxed">
          O sistema de viagem que reúne roteiro, finanças, documentos e
          hospedagem em um só lugar.
        </p>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="mt-2 px-8 py-3 bg-forge text-blanc font-sans text-sm tracking-wide rounded-lg hover:bg-forge/90 transition-colors duration-300"
        >
          Ver o template
        </button>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat: add Hero section"
```

---

## Task 10: Section 2 — A Dor

**Files:**
- Create: `src/sections/ADor.tsx`

- [ ] **Step 1: Create ADor.tsx**

```tsx
// src/sections/ADor.tsx
// No external assets required.

import { motion } from 'framer-motion'
import { GooeyTextMorphing } from '@/components/GooeyTextMorphing'

export function ADor() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-forge text-blanc">
      <div className="max-w-3xl mx-auto text-center space-y-16">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-blanc/50"
        >
          Parece familiar?
        </motion.p>

        {/* Gooey morphing text */}
        <GooeyTextMorphing
          phrases={[
            'Roteiro num app.',
            'Gastos em outro.',
            'Documentos no WhatsApp.',
            'Hospedagem numa aba perdida.',
          ]}
        />

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display italic text-2xl md:text-3xl text-blanc/80"
        >
          Parece familiar?
        </motion.p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/ADor.tsx
git commit -m "feat: add ADor section"
```

---

## Task 11: Section 3 — A Virada de Chave

**Files:**
- Create: `src/sections/AViradaDeChave.tsx`

- [ ] **Step 1: Create AViradaDeChave.tsx**

```tsx
// src/sections/AViradaDeChave.tsx
// No external assets required. Heart of the page — editorial text only.

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
}

export function AViradaDeChave() {
  return (
    <section className="min-h-screen flex items-center px-6 py-32 bg-blanc">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Headline */}
        <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-forge leading-tight"
        >
          Você não quer organizar a viagem.{' '}
          <span className="italic">Quer viver ela.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-sans text-base md:text-lg text-forge/70 leading-relaxed"
        >
          Turista agenda tudo. Viajante deixa espaço pra cidade acontecer.
          O melhor momento da viagem raramente estava no plano.
        </motion.p>

        {/* Signature */}
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-hand text-2xl text-forge/50"
        >
          viajar de verdade
        </motion.p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/AViradaDeChave.tsx
git commit -m "feat: add AViradaDeChave section"
```

---

## Task 12: Section 4 — O Produto

**Files:**
- Create: `src/sections/OProduto.tsx`
- Assets: `/public/screenshots/slide-{1-4}.svg` (placeholders exist)

- [ ] **Step 1: Create OProduto.tsx**

```tsx
// src/sections/OProduto.tsx
// Assets: /public/screenshots/slide-1.svg through slide-4.svg
// Replace .svg with .jpg when real screenshots are added.

import { motion } from 'framer-motion'
import { AnimatedSlideshow } from '@/components/AnimatedSlideshow'

export function OProduto() {
  return (
    <section className="py-32 px-6 bg-forge text-blanc">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-blanc/50"
          >
            O Template
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl text-blanc"
          >
            Tudo em um lugar só.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-blanc/60 text-base md:text-lg max-w-xl"
          >
            Roteiro, finanças, documentos, transporte e hospedagem.
            Organizado do jeito que faz sentido.
          </motion.p>
        </div>

        {/* Slideshow */}
        <AnimatedSlideshow
          slides={[
            { src: '/screenshots/slide-1.svg', alt: 'Dashboard' },
            { src: '/screenshots/slide-2.svg', alt: 'Roteiro' },
            { src: '/screenshots/slide-3.svg', alt: 'Finanças' },
            { src: '/screenshots/slide-4.svg', alt: 'Documentos' },
          ]}
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/OProduto.tsx
git commit -m "feat: add OProduto section"
```

---

## Task 13: Section 5 — Seções em Detalhe

**Files:**
- Create: `src/sections/SecoesEmDetalhe.tsx`
- Assets: `/public/screenshots/detail-{1-3}.svg` (placeholders exist)

- [ ] **Step 1: Create SecoesEmDetalhe.tsx**

```tsx
// src/sections/SecoesEmDetalhe.tsx
// Assets: /public/screenshots/detail-1.svg, detail-2.svg, detail-3.svg
// Replace .svg with .jpg when real screenshots are added.

import { motion } from 'framer-motion'

const blocks = [
  {
    kicker: 'Roteiro & Calendário',
    headline: 'Cada dia da sua viagem, organizado.',
    body: 'Atividades por cidade, horário e data.',
    image: '/screenshots/detail-1.svg',
    imageAlt: 'Roteiro e Calendário',
    reverse: false,
  },
  {
    kicker: 'Budget & Controle',
    headline: 'Você sabe exatamente quanto ainda tem.',
    body: 'Câmbio automático, budget por categoria, balanço em tempo real.',
    image: '/screenshots/detail-2.svg',
    imageAlt: 'Budget e Controle',
    reverse: true,
  },
  {
    kicker: 'Tudo Incluso',
    headline: 'Do passaporte ao check-out.',
    body: 'Documentos por viajante, transportes, hospedagens.',
    image: '/screenshots/detail-3.svg',
    imageAlt: 'Tudo Incluso',
    reverse: false,
  },
]

export function SecoesEmDetalhe() {
  return (
    <section className="py-32 px-6 bg-blanc">
      <div className="max-w-5xl mx-auto space-y-32">
        {blocks.map((block, i) => (
          <motion.div
            key={block.kicker}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
          >
            {/* Text */}
            <div className="flex-1 space-y-4">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-forge/40">
                {block.kicker}
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-forge leading-snug">
                {block.headline}
              </h3>
              <p className="font-sans text-forge/60 text-base leading-relaxed">
                {block.body}
              </p>
            </div>

            {/* Screenshot */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-sm">
              <img
                src={block.image}
                alt={block.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/SecoesEmDetalhe.tsx
git commit -m "feat: add SecoesEmDetalhe section"
```

---

## Task 14: Section 6 — Prova Real

**Files:**
- Create: `src/sections/ProvaReal.tsx`

- [ ] **Step 1: Create ProvaReal.tsx**

```tsx
// src/sections/ProvaReal.tsx
// No external assets required.

import { motion } from 'framer-motion'

const contexts = [
  { label: 'Brasil, na estrada', description: 'Rodovias, cidades pequenas, improviso com sistema.' },
  { label: 'Europa, um mês', description: 'Dez países, dois viajantes, zero planilha perdida.' },
  { label: 'O outro lado do mundo', description: 'Fuso, idioma, moeda — tudo no mesmo lugar.' },
]

export function ProvaReal() {
  return (
    <section className="py-32 px-6 bg-forge text-blanc">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-blanc/40"
          >
            Testado na vida real
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl text-blanc leading-tight"
          >
            Não nasceu numa planilha.{' '}
            <span className="italic">Nasceu na estrada.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-blanc/60 text-base md:text-lg max-w-xl"
          >
            Cada campo desse template foi usado em viagem de verdade — de uma
            roadtrip pelo Brasil a um mês pela Europa, até o outro lado do
            mundo. O que não funcionava, eu cortei. O que ficou é o que você
            recebe.
          </motion.p>
        </div>

        {/* Context cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contexts.map((ctx, i) => (
            <motion.div
              key={ctx.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="border border-blanc/10 rounded-xl p-8 space-y-3"
            >
              <p className="font-display text-xl text-blanc">{ctx.label}</p>
              <p className="font-sans text-sm text-blanc/50 leading-relaxed">
                {ctx.description}
              </p>
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
git add src/sections/ProvaReal.tsx
git commit -m "feat: add ProvaReal section"
```

---

## Task 15: Section 7 — A Oferta

**Files:**
- Create: `src/sections/AOferta.tsx`
- Uses: `src/components/PricingSection.tsx`

- [ ] **Step 1: Create AOferta.tsx**

```tsx
// src/sections/AOferta.tsx
// Uses PricingSection component (bankkroll/single-pricing-card, adapted).
// PLACEHOLDERS: [PREÇO_STARTER], [PREÇO_PRO], [ITENS_STARTER], [ITENS_PRO],
//               [INDICE_EBOOK], [LINK_CHECKOUT_STARTER], [LINK_CHECKOUT_PRO]

import { motion } from 'framer-motion'
import { SinglePricingCard } from '@/components/PricingSection'
import { MapPin, BookOpen, Star, Check, ArrowRight, ChevronRight } from 'lucide-react'

export function AOferta() {
  return (
    <section id="oferta" className="py-32 px-6 bg-blanc">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forge/40">
            Escolha seu plano
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forge">
            Comece a viajar de verdade.
          </h2>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SinglePricingCard
              title="Starter"
              subtitle="Para quem quer organização"
              price={{ current: '[PREÇO_STARTER]' }}
              benefits={[
                { text: 'Template básico do Notion', icon: Check },
                // [ITENS_STARTER] — add benefit objects here
              ]}
              features={[
                { text: '[ITENS_STARTER]' },
              ]}
              featuresIcon={MapPin}
              featuresTitle="Incluso"
              primaryButton={{
                text: 'Comprar Starter',
                icon: ArrowRight,
                href: '[LINK_CHECKOUT_STARTER]',
                chevronIcon: ChevronRight,
              }}
              testimonials={[]}
              animationEnabled={false}
            />
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SinglePricingCard
              badge={{ icon: Star, text: 'Mais escolhido' }}
              title="Pro"
              subtitle="Para quem quer viajar de verdade"
              price={{ current: '[PREÇO_PRO]' }}
              benefits={[
                { text: 'Template básico + versão avançada', icon: Check },
                { text: 'Ebook de viagem: [INDICE_EBOOK]', icon: BookOpen },
                // [ITENS_PRO] — add benefit objects here
              ]}
              features={[
                { text: '[ITENS_PRO]' },
              ]}
              featuresIcon={MapPin}
              featuresTitle="Incluso no Pro"
              primaryButton={{
                text: 'Comprar Pro',
                icon: ArrowRight,
                href: '[LINK_CHECKOUT_PRO]',
                chevronIcon: ChevronRight,
              }}
              testimonials={[]}
              animationEnabled={false}
              cardClassName="border-rouge"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/AOferta.tsx
git commit -m "feat: add AOferta section with two-tier pricing"
```

---

## Task 16: Section 8 — Objeções (FAQ)

**Files:**
- Create: `src/sections/Objecoes.tsx`

- [ ] **Step 1: Create Objecoes.tsx**

```tsx
// src/sections/Objecoes.tsx
// No external assets required.
// PLACEHOLDERS: [RESPOSTA_FAQ_1] through [RESPOSTA_FAQ_4]

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Preciso saber usar Notion?', a: '[RESPOSTA_FAQ_1]' },
  { q: 'Funciona no celular?', a: '[RESPOSTA_FAQ_2]' },
  { q: 'É vitalício ou assinatura?', a: '[RESPOSTA_FAQ_3]' },
  { q: 'E se eu não gostar?', a: '[RESPOSTA_FAQ_4]' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-forge/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
      >
        <span className="font-display text-lg md:text-xl text-forge">{q}</span>
        <span className="flex-shrink-0 text-forge/40">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-forge/60 text-base pb-6 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Objecoes() {
  return (
    <section className="py-32 px-6 bg-blanc">
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forge/40">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forge">
            Antes de decidir.
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Objecoes.tsx
git commit -m "feat: add Objecoes FAQ section"
```

---

## Task 17: Section 9 — Fechamento

**Files:**
- Create: `src/sections/Fechamento.tsx`
- Asset: `/public/logo.svg` (placeholder exists)

- [ ] **Step 1: Create Fechamento.tsx**

```tsx
// src/sections/Fechamento.tsx
// Assets: /public/logo.svg (fox logo)

import { motion } from 'framer-motion'

interface FechamentoProps {
  onCtaClick: () => void
}

export function Fechamento({ onCtaClick }: FechamentoProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-forge text-blanc">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/logo.svg"
          alt="The Simple Trip"
          className="w-12 h-12 mx-auto brightness-0 invert"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display italic text-4xl md:text-5xl lg:text-6xl text-blanc leading-tight"
        >
          agora você está{' '}
          <span className="not-italic font-display font-semibold">
            viajando de verdade.
          </span>
        </motion.h2>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onClick={onCtaClick}
          className="px-8 py-3 bg-blanc text-forge font-sans text-sm tracking-wide rounded-lg hover:bg-blanc/90 transition-colors duration-300"
        >
          Ver o template
        </motion.button>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 font-mono text-xs text-blanc/30 tracking-widest"
      >
        @thesimpletrip_
      </motion.footer>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Fechamento.tsx
git commit -m "feat: add Fechamento closing section"
```

---

## Task 18: Assemble App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Write App.tsx**

```tsx
import { useRef } from 'react'
import { Hero } from '@/sections/Hero'
import { ADor } from '@/sections/ADor'
import { AViradaDeChave } from '@/sections/AViradaDeChave'
import { OProduto } from '@/sections/OProduto'
import { SecoesEmDetalhe } from '@/sections/SecoesEmDetalhe'
import { ProvaReal } from '@/sections/ProvaReal'
import { AOferta } from '@/sections/AOferta'
import { Objecoes } from '@/sections/Objecoes'
import { Fechamento } from '@/sections/Fechamento'

export default function App() {
  const ofertaRef = useRef<HTMLDivElement>(null)

  const scrollToOferta = () => {
    ofertaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Hero onCtaClick={scrollToOferta} />
      <ADor />
      <AViradaDeChave />
      <OProduto />
      <SecoesEmDetalhe />
      <ProvaReal />
      <div ref={ofertaRef}>
        <AOferta />
      </div>
      <Objecoes />
      <Fechamento onCtaClick={scrollToOferta} />
    </main>
  )
}
```

- [ ] **Step 2: Update main.tsx to remove React StrictMode double-render issues with animations**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

StrictMode is fine — Framer Motion handles double invocation correctly in v11.

- [ ] **Step 3: Verify full page renders**

```bash
npm run dev
```

Open `http://localhost:5173`. All 9 sections should scroll without errors. Check DevTools console for 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/main.tsx
git commit -m "feat: assemble all 9 sections in App.tsx"
```

---

## Task 19: TypeScript check + final smoke test

**Files:** No changes — verification only.

- [ ] **Step 1: Run type check**

```bash
npx tsc --noEmit
```

Expected: no errors. If errors appear, fix them before proceeding.

- [ ] **Step 2: Run dev and verify all sections**

```bash
npm run dev
```

Scroll through all 9 sections and verify:
- [ ] Hero: typewriter animates, logo visible, CTA scrolls to offer
- [ ] A Dor: gooey morph cycles through 4 phrases
- [ ] Virada de Chave: text fades in on scroll
- [ ] O Produto: slideshow auto-advances with dot indicator
- [ ] Seções em Detalhe: alternating layout works on desktop
- [ ] Prova Real: 3 cards visible
- [ ] A Oferta: two pricing cards, Pro has badge + colored border
- [ ] Objeções: accordion opens/closes with animation
- [ ] Fechamento: italic headline, CTA scrolls to offer

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "chore: final verification pass — landing page complete"
```

---

## Placeholders summary (fill before launch)

| Placeholder | Location |
|---|---|
| `[PREÇO_STARTER]` | `src/sections/AOferta.tsx` |
| `[PREÇO_PRO]` | `src/sections/AOferta.tsx` |
| `[ITENS_STARTER]` | `src/sections/AOferta.tsx` |
| `[ITENS_PRO]` | `src/sections/AOferta.tsx` |
| `[INDICE_EBOOK]` | `src/sections/AOferta.tsx` |
| `[LINK_CHECKOUT_STARTER]` | `src/sections/AOferta.tsx` |
| `[LINK_CHECKOUT_PRO]` | `src/sections/AOferta.tsx` |
| `[RESPOSTA_FAQ_1–4]` | `src/sections/Objecoes.tsx` |
| `/public/logo.svg` | replace placeholder SVG with real fox logo |
| `/public/screenshots/slide-{1-4}.svg` | replace with real `.jpg` screenshots |
| `/public/screenshots/detail-{1-3}.svg` | replace with real `.jpg` screenshots |
