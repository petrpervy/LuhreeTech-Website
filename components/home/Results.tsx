import Card from "@/components/ui/Card";
import Metric from "@/components/ui/Metric";
export default function Results(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold">Real results</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-ink/70">See how teams save time and money with AI automation.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card lift p-6">
            <div className="text-xs text-ink/60">Law Firm</div>
            <div className="mt-1 text-2xl font-semibold"><Metric value={127} duration={0.9}/> hrs saved/mo</div>
            <p className="mt-2 text-sm text-ink/70">Automated intake and case management.</p>
          </div>
          <div className="card lift p-6">
            <div className="text-xs text-ink/60">Clinic</div>
            <div className="mt-1 text-2xl font-semibold"><Metric value={40} suffix="%" duration={0.9}/> fewer no-shows</div>
            <p className="mt-2 text-sm text-ink/70">Smart reminders and scheduling.</p>
          </div>
          <div className="card lift p-6">
            <div className="text-xs text-ink/60">Retail</div>
            <div className="mt-1 text-2xl font-semibold"><Metric value={3} suffix="x" duration={0.9}/> faster response</div>
            <p className="mt-2 text-sm text-ink/70">AI service and order handling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
