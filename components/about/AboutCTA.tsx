'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Play } from 'lucide-react'

export default function AboutCTA(): JSX.Element {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: prefersReduced ? 0 : 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          Ready to offload your busiest tasks?
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl mx-auto mb-8">
          Start with a free audit—see exactly where AI can give you hours back every week.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">
            <a href="/contact#book">Start Free Audit</a>
          </Button>
          <Button variant="secondary">
            <a href="/demo">
              <Play className="mr-2 h-4 w-4" />
              Watch a 2-min demo
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}


