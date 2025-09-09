"use client"
import { Check, Phone, ClipboardList, CalendarCheck } from "lucide-react"
export default function FeaturesIntro(){
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <div className="badge mb-4">Luhreetech's Answer</div>
        <h2 className="h2 mb-3">You're babysitting tools instead of running the business</h2>
        <p className="text-[17px] text-mute">Let digital employees move work forward automatically.</p>
        <p className="text-[16px] text-mute mt-4">Routine calls, intake, and scheduling shouldn't need manual nudges. We route, collect context, and book—without hand-holding. Complex cases escalate to your team with clean notes and next steps.</p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand" /> 3× faster first response</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand" /> Cleaner records in your CRM</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand" /> Less back-and-forth</li>
        </ul>
      </div>
      <div className="glass p-6">
        <div className="grid grid-cols-3 gap-4">
          <Col title="Calls" icon={<Phone className="w-4 h-4" />} />
          <Col title="Intake" icon={<ClipboardList className="w-4 h-4" />} />
          <Col title="Booked" icon={<CalendarCheck className="w-4 h-4" />} />
        </div>
      </div>
    </section>
  )
}
function Col({title, icon}:{title:string, icon:React.ReactNode}){
  const rows = ["Jane Smith","Luis Ortega","Unknown"]
  return (
    <div className="glass-deep p-4">
      <div className="flex items-center gap-2 mb-3 text-ink font-medium">{icon}<span>{title}</span></div>
      <div className="space-y-2">
        {rows.map((r,i)=>(
          <div key={i} className="flex items-center justify-between text-[13px]">
            <span className="text-mute">{r}</span>
            <Check className="w-4 h-4 text-brand" />
          </div>
        ))}
      </div>
    </div>
  )
}
