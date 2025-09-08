'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { TagPill } from '@/components/ui/TagPill'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export function Hero() {
  const hero = {
    eyebrow: "Done-for-you AI Automations",
    title: "Digital employees that answer, schedule, and follow up",
    subtitle: "We build and manage AI that handles reception, intake, scheduling, reminders, and routine ops—so your team focuses on high-value work.",
    primary_cta: { label: "Start Free Audit", href: "/contact#book" },
    secondary_cta: { label: "See Features", href: "/features" }
  }

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1 
            className="text-display text-brand-ink leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's make your dream a{' '}
            <span className="text-brand-lime">reality.</span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p 
            className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {hero.subtitle}
          </motion.p>

          {/* Input Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex gap-3 bg-white rounded-input shadow-card p-2">
              <input
                type="text"
                placeholder="Describe what you want to automate..."
                className="flex-1 px-4 py-3 text-brand-ink placeholder-brand-gray focus:outline-none"
              />
              <Button variant="primary" size="md" asChild>
                <Link href="/contact">
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Suggestion Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <TagPill>Save 20+ hrs/week</TagPill>
            <TagPill>Human-in-the-loop</TagPill>
            <TagPill>Secure by design</TagPill>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


