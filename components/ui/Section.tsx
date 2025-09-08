'use client'
import { motion } from 'framer-motion'

export function Section({
  className,
  children,
  subtle = false,
}: {
  className?: string
  children: React.ReactNode
  subtle?: boolean
}) {
  return (
    <section className={`relative overflow-hidden ${subtle ? 'section-gradient' : 'section-gradient'} ${className || ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6 md:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}
