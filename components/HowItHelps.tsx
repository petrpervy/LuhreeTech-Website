"use client"
import { GlassCard } from './GlassCard'

export function HowItHelps() {
  const section = {
    title: "Why businesses choose Luhreetech",
    subtitle: "Everything you need to automate operations, boost productivity",
    benefits: [
      {
        title: "Cut labor costs—without cutting service",
        description: "Route routine calls and tasks to AI while keeping your human team for complex work."
      },
      {
        title: "Never miss a lead",
        description: "Instant intake and call-backs. Responses in seconds, not hours."
      },
      {
        title: "Operational consistency",
        description: "The same quality every time—no training drift or sick days."
      }
    ]
  }
  
  return (
    <section className="py-20 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-theme-text">
          {section.title}
        </h2>
        <p className="text-xl text-theme-muted leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-8">
        {section.benefits.map((item, index) => (
          <GlassCard key={index} className="p-8 text-center hover-lift">
            <div className="space-y-6">
              {/* Title */}
              <h3 className="text-2xl font-bold text-theme-text">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-theme-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Additional Benefits */}
      <div className="bg-gradient-to-r from-theme-primary/10 to-theme-secondary/10 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-theme-text">
              Why choose Agent.02?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-theme-text">Proven Results</div>
                  <div className="text-theme-muted text-sm">Average 25+ hours saved per week across all clients</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-theme-text">No Technical Debt</div>
                  <div className="text-theme-muted text-sm">We handle all maintenance, updates, and optimizations</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-theme-text">Scalable Growth</div>
                  <div className="text-theme-muted text-sm">Start small and expand as your needs grow</div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-strong p-8 rounded-2xl">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary mb-2">95%</div>
                <div className="text-theme-muted">Average accuracy rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary mb-2">2 weeks</div>
                <div className="text-theme-muted">Average implementation time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary mb-2">300%</div>
                <div className="text-theme-muted">Average ROI in first quarter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


