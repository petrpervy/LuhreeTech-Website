"use client"
import { Check, Phone, ClipboardList, CalendarCheck } from "lucide-react"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"
import { GlassOrb } from "@/components/ui/GlassOrb"
import { GlassWave } from "@/components/ui/GlassWave"

export default function FeaturesIntro(){
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
      {/* Background glass elements */}
      <GlassOrb size="md" className="absolute top-10 right-20 opacity-10" delay={0.5} />
      <GlassWave className="absolute bottom-20 left-0 right-0 h-px opacity-15" delay={1.2} />

      <div className="relative z-10">
        <div className="badge mb-4 glass-shimmer">Luhreetech's Answer</div>
        <h2 className="h2 mb-3">You're babysitting tools instead of running the business</h2>
        <p className="text-[17px] text-mute">Let digital employees move work forward automatically.</p>
        <p className="text-[16px] text-mute mt-4">Routine calls, intake, and scheduling shouldn't need manual nudges. We route, collect context, and book—without hand-holding. Complex cases escalate to your team with clean notes and next steps.</p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand glass-pulse" />
            3× faster first response
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand glass-pulse" style={{ animationDelay: '0.5s' }} />
            Cleaner records in your CRM
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand glass-pulse" style={{ animationDelay: '1s' }} />
            Less back-and-forth
          </li>
        </ul>
      </div>

      <FloatingGlassCard className="p-6" depth={3} shimmer={true} delay={0.8}>
        <div className="grid grid-cols-3 gap-4">
          <Col title="Calls" icon={<Phone className="w-4 h-4" />} />
          <Col title="Intake" icon={<ClipboardList className="w-4 h-4" />} />
          <Col title="Booked" icon={<CalendarCheck className="w-4 h-4" />} />
        </div>
      </FloatingGlassCard>
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
