import { NavBar }       from '@/sections/NavBar'
import { Hero }         from '@/sections/Hero'
import { FeaturedWork } from '@/sections/FeaturedWork'
import { Services }     from '@/sections/Services'
import { Testimonials } from '@/sections/Testimonials'
import { Pricing }      from '@/sections/Pricing'
import { FooterCTA }    from '@/sections/FooterCTA'

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <Pricing />
      <FooterCTA />
    </main>
  )
}
