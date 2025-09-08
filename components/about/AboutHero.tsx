'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const data = Array.from({length: 16}, (_,i)=>({x:i,y: 40 + Math.round(Math.sin(i/2)*8) + i}));

export default function AboutHero(){
  const prefersReduced = useReducedMotion()
  return (
    <section className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: prefersReduced ? 0 : 0.6 }}
      >
        <p className="text-accent-teal-500 font-medium mb-2">Luhreetech's Answer</p>
        <h1 className="text-4xl/tight md:text-5xl font-extrabold tracking-tight text-ink">
          We're building digital employees that work like real ones.
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          We design, deploy, and manage AI that handles reception, intake, scheduling, reminders, and routine ops—so your team can focus on meaningful work.
        </p>
        <div className="mt-6 flex gap-3">
          <Button variant="primary" asChild>
            <a href="/contact#book">Start Free Audit</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/features">
              <Sparkles className="mr-2 h-4 w-4"/>
              See what it can do
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity:0, y:10}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.4}}
        transition={{duration: prefersReduced ? 0 : 0.6}}
        className="rounded-3xl border border-white/25 bg-white/60 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,.08)] relative overflow-hidden"
        aria-label="AI activity dashboard illustration"
      >
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {['Faster first response','Cleaner records','Less back-and-forth'].map((t,i)=>(
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReduced ? 0 : i * 0.1, duration: 0.4 }}
              className="rounded-2xl bg-white/70 border border-white/30 px-3 py-2 text-sm shadow-sm"
            >
              {t}
            </motion.div>
          ))}
        </div>
        <div className="h-40 rounded-2xl bg-gradient-to-b from-white/70 to-white/30 border border-white/30 p-2">
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M0,30 
              5,28 10,29 15,27 20,26 25,24 30,25 35,23 40,22 45,23 50,21 55,22 60,20 65,21 70,19 75,20 80,18 85,19 90,18 95,17 100,16"
              fill="none" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent-teal-500/20 blur-3xl pointer-events-none" />
      </motion.div>
    </section>
  )
}


