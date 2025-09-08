'use client'
import { Shield, KeySquare, FileLock2, Eye, Server, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const trustFeatures = [
  {
    icon: Shield,
    title: 'Access Control',
    bullets: [
      'Least-privilege access; encrypted secrets',
      'Opt-in logging; audit trails for actions',
      'Configurable escalation to humans'
    ]
  },
  {
    icon: Server,
    title: 'Infrastructure',
    bullets: [
      'On-prem / VPC options when required',
      'PII handling aligned to your policies',
      'Read-only posture during evaluation'
    ]
  }
]

export default function TrustSafetyGrid() {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Trust & Safety
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : index * 0.1 }}
                className="rounded-2xl bg-white/6 ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_20px_40px_-10px_rgba(10,14,23,0.25)] backdrop-blur-xl hover:bg-white/9 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_30px_60px_-12px_rgba(10,14,23,0.35)] transition-all duration-300 p-6 focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:outline-none"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500/60 mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
