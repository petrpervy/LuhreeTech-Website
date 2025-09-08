import { Glass } from "../ui/Glass"

const items = [
  {title:"Labor cost & turnover", body:"Reduce admin workload without hiring."},
  {title:"Missed calls & no-shows", body:"Instant intake, confirmation, and reminders."},
  {title:"Tool babysitting", body:"Work moves forward automatically, escalations only when needed."},
]

export default function ProblemSolution(){
  return (
    <section className="section scene-mint">
      <div className="container">
        <h2 className="text-center">The problem → our solution</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map(i=>(
            <div key={i.title} className="card">
              <h3 className="text-[17px] font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
