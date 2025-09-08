'use client'
import { motion, useReducedMotion } from 'framer-motion'

const integrations = ['Google Calendar', 'Microsoft 365', 'HubSpot', 'Pipedrive', 'Slack', 'Twilio']

export default function FounderStory(): JSX.Element {
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
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Why we started Luhreetech</h2>
          
          <div className="space-y-6 text-lg text-ink/70 leading-relaxed">
            <p>
              We watched small teams drown in busywork while enterprise tools got all the attention. The advantage existed—it just wasn't packaged for SMBs.
            </p>
            <p>
              We built Luhreetech to deliver AI like a dependable teammate: scoped, monitored, and actually adopted.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-lg font-semibold text-ink">— The Luhreetech Team</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReduced ? 0 : 0.8 }}
          className="space-y-8"
        >
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-teal-500/20 to-accent-sapphire-500/20 border-2 border-accent-teal-500/30 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-16 h-16 text-accent-teal-500">
                  <circle cx="32" cy="24" r="12" fill="currentColor" opacity="0.8"/>
                  <path d="M8 56c0-13.3 10.7-24 24-24s24 10.7 24 24" fill="currentColor" opacity="0.8"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-sapphire-500/20 border border-accent-sapphire-500/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent-sapphire-500" />
              </div>
            </div>
          </div>

          {/* Integration badges */}
          <div className="rounded-3xl border border-white/25 bg-white/60 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
            <h3 className="text-lg font-semibold text-ink mb-4 text-center">As seen in your workflow</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {integrations.map((integration, index) => (
                <motion.span
                  key={integration}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: prefersReduced ? 0 : 0.4,
                    delay: prefersReduced ? 0 : index * 0.05
                  }}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 border border-white/40 text-sm font-medium text-ink/80 shadow-sm"
                >
                  {integration}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


