"use client"
import { BadgeCheck, Sparkles, ArrowDown } from "lucide-react"
import NavBar from "@/components/NavBar"
import { Button } from "@/components/ui/Button"
import Dashboard from "@/components/demo/Dashboard"
import FeaturesIntro from "@/components/sections/FeaturesIntro"
import KPIBar from "@/components/sections/KPIBar"
import ProofOfNeed from "@/components/sections/ProofOfNeed"
import TrustSignals from "@/components/sections/TrustSignals"
import ProductShowcase from "@/components/sections/ProductShowcase"
import { Footer } from "@/components/Footer"
import { GlassBackground } from "@/components/ui/GlassBackground"
import { GlassOrb } from "@/components/ui/GlassOrb"
import { GlassWave } from "@/components/ui/GlassWave"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"

export default function Home(){
  return (
    <>
      <NavBar />

      {/* Rich Glass Background */}
      <GlassBackground variant="rich" className="fixed inset-0" />

      {/* Strategic floating elements */}
      <GlassOrb size="xl" className="fixed top-32 right-24 opacity-8" delay={0.5} />
      <GlassOrb size="lg" className="fixed bottom-48 left-20 opacity-12" delay={1.2} />
      <GlassOrb size="md" className="fixed top-1/3 left-16 opacity-15" delay={2.1} />
      <GlassWave className="fixed top-1/4 left-0 right-0 h-px opacity-20" delay={0.8} />
      <GlassWave className="fixed bottom-1/3 left-0 right-0 h-0.5 opacity-15" delay={2.8} />

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center relative min-h-screen flex items-center">
          {/* Hero glass elements */}
          <GlassOrb size="sm" className="absolute top-20 right-32 opacity-10" delay={0.3} />
          <GlassWave className="absolute bottom-32 left-0 right-0 h-px opacity-15" delay={1.5} />

          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="badge mx-auto mb-8 glass-shimmer">
              <Sparkles className="w-5 h-5 text-blue-500" />
              Luhreetech
            </div>

            <h1 className="h1 mb-6">
              AI Automations Done <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">For You</span>
            </h1>

            <p className="text-xl text-mute max-w-3xl mx-auto leading-relaxed mb-8">
              Digital employees that handle calls, intake, scheduling, and follow-ups—so your team
              scales without extra headcount. Trusted by 500+ SMBs across law, healthcare, and home services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="cta" className="relative overflow-hidden group text-lg px-8 py-4">
                <span className="relative z-10">Book Your Free Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              <Button variant="outline" className="glass-shimmer text-lg px-8 py-4">
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-mute">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                99.9% Uptime SLA
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Enterprise Security
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                24/7 Support
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-6 h-6 text-mute" />
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 relative">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="h2 mb-4">See Your AI Employees in Action</h2>
              <p className="text-lg text-mute max-w-2xl mx-auto">
                Real-time dashboard showing how Luhreetech handles your business workflows automatically.
              </p>
            </div>
            <Dashboard />
          </div>
        </section>

        {/* Proof of Need */}
        <ProofOfNeed />

        {/* Features */}
        <FeaturesIntro />

        {/* KPI Stats */}
        <KPIBar />

        {/* Trust Signals */}
        <TrustSignals />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Final CTA */}
        <section className="py-20 relative">
          <GlassOrb size="lg" className="absolute top-20 left-20 opacity-10" delay={0.5} />
          <GlassWave className="absolute bottom-0 left-0 right-0 h-px opacity-20" delay={1.2} />

          <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
            <FloatingGlassCard className="p-12 max-w-4xl mx-auto" depth={3} shimmer={true} delay={0.8}>
              <h2 className="h2 mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-mute mb-8 max-w-2xl mx-auto">
                Join 500+ SMBs who've automated their workflows with Luhreetech's AI employees.
                Start with a free demo and see the difference in just 48 hours.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Free</div>
                  <div className="text-mute">Demo & Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">48hrs</div>
                  <div className="text-mute">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">$150K+</div>
                  <div className="text-mute">Avg Savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" className="text-lg px-8 py-4">
                  Schedule Free Demo
                </Button>
                <Button variant="outline" className="text-lg px-8 py-4 glass-shimmer">
                  Download ROI Calculator
                </Button>
              </div>
            </FloatingGlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}