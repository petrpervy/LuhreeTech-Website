'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Search, Code, CheckCircle2, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Audit',
    bullets: ['Map calls, forms, and workflows', 'Define success metrics', '~45 min']
  },
  {
    icon: Code,
    title: 'Build',
    bullets: ['Design flows', 'Connect calendars/CRMs/phones', 'Test edge cases']
  },
  {
    icon: CheckCircle2,
    title: 'Approve',
    bullets: ['You review', 'We adjust prompts/guardrails', 'Green-light to go live']
  },
  {
    icon: Headphones,
    title: 'Support',
    bullets: ['24/7 monitoring', 'Iterate prompts', 'Escalate tricky cases']
  }
]

export default function ProcessTimeline(): JSX.Element {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: prefersReduced ? 0 : 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Process</h2>
        <p className="text-lg text-ink/70 max-w-2xl mx-auto">
          From initial audit to ongoing support, we handle the complexity so you get results.
        </p>
      </motion.div>

      <div className="relative">
        {/* Progress rail */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 rounded-full -translate-y-1/2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 2, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-accent-teal-500 to-accent-sapphire-500 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ 
                  duration: prefersReduced ? 0 : 0.6,
                  delay: prefersReduced ? 0 : index * 0.1
                }}
                className="relative"
              >
                <div className="rounded-3xl border border-white/25 bg-white/60 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,.12)] transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-teal-500/10 border border-accent-teal-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 text-sm text-ink/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal-500/60 mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Connection line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-1/2 -bottom-8 left-1/2 w-px h-8 bg-white/20" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


