import NavBar from '@/components/layout/NavBar'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center animate-fade-in-up">
            <h1 className="heading-xl mb-6 text-brand-ink">
              AI automations done for you, end-to-end.
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We give small businesses a reliable digital employee — handling tasks, calls, and workflows without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Your Free Audit
              </Button>
              <Button variant="secondary" size="lg">
                Book a 20-min Build Consult
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">How it helps</h2>
            <p className="text-lg">Clear outcomes for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <h3 className="heading-sm mb-4">Save 10–40+ hours per week</h3>
              <p className="text-base">Never miss a lead or customer inquiry.</p>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <h3 className="heading-sm mb-4">Cut admin costs</h3>
              <p className="text-base">Without sacrificing professionalism.</p>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <h3 className="heading-sm mb-4">Focus on your business</h3>
              <p className="text-base">We handle the digital work.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-brand-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What our clients say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-6">
              <p className="text-base mb-4">"Saved 12 hours weekly on appointments."</p>
              <p className="text-sm text-muted">— Dental Clinic Owner</p>
            </GlassCard>
            
            <GlassCard className="p-6">
              <p className="text-base mb-4">"30+ new leads per week."</p>
              <p className="text-sm text-muted">— Marketing Agency</p>
            </GlassCard>
            
            <GlassCard className="p-6">
              <p className="text-base mb-4">"90% fewer data entry errors."</p>
              <p className="text-sm text-muted">— Logistics Firm</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <GlassCard className="p-12 text-center">
            <h2 className="heading-lg mb-4">Ready to get started?</h2>
            <p className="text-lg mb-8">Get your free audit and see how AI can transform your business.</p>
            <Button variant="primary" size="lg">
              Start Your Free Audit
            </Button>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
