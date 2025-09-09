import React from 'react'
import GlassCard from '../ui/GlassCard'

interface FeatureSectionProps {
  title: string
  subtitle: string
  description: string
  children?: React.ReactNode
  reverse?: boolean
}

export default function FeatureSection({ 
  title, 
  subtitle, 
  description, 
  children, 
  reverse = false 
}: FeatureSectionProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <div className="text-sm text-brand-gray mb-2">Luhreetech's Answer</div>
            <h2 className="heading-lg mb-4">{title}</h2>
            <h3 className="heading-md mb-6 text-brand-gray">{subtitle}</h3>
            <p className="text-lg text-brand-gray mb-8">{description}</p>
            {children}
          </div>
          <div className={reverse ? 'lg:col-start-1' : ''}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
