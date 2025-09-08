'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function MissionBlock(): JSX.Element {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Our Mission</h2>
          <p className="text-lg text-ink/70 mb-8">
            Every small business should have an AI-powered employee to handle the work no one wants to do.
          </p>
          <blockquote className="text-2xl md:text-3xl font-semibold text-ink/90 italic leading-relaxed">
            "Every small business deserves the same AI leverage as big companies—without the complexity."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReduced ? 0 : 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/25 bg-white/60 backdrop-blur-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,.08)] relative overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-full h-64">
              <defs>
                <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3C6FF0" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#16B3A7" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#FFB347" stopOpacity="0.4"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Abstract AI figure - geometric shapes representing AI processing */}
              <g filter="url(#glow)">
                {/* Central processing unit */}
                <circle cx="100" cy="100" r="30" fill="url(#aiGrad)" opacity="0.8"/>
                
                {/* Connected nodes */}
                <circle cx="50" cy="60" r="8" fill="#3C6FF0" opacity="0.7"/>
                <circle cx="150" cy="60" r="8" fill="#16B3A7" opacity="0.7"/>
                <circle cx="50" cy="140" r="8" fill="#FFB347" opacity="0.7"/>
                <circle cx="150" cy="140" r="8" fill="#3C6FF0" opacity="0.7"/>
                
                {/* Connection lines */}
                <line x1="100" y1="100" x2="50" y2="60" stroke="#3C6FF0" strokeWidth="2" opacity="0.6"/>
                <line x1="100" y1="100" x2="150" y2="60" stroke="#16B3A7" strokeWidth="2" opacity="0.6"/>
                <line x1="100" y1="100" x2="50" y2="140" stroke="#FFB347" strokeWidth="2" opacity="0.6"/>
                <line x1="100" y1="100" x2="150" y2="140" stroke="#3C6FF0" strokeWidth="2" opacity="0.6"/>
                
                {/* Data flow particles */}
                <circle cx="75" cy="80" r="3" fill="#14b8a6" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="125" cy="120" r="2" fill="#FFB347" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="90" cy="130" r="2.5" fill="#3C6FF0" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </g>
            </svg>
          </div>
          
          {/* Soft gradient overlay */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent-teal-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent-sapphire-500/10 blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}


