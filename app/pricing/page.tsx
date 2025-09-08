import PricingPreview from "@/components/home/PricingPreview";
import Card from "@/components/ui/Card";

export default function PricingPage(){
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Pricing</h1>
          <p className="mt-4 text-lg text-ink/75 max-w-2xl mx-auto">Transparent pricing for AI automation solutions</p>
        </div>
      </section>
      <PricingPreview />
      <section className="section">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <h3 className="font-semibold">How quickly can you deploy?</h3>
              <p className="mt-2 text-sm text-ink/70">Most basic automations are live within 2-3 weeks. Complex workflows may take 4-6 weeks.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">What's included in support?</h3>
              <p className="mt-2 text-sm text-ink/70">24/7 monitoring, weekly reports, monthly optimization calls, and priority escalation.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">Can I cancel anytime?</h3>
              <p className="mt-2 text-sm text-ink/70">Yes, with 30 days notice. We'll help transition your automations or provide data exports.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}