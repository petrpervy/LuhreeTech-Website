import { Phone, CalendarCheck2, NotepadText, Cable } from "lucide-react"
import { Glyph } from "@/components/Glyph"

const list = [
  {icon:Phone, title:"Receptionist", body:"24/7 calls, intake, routing."},
  {icon:CalendarCheck2, title:"Scheduling", body:"Conflict-aware booking + reminders."},
  {icon:NotepadText, title:"Lead capture", body:"Qualify, collect context, and follow-up."},
  {icon:Cable, title:"Integrations / On-prem", body:"CRMs, calendars, custom APIs, private cloud."},
]

export default function FeaturesGrid(){
  return (
    <section className="section scene-sand" id="features">
      <div className="container">
        <h2 className="text-center">What you get</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {list.map(f=>(
            <div key={f.title} className="card">
              <Glyph icon={f.icon} />
              <h3 className="mt-3 text-[17px] font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
