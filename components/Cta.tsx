import { GlassCard } from './GlassCard'
import { Button } from './ui/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function Cta() {
  const section = {
    title: "Ready to Get Your Digital Employee?",
    subtitle: "Free audit + pay only after demo approval. Cancel anytime.",
    primary_cta: { label: "Start Your Free Audit", href: "/contact" },
    secondary_cta: { label: "See Features", href: "/features" }
  }
  
  return (
    <section className="py-20">
      <GlassCard className="p-8 md:p-12 text-center space-y-8">
        {/* Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text">
            {section.title}
          </h2>
          <p className="text-xl text-theme-muted leading-relaxed">
            {section.subtitle}
          </p>
        </div>



        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link href={section.primary_cta.href}>
              {section.primary_cta.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-4 bg-transparent border-2 border-theme-border text-theme-text hover:bg-theme-surface/50"
          >
            <Link href={section.secondary_cta.href}>
              {section.secondary_cta.label}
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-4">
          <p className="text-theme-muted text-sm">No commitment required • Free consultation • 14-day trial</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-theme-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-theme-primary rounded-full"></div>
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-theme-primary rounded-full"></div>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-theme-primary rounded-full"></div>
              Money-back guarantee
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}


