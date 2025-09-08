'use client'

import React from 'react'
import { motion } from 'framer-motion'

const INTEGRATIONS = [
  'Google Calendar',
  'Microsoft 365',
  'HubSpot',
  'Pipedrive',
  'Airtable',
  'Slack',
  'Twilio',
  'Stripe'
]

export function IntegrationsRow() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Connect with the tools you already use. No disruption to your existing workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INTEGRATIONS.map((integration, index) => (
            <motion.div
              key={integration}
              className="glass p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-medium text-brand-ink">
                {integration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
