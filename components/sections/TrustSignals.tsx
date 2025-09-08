"use client"
import { motion } from "framer-motion"
import { Star, Quote, CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"
import { GlassOrb } from "@/components/ui/GlassOrb"
import { GlassWave } from "@/components/ui/GlassWave"

const testimonials = [
  {
    quote: "Luhreetech saved us $75K annually and eliminated our 4pm-8am coverage gap. Leads now convert 3x faster.",
    author: "Michael Rodriguez",
    role: "Managing Partner",
    company: "Rodriguez Law Firm",
    industry: "Legal",
    metrics: ["75K saved", "3x faster conversion", "24/7 coverage"]
  },
  {
    quote: "Our intake process was a bottleneck. Now Luhreetech handles 95% of calls perfectly, with better lead quality.",
    author: "Jennifer Walsh",
    role: "Operations Manager",
    company: "Premier HVAC Services",
    industry: "Home Services",
    metrics: ["95% call accuracy", "Better lead quality", "Zero bottlenecks"]
  },
  {
    quote: "Patient scheduling used to take 2 hours daily. Luhreetech does it instantly and reduces no-shows by 40%.",
    author: "Dr. Sarah Kim",
    role: "Practice Owner",
    company: "Kim Dental Care",
    industry: "Healthcare",
    metrics: ["2 hours saved daily", "40% fewer no-shows", "Instant scheduling"]
  }
]

const stats = [
  { label: "Active SMB Clients", value: "500+", icon: Users },
  { label: "ROI Average", value: "340%", icon: TrendingUp },
  { label: "Uptime SLA", value: "99.9%", icon: CheckCircle },
  { label: "Industries Served", value: "12+", icon: Award }
]

export default function TrustSignals() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 bg-gradient-to-b from-white to-gray-50/50">
      {/* Background Elements */}
      <GlassOrb size="xl" className="absolute top-10 right-10 opacity-8" delay={0.5} />
      <GlassOrb size="md" className="absolute bottom-20 left-16 opacity-12" delay={1.8} />
      <GlassWave className="absolute top-1/4 left-0 right-0 h-px opacity-15" delay={1.2} />

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
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-ink">Trusted by SMB Leaders</span>
          </div>

          <h2 className="h2 mb-6">Real Results from Real Businesses</h2>

          <p className="text-xl text-mute max-w-3xl mx-auto leading-relaxed">
            Join 500+ SMBs who've transformed their operations with Luhreetech's AI employees.
            See how they're saving time, money, and growing faster.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <FloatingGlassCard key={stat.label} className="p-6 text-center" depth={1} delay={0.3 + index * 0.1}>
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <div className="text-2xl font-bold text-ink mb-1">{stat.value}</div>
                <div className="text-sm text-mute">{stat.label}</div>
              </FloatingGlassCard>
            )
          })}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FloatingGlassCard className="p-6 h-full" depth={2} delay={0.8 + index * 0.2}>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-mute">Verified Client</span>
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                <p className="text-ink leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-ink">{testimonial.author}</div>
                  <div className="text-sm text-mute">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  <div className="inline-block mt-2 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                    {testimonial.industry}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {testimonial.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </FloatingGlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <FloatingGlassCard className="p-8 max-w-2xl mx-auto" depth={2} shimmer={true} delay={1.4}>
            <h3 className="text-xl font-semibold text-ink mb-4">Ready to Join Them?</h3>
            <p className="text-mute mb-6">
              See how Luhreetech can transform your business operations with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-cta px-8 py-3 text-lg">
                Book Your Free Demo
              </button>
              <button className="btn btn-outline px-8 py-3 text-lg">
                View Case Studies
              </button>
            </div>
          </FloatingGlassCard>
        </motion.div>
      </div>
    </section>
  )
}
