'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

export default function CtaBand() {
  const prefersReduced = useReducedMotion()
  
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReduced ? 0 : 0.4 }}
          className="rounded-2xl bg-white/6 ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_20px_40px_-10px_rgba(10,14,23,0.25)] backdrop-blur-xl hover:bg-white/9 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_30px_60px_-12px_rgba(10,14,23,0.35)] transition-all duration-300 p-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready for a quick audit?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            See exactly where AI can give you hours back every week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:outline-none"
            >
              Start Free Audit
            </Link>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:outline-none rounded-lg px-3 py-2"
            >
              See case studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
