'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'How quickly can I get started?',
    answer: 'Most clients are up and running within 2-3 weeks. We handle the entire setup process, so you can focus on your business.'
  },
  {
    question: 'What if I don\'t know what I need?',
    answer: 'That\'s exactly what our free audit is for. We\'ll analyze your current processes and recommend the highest-impact automations.'
  },
  {
    question: 'Do I need technical knowledge?',
    answer: 'Not at all. We handle all the technical implementation and provide ongoing support. You just focus on running your business.'
  },
  {
    question: 'Can I upgrade anytime?',
    answer: 'Absolutely. As your business grows, we can easily scale your automation to handle more volume and complexity.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about our automation services.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus-ring rounded-3xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-brand-ink">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-accent-teal-500" />
                ) : (
                  <Plus className="h-5 w-5 text-accent-teal-500" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
