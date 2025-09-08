'use client'
import { motion } from 'framer-motion'
import { CardGlass } from '@/components/ui/CardGlass'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeatureSectionProps {
  title: string
  subtitle: string
  description: string
  image?: React.ReactNode
  ctaText?: string
  ctaHref?: string
  reverse?: boolean
}

export function FeatureSection({ 
  title, 
  subtitle, 
  description, 
  image, 
  ctaText = "Learn more",
  ctaHref = "/features",
  reverse = false 
}: FeatureSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 className="text-h2x text-brand-ink">{title}</h2>
              <h3 className="text-h3x text-brand-orange">{subtitle}</h3>
              <p className="text-lg text-brand-gray leading-relaxed">{description}</p>
            </div>
            
            {ctaHref && (
              <Button variant="primary" size="md" asChild>
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            )}
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardGlass className="p-8">
              {image || (
                <div className="aspect-video bg-gradient-soft rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">🚀</div>
                    <div className="text-brand-ink font-semibold">Feature Mockup</div>
                  </div>
                </div>
              )}
            </CardGlass>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
