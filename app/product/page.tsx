import FeaturesFour from "@/components/home/FeaturesFour";
import HowItWorks from "@/components/home/HowItWorks";
import Card from "@/components/ui/Card";

export default function ProductPage(){
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Product Overview</h1>
          <p className="mt-4 text-lg text-ink/75 max-w-2xl mx-auto">Comprehensive AI automation platform for modern businesses</p>
        </div>
      </section>
      <FeaturesFour />
      <HowItWorks />
      <section className="section">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">Dashboard Panel</h2>
          <Card glass className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="surface p-4">
                <div className="text-sm text-ink/60">Active Automations</div>
                <div className="mt-2 text-2xl font-bold">12</div>
              </div>
              <div className="surface p-4">
                <div className="text-sm text-ink/60">Hours Saved This Week</div>
                <div className="mt-2 text-2xl font-bold">47</div>
              </div>
              <div className="surface p-4">
                <div className="text-sm text-ink/60">Success Rate</div>
                <div className="mt-2 text-2xl font-bold">98.7%</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
