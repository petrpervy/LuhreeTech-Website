'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Target, Users, Eye, Shield } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Results First',
    description: 'We measure success by time saved and value created.'
  },
  {
    icon: Users,
    title: 'Human-Centered',
    description: 'AI augments people; it doesn\'t replace them.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No black boxes. Clear logic and visibility.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Least-privilege access, logging, on-prem option.'
  }
]

export default function ValuesGrid(): JSX.Element {
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
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Values</h2>
        <p className="text-lg text-ink/70 max-w-2xl mx-auto">
          The principles that guide how we build and deliver AI solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ 
                duration: prefersReduced ? 0 : 0.6,
                delay: prefersReduced ? 0 : index * 0.1
              }}
              whileHover={{ 
                y: prefersReduced ? 0 : -4,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="rounded-3xl border border-white/25 bg-white/60 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,.12)] transition-all duration-300 relative overflow-hidden">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal-500/5 to-accent-sapphire-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal-500/10 border border-accent-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent-teal-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ink mb-3">{value.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}


