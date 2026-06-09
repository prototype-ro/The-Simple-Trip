import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    subtitle: 'Para quem quer organização',
    price: '[PREÇO_STARTER]',
    href: '[LINK_CHECKOUT_STARTER]',
    highlight: false,
    badge: undefined as string | undefined,
    benefits: [
      'Template básico do Notion',
      'Roteiro, finanças e documentos',
      'Acesso vitalício',
    ],
  },
  {
    name: 'Pro',
    subtitle: 'Para quem quer viajar de verdade',
    price: '[PREÇO_PRO]',
    href: '[LINK_CHECKOUT_PRO]',
    highlight: true,
    badge: 'Mais escolhido',
    benefits: [
      'Template básico + versão avançada',
      'Ebook de viagem: [INDICE_EBOOK]',
      'Transportes e hospedagens',
      'Acesso vitalício + atualizações',
    ],
  },
]

export function Pricing() {
  return (
    <section id="oferta" className="px-8 py-32 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#C8FF00] text-xs uppercase tracking-widest mb-4">
          Escolha seu plano
        </p>
        <h2 className="text-5xl font-black text-[#F5F0E8]">
          Comece a viajar de verdade.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl p-8 ${
              plan.highlight
                ? 'bg-[#111111] border-2 border-[#C8FF00]'
                : 'bg-[#111111] border border-[#1E1E1E]'
            }`}
          >
            {plan.badge && (
              <span className="inline-block bg-[#C8FF00] text-[#0A0A0A] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {plan.badge}
              </span>
            )}
            <h3 className="text-2xl font-bold text-[#F5F0E8] mb-1">{plan.name}</h3>
            <p className="text-[#666666] text-sm mb-6">{plan.subtitle}</p>
            <p className="text-4xl font-black text-[#F5F0E8] mb-8">{plan.price}</p>

            <ul className="space-y-3 mb-8">
              {plan.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-[#F5F0E8]">
                  <span className="text-[#C8FF00] mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              className={`block text-center font-semibold px-6 py-4 rounded-full text-sm transition-colors ${
                plan.highlight
                  ? 'bg-[#C8FF00] text-[#0A0A0A] hover:bg-[#d4ff33]'
                  : 'border border-[#F5F0E8] text-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#0A0A0A]'
              }`}
            >
              Comprar {plan.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
