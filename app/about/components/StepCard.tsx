'use client'
import { Search, Beaker, Rocket, Activity } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const icons = {
  Search,
  Beaker,
  Rocket,
  Activity
}

interface StepCardProps {
  icon: keyof typeof icons
  title: string
  bullets: string[]
  step: number
}

export default function StepCard({ icon: iconName, title, bullets, step }: StepCardProps) {
  const prefersReduced = useReducedMotion()
  const Icon = icons[iconName]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : step * 0.1 }}
      whileHover={{ 
        y: prefersReduced ? 0 : -4,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Progress rail */}
      <div className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/20 to-transparent rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: prefersReduced ? 0 : 0.3 }}
          className="h-full bg-gradient-to-r from-teal-500 to-teal-400"
        />
      </div>
      
      <div className="rounded-2xl bg-white/6 ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_20px_40px_-10px_rgba(10,14,23,0.25)] backdrop-blur-xl hover:bg-white/9 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_30px_60px_-12px_rgba(10,14,23,0.35)] transition-all duration-300 p-6 focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:outline-none">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-teal-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500/60 mt-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
