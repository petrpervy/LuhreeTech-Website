'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const industries = [
  { name: 'Law', example: 'missed-call capture & scheduling', tag: 'law' },
  { name: 'Healthcare', example: 'intake + reminders', tag: 'healthcare' },
  { name: 'Logistics', example: 'dispatch & tracking', tag: 'logistics' },
  { name: 'Retail', example: 'service & orders', tag: 'retail' }
]

export default function IndustriesMarquee() {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Who We Work With
        </h2>
        
        <div className="relative overflow-hidden">
          <motion.div
            animate={prefersReduced ? {} : { x: ['0%', '-50%'] }}
            transition={{ 
              duration: prefersReduced ? 0 : 20,
              repeat: prefersReduced ? 0 : Infinity,
              ease: 'linear'
            }}
            className="flex gap-4 whitespace-nowrap"
            onMouseEnter={() => prefersReduced ? null : undefined}
            onMouseLeave={() => prefersReduced ? null : undefined}
          >
            {/* Duplicate for seamless loop */}
            {[...industries, ...industries].map((industry, index) => (
              <Link
                key={`${industry.name}-${index}`}
                href={`/case-studies?tag=${industry.tag}`}
                className="group flex-shrink-0"
              >
                <div className="rounded-2xl bg-white/6 ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_20px_40px_-10px_rgba(10,14,23,0.25)] backdrop-blur-xl hover:bg-white/9 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_30px_60px_-12px_rgba(10,14,23,0.35)] transition-all duration-300 p-4 focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:outline-none min-w-[200px]">
                  <h3 className="font-semibold text-slate-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-slate-600">{industry.example}</p>
                  <div className="mt-2 text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View case studies →
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
