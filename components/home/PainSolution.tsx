import Card from "@/components/ui/Card";
export default function PainSolution(){
  const items=[
    ["Labor cost & turnover","Reduce admin workload without hiring."],
    ["Missed calls & no-shows","Instant intake, confirmation, and reminders."],
    ["Tool babysitting","Work moves forward automatically, escalations only when needed."]
  ];
  return (
    <section className="scene scene-sea py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold">The problem → our solution</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(([t,b])=>(
            <div key={t} className="card lift p-6"><h3 className="text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-ink/70">{b}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
