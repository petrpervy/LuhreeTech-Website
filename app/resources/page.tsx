import Card from "@/components/ui/Card";

export default function ResourcesPage(){
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Resources</h1>
          <p className="mt-4 text-lg text-ink/75 max-w-2xl mx-auto">Learn more about AI automation</p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="text-sm text-ink/60">Law Firm</div>
              <h3 className="mt-1 text-lg font-semibold">127 hours saved monthly</h3>
              <p className="mt-2 text-sm text-ink/70">Automated client intake and case management reduced administrative overhead by 40%.</p>
            </Card>
            <Card>
              <div className="text-sm text-ink/60">Healthcare Clinic</div>
              <h3 className="mt-1 text-lg font-semibold">40% fewer no-shows</h3>
              <p className="mt-2 text-sm text-ink/70">Smart scheduling and automated reminders improved patient retention significantly.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="text-sm text-ink/60">Coming Soon</div>
              <h3 className="mt-1 text-lg font-semibold">The Future of AI Automation</h3>
              <p className="mt-2 text-sm text-ink/70">Exploring emerging trends in business automation.</p>
            </Card>
            <Card>
              <div className="text-sm text-ink/60">Coming Soon</div>
              <h3 className="mt-1 text-lg font-semibold">ROI Best Practices</h3>
              <p className="mt-2 text-sm text-ink/70">How to maximize returns on automation investments.</p>
            </Card>
            <Card>
              <div className="text-sm text-ink/60">Coming Soon</div>
              <h3 className="mt-1 text-lg font-semibold">Implementation Guide</h3>
              <p className="mt-2 text-sm text-ink/70">Step-by-step guide to deploying AI automations.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <h3 className="font-semibold">What types of businesses benefit most?</h3>
              <p className="mt-2 text-sm text-ink/70">Service-based businesses, healthcare practices, law firms, and retail operations see the highest ROI.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">How secure is the data?</h3>
              <p className="mt-2 text-sm text-ink/70">Enterprise-grade security with SOC 2 compliance, encryption at rest and in transit, and regular audits.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">Can I customize the automations?</h3>
              <p className="mt-2 text-sm text-ink/70">Absolutely. Every automation is tailored to your specific workflows and business requirements.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
