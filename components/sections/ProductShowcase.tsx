"use client"
import { motion } from "framer-motion"
import { Phone, Users, Mail, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"
import { GlassOrb } from "@/components/ui/GlassOrb"
import { GlassWave } from "@/components/ui/GlassWave"

const products = [
  {
    icon: Phone,
    title: "AI Receptionist",
    subtitle: "24/7 Intelligent Call Handling",
    description: "Handles calls, manages intake, and books appointments with human-like intelligence.",
    useCases: [
      { business: "Law Firm", scenario: "Client intake calls", result: "95% accuracy, 3x faster processing" },
      { business: "HVAC Company", scenario: "Service requests", result: "Instant scheduling, reduced callbacks" },
      { business: "Dental Practice", scenario: "Appointment booking", result: "40% fewer no-shows" }
    ],
    features: ["Voicemail transcription", "Smart routing", "CRM integration", "Multi-language support"],
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Users,
    title: "Lead-Gen Bot",
    subtitle: "Automated Prospect Discovery",
    description: "Scrapes and enriches SMB prospects, outputs structured data for your sales pipeline.",
    useCases: [
      { business: "Home Services", scenario: "Local competitor analysis", result: "200+ qualified leads weekly" },
      { business: "Medical Practice", scenario: "Patient referrals", result: "30% increase in new patients" },
      { business: "Agency", scenario: "Target account research", result: "85% data accuracy" }
    ],
    features: ["Web scraping", "Data enrichment", "CSV export", "CRM sync"],
    color: "from-green-400 to-green-600"
  },
  {
    icon: Mail,
    title: "Email Assistant",
    subtitle: "Intelligent Inbox Management",
    description: "Reads, summarizes, and drafts responses while scheduling meetings automatically.",
    useCases: [
      { business: "Law Office", scenario: "Client communications", result: "4 hours saved daily" },
      { business: "Service Company", scenario: "Customer inquiries", result: "Instant response guarantee" },
      { business: "Medical Group", scenario: "Patient coordination", result: "Zero missed appointments" }
    ],
    features: ["Email summarization", "Smart drafting", "Calendar sync", "Priority routing"],
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Custom AI Solutions",
    description: "Tailored automation for OCR, reporting, reminders, and data entry workflows.",
    useCases: [
      { business: "Accounting Firm", scenario: "Document processing", result: "90% faster data entry" },
      { business: "Real Estate", scenario: "Lead nurturing", result: "Automated follow-ups" },
      { business: "Retail", scenario: "Inventory alerts", result: "Predictive ordering" }
    ],
    features: ["OCR processing", "Custom workflows", "API integration", "Real-time alerts"],
    color: "from-orange-400 to-orange-600"
  }
]

export default function ProductShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      {/* Background Elements */}
      <GlassOrb size="lg" className="absolute top-32 left-20 opacity-10" delay={0.5} />
      <GlassOrb size="md" className="absolute bottom-40 right-24 opacity-12" delay={2.0} />
      <GlassWave className="absolute top-1/2 left-0 right-0 h-px opacity-20" delay={1.5} />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-ink">Enterprise-Grade AI Solutions</span>
          </div>

          <h2 className="h2 mb-6">Complete AI Workforce for Your Business</h2>

          <p className="text-xl text-mute max-w-4xl mx-auto leading-relaxed">
            From intelligent reception to automated lead generation, Luhreetech provides
            the full suite of AI employees designed specifically for SMB workflows.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-20">
          {products.map((product, productIndex) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: productIndex * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  productIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Info */}
                <div className={productIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <FloatingGlassCard className="p-8" depth={3} delay={0.3 + productIndex * 0.2}>
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-ink mb-2">{product.title}</h3>
                    <h4 className="text-lg text-blue-600 font-medium mb-4">{product.subtitle}</h4>

                    <p className="text-mute leading-relaxed mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-ink">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </FloatingGlassCard>
                </div>

                {/* Use Cases */}
                <div className={productIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-ink mb-6">Real Business Results</h4>

                    {product.useCases.map((useCase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: productIndex % 2 === 0 ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FloatingGlassCard className="p-6" depth={1} delay={0.5 + index * 0.1}>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <span className="text-sm font-bold text-blue-600">
                                    {useCase.business.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-ink">{useCase.business}</div>
                                  <div className="text-sm text-mute">{useCase.scenario}</div>
                                </div>
                              </div>
                              <div className="text-green-600 font-medium text-sm bg-green-50 px-3 py-1 rounded-full inline-block">
                                {useCase.result}
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-blue-400 mt-2" />
                          </div>
                        </FloatingGlassCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <FloatingGlassCard className="p-8 max-w-3xl mx-auto" depth={3} shimmer={true} delay={1.6}>
            <h3 className="text-2xl font-bold text-ink mb-4">Start with Any Module, Scale to All</h3>
            <p className="text-mute mb-8 text-lg">
              Begin with one AI employee and expand as your business grows. All solutions work together seamlessly.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">1-2 Weeks</div>
                <div className="text-sm text-mute">Setup Time</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                <div className="text-sm text-mute">Uptime SLA</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-mute">Support</div>
              </div>
            </div>

            <button className="btn btn-cta px-8 py-4 text-lg">
              Schedule Your Free Demo
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </FloatingGlassCard>
        </motion.div>
      </div>
    </section>
  )
}
