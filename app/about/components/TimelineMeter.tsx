'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function TimelineMeter() {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-white/6 ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_20px_40px_-10px_rgba(10,14,23,0.25)] backdrop-blur-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              1–2 weeks → typical pilot → go-live
            </h3>
            <p className="text-sm text-slate-600">
              Depends on integrations & approvals
            </p>
          </div>
          
          {/* Gradient track */}
          <div className="mt-8 relative">
            <div className="h-2 bg-gradient-to-r from-teal-500/20 via-teal-500/40 to-teal-500/20 rounded-full overflow-hidden">
              {/* Pulsing marker */}
              <motion.div
                initial={{ x: '0%' }}
                animate={prefersReduced ? { x: '0%' } : { x: ['0%', '100%', '0%'] }}
                transition={{ 
                  duration: prefersReduced ? 0 : 3,
                  repeat: prefersReduced ? 0 : Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-0 w-4 h-2 bg-teal-500 rounded-full shadow-lg"
              />
            </div>
            
            {/* Timeline labels */}
            <div className="flex justify-between mt-3 text-xs text-slate-500">
              <span>Audit</span>
              <span>Prototype</span>
              <span>Pilot</span>
              <span>Go-live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
