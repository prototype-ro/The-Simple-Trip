# brandappart.com Clone — Design Spec

**Date:** 2026-06-08  
**Strategy:** Replace existing App.tsx sections with pixel-perfect brandappart.com clone  
**Stack:** React + Tailwind v4 + Framer Motion

---

## Design Tokens

```css
--bg:        #0A0A0A
--surface:   #111111
--text:      #F5F0E8
--muted:     #666666
--accent:    #C8FF00
--border:    #1E1E1E
--font:      'Inter', sans-serif
```

---

## Sections (in order)

### 1. Nav
- Logo (text "Brand Appart") left
- Links center: Works, About us, Contact
- Right: language toggle "FR" + "Book a call now" pill button (accent bg, black text)
- Sticky, transparent → solid on scroll

### 2. Hero
- Full-viewport height
- Large headline: `"The design© partner for top-tier companies"` — heavy weight, cream
- Subheading: `"We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks."`
- CTA: `"Book an intro call"` — outlined pill button
- Below: client logo strip (LinkedIn, Forbes, PMU, Paris Blockchain, Rockfi, Ircam) — grayscale, fade-in

### 3. Featured Work
- Section heading: `"Featured work"`
- Subtext: `"We create innovative and purposeful designs that capture attention and drive meaningful results."`
- Grid: 2-col masonry-style cards
- Each card: project image (placeholder), name, category tag, year
- Hover: overlay with "Discover case →"
- Projects: Incard, Sowbeez, Forbes, Sobry, We Are, Stables, Jaws Group

### 4. Services
- 4 expandable rows (accordion)
- Each row: number + service name + one-line outcome right-aligned
- Expand reveals description paragraph
- Services: Branding, Product Design, Web Design, Pitch Decks

### 5. Testimonials
- Heading: `"Trusted by +40 founders"`
- Horizontal scroll strip of quote cards
- Each card: quote text + avatar + name + company

### 6. Team
- Heading: `"Small team, big results"`
- 2-col layout: description left, team member photos right
- CTA: `"Know more about us"`

### 7. Footer CTA
- Full-width dark section
- Large text: `"Make every pixel pay for itself!"`
- Secondary CTA: `"Get your quote in 24h"`
- Bottom bar: nav links + social icons (Instagram, X, LinkedIn, Behance) + copyright

---

## Motion

| Element | Animation |
|---|---|
| Hero headline | words fade-up staggered on mount |
| Client logos | fade-in left-to-right stagger |
| Work cards | scale + fade on scroll-enter |
| Service accordion | height expand with ease |
| Testimonial strip | drag-scroll, no autoplay |

---

## File Structure

```
src/
  sections/
    Nav.tsx
    Hero.tsx
    FeaturedWork.tsx
    Services.tsx
    Testimonials.tsx
    Team.tsx
    FooterCTA.tsx
  lib/
    tokens.ts       # design token constants
  App.tsx           # assembles all sections
```

---

## Out of Scope

- Real images (placeholders used, Webflow CDN not accessible)
- `/works`, `/about`, `/start-a-project` sub-pages
- FR language toggle functionality
- Contact form backend
