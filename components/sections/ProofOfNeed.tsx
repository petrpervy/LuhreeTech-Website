"use client"
import { motion } from "framer-motion"
import { TrendingDown, Clock, DollarSign, Users, AlertTriangle } from "lucide-react"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"
import { GlassOrb } from "@/components/ui/GlassOrb"
import { GlassWave } from "@/components/ui/GlassWave"

const painPoints = [
  {
    icon: Clock,
    title: "Lost Business Hours",
    description: "SMBs spend 15-25 hours/week on admin tasks",
    impact: "$50K-$100K annual cost",
    color: "from-red-400 to-red-600"
  },
  {
    icon: DollarSign,
    title: "Missed Opportunities",
    description: "40% of leads go unanswered after hours",
    impact: "25% revenue loss",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: Users,
    title: "Staff Burnout",
    description: "Receptionists handle 50+ calls daily",
    impact: "30% turnover rate",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: TrendingDown,
    title: "Poor Lead Quality",
    description: "Manual intake misses 60% of details",
    impact: "Lower conversion rates",
    color: "from-blue-400 to-blue-600"
  }
]

export default function ProofOfNeed() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      {/* Background Elements */}
      <GlassOrb size="lg" className="absolute top-20 left-20 opacity-15" delay={0.5} />
      <GlassOrb size="md" className="absolute bottom-40 right-32 opacity-10" delay={1.5} />
      <GlassWave className="absolute top-1/3 left-0 right-0 h-px opacity-20" delay={0.8} />
      <GlassWave className="absolute bottom-1/4 left-0 right-0 h-0.5 opacity-15" delay={2.2} />

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
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-ink">The Hidden Cost of Manual Admin</span>
          </div>

          <h2 className="h2 mb-6">SMBs Lose <span className="text-red-500">$150K+</span> Annually on Reception Work</h2>

          <p className="text-xl text-mute max-w-3xl mx-auto leading-relaxed">
            Every day, small businesses miss opportunities, lose leads, and burn through staff hours
            on repetitive admin tasks that AI can handle instantly and perfectly.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FloatingGlassCard className="p-6 h-full text-center group hover:scale-105" depth={2} delay={0.8 + index * 0.1}>
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-ink mb-2">{point.title}</h3>
                  <p className="text-mute mb-3 text-sm">{point.description}</p>

                  <div className="text-red-500 font-semibold text-sm bg-red-50 px-3 py-1 rounded-full">
                    {point.impact}
                  </div>
                </FloatingGlassCard>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <FloatingGlassCard className="p-8 max-w-4xl mx-auto" depth={3} shimmer={true} delay={1.2}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">150K+</div>
                <div className="text-mute text-sm">Average Annual Cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">40%</div>
                <div className="text-mute text-sm">Leads Go Unanswered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">60%</div>
                <div className="text-mute text-sm">Manual Errors</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
              <p className="text-ink font-medium text-center">
                "Our receptionist was spending 6 hours daily on scheduling alone. With Luhreetech,
                that's now handled automatically with zero errors."
              </p>
              <div className="text-center mt-3">
                <div className="text-sm text-mute">— Sarah Chen, Law Office Manager</div>
              </div>
            </div>
          </FloatingGlassCard>
        </motion.div>
      </div>
    </section>
  )
}
