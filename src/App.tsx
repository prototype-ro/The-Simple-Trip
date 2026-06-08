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
