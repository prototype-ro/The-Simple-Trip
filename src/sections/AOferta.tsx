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
                { text: '[ITENS_STARTER]', icon: Check },
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
                { text: '[ITENS_PRO]', icon: Check },
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
              cardClassName="border-2 border-[#853953]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
