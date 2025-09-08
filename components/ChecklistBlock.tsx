'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface ChecklistItem {
  text: string
  description?: string
}

interface ChecklistBlockProps {
  title: string
  subtitle?: string
  items: ChecklistItem[]
}

export function ChecklistBlock({ title, subtitle, items }: ChecklistBlockProps) {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h2 className="text-h2x text-brand-ink">{title}</h2>
            {subtitle && (
              <p className="text-xl text-brand-gray">{subtitle}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-brand-ink">{item.text}</div>
                  {item.description && (
                    <div className="text-brand-gray text-sm mt-1">{item.description}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
