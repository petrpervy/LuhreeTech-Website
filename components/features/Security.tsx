'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye } from 'lucide-react'

const SECURITY_FEATURES = [
  {
    icon: Shield,
    title: 'On-premise option',
    description: 'Keep your data in-house with our secure on-premise deployment option.'
  },
  {
    icon: Lock,
    title: 'Least-privilege access',
    description: 'Minimal permissions ensure your data is only accessed when necessary.'
  },
  {
    icon: Eye,
    title: 'Data encrypted',
    description: 'End-to-end encryption protects your sensitive information at all times.'
  }
]

export function Security() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECURITY_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-teal-400 to-accent-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
