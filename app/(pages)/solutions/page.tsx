import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Scale, Heart, Palette, Home, Briefcase } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions | Luhreetech',
  description: 'Industry-specific AI automation solutions for law firms, healthcare, agencies, and home services.',
}

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'law-firms',
      title: 'Law Firms',
      description: 'Client intake, document processing, and case management automation',
      icon: Scale,
      challenges: [
        'Manual client intake forms taking hours',
        'Document processing and data extraction',
        'Case management and deadline tracking',
        'Client communication and scheduling'
      ],
      benefits: [
        '75% faster client intake',
        'Automated document processing',
        'Never miss a deadline',
        '24/7 client communication'
      ],
      href: '/solutions/law-firms'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Appointment scheduling, patient communication, and administrative automation',
      icon: Heart,
      challenges: [
        'Appointment scheduling and reminders',
        'Patient intake and data collection',
        'Insurance verification and billing',
        'Follow-up care coordination'
      ],
      benefits: [
        '95% reduction in missed appointments',
        'Automated patient intake',
        'Real-time insurance verification',
        'Automated follow-up care'
      ],
      href: '/solutions/healthcare'
    },
    {
      id: 'agencies',
      title: 'Marketing & Creative Agencies',
      description: 'Lead generation, project management, and client communication automation',
      icon: Palette,
      challenges: [
        'Manual lead research and outreach',
        'Project management and client updates',
        'Content scheduling and distribution',
        'Client reporting and analytics'
      ],
      benefits: [
        '30+ qualified leads per week',
        'Automated project tracking',
                'Streamlined client communication',
        'Real-time performance analytics'
      ],
      href: '/solutions/agencies'
    },
    {
      id: 'home-services',
      title: 'Home Services',
      description: 'HVAC, plumbing, electrical scheduling and customer service automation',
      icon: Home,
      challenges: [
        'Service appointment scheduling',
        'Customer inquiry handling',
        'Technician dispatch and routing',
        'Follow-up and maintenance reminders'
      ],
      benefits: [
        'Instant appointment booking',
        '24/7 customer service',
        'Optimized technician routing',
        'Automated maintenance reminders'
      ],
      href: '/solutions/home-services'
    }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-brand-orange/5 via-transparent to-brand-lime/5"></div>
        </div>
        
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-h2x text-brand-ink">
            Industry-specific solutions
          </h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Tailored AI automation for your industry's unique challenges and workflows.
          </p>
          <p className="text-lg text-brand-gray/80">
            We understand your business and build AI employees that fit your specific needs.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Link key={solution.id} href={solution.href}>
                  <div className="glass-light p-8 rounded-lgx hover-liquid group cursor-pointer">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-brand-lime/20 rounded-lg flex items-center justify-center group-hover:bg-brand-lime/30 transition-colors">
                        <IconComponent className="w-8 h-8 text-brand-lime" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-brand-ink mb-3 group-hover:text-brand-lime transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-brand-gray mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-brand-ink mb-2">Challenges We Solve</h4>
                            <ul className="space-y-1">
                              {solution.challenges.slice(0, 2).map((challenge, idx) => (
                                <li key={idx} className="text-xs text-brand-gray">• {challenge}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-brand-ink mb-2">Results You Get</h4>
                            <ul className="space-y-1">
                              {solution.benefits.slice(0, 2).map((benefit, idx) => (
                                <li key={idx} className="text-xs text-brand-gray">• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-6 text-brand-lime group-hover:text-brand-lime/80 transition-colors">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-ink">
              Don't see your industry?
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              We work with businesses across all industries. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary flex items-center gap-2">
                Start Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary flex items-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
