'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
  const plans = [
    {
      name: "Starter Automations",
      price: "$500–1,000",
      period: "per month",
      description: "For 1–2 tasks like email sending, receptionist, or lead scraping",
      features: [
        "Email automation",
        "Basic receptionist",
        "Lead scraping",
        "Email support",
        "Monthly monitoring",
        "Free audit included"
      ],
      cta: "Start Your Free Audit",
      popular: false
    },
    {
      name: "Growth Ops",
      price: "$1,500–2,500",
      period: "per month",
      description: "For 3–6 automations; customer comms + back-office workflows",
      features: [
        "Multiple workflows",
        "CRM integration",
        "Priority support",
        "Weekly improvements",
        "KPI tracking",
        "Dedicated account manager"
      ],
      cta: "Start Your Free Audit",
      popular: true
    },
    {
      name: "AI Employee",
      price: "$3,000–5,000",
      period: "per month",
      description: "Full digital employee: 7+ automations, receptionist, lead gen",
      features: [
        "Complete digital employee",
        "All integrations",
        "Dedicated support",
        "Custom development",
        "On-prem options",
        "Monthly performance reviews"
      ],
      cta: "Book a Build Consult",
      popular: false
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-ink via-brand-ink/95 to-brand-ink/90 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h1">Done-for-you AI automation pricing</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">We handle everything end-to-end. Free audit + pay only after demo approval.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass-dark p-8 ${plan.popular ? 'ring-1 ring-brand-lime/40' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.popular && (
                <>
                  <div className="pointer-events-none absolute -inset-0.5 rounded-lgx bg-gradient-to-r from-brand-lime to-brand-orange blur opacity-25" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-brand-lime px-3 py-1 text-small text-brand-ink shadow-lime-glow">Most Popular</span>
                </>
              )}

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-h2 text-white mb-2">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-3xl font-extrabold text-white">{plan.price}</div>
                    <div className="text-white/80">{plan.period}</div>
                  </div>
                  <p className="text-white/80 mt-4">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 text-white/90">
                      <span className="mt-1 h-5 w-5 rounded-full bg-brand-lime/20 grid place-items-center">
                        <span className="h-2 w-2 rounded-full bg-brand-lime" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant={"primary"}
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <Link href={plan.cta.includes('Consult') ? "/contact?type=consult" : "/contact?type=audit"}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-lime" />
              <span>Free audit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-lime" />
              <span>Pay after demo approval</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-lime" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-h2 text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "How fast is setup?", a: "Free audit in 24 hours, first automation live in 1-2 weeks." },
              { q: "Do you work with our tools?", a: "Yes. Gmail, Google Calendar, HubSpot, CRMs, and custom APIs." },
              { q: "Who maintains the automations?", a: "We do. 24/7 monitoring, quick fixes, and monthly improvements included." },
              { q: "Can we start small?", a: "Yes. We begin with one high-ROI task and scale from there." },
              { q: "What about data privacy?", a: "Least-privilege access, clear audit trails, and on-prem options available." },
              { q: "What if it doesn't work?", a: "Free audit + pay only after demo approval. Cancel anytime." }
            ].map((faq, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-h3 text-white">{faq.q}</h4>
                <p className="text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
