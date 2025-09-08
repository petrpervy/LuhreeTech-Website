import { PhoneCall, CalendarCheck2, Target, PlugZap } from "lucide-react"; import Card from "@/components/ui/Card";
export default function FeaturesFour(){
  const f=[["Receptionist","24/7 calls, intake, routing.",PhoneCall],["Scheduling","Conflict-aware booking + reminders.",CalendarCheck2],["Lead capture","Qualify, collect context, and follow-up.",Target],["Integrations / On-prem","CRMs, calendars, custom APIs, private cloud.",PlugZap]];
  return (
    <section className="scene scene-sand py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold">What you get</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          {f.map(([t,b,Icon]:any)=>(
            <div key={t} className="card lift p-6">
              <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center shadow-sm mb-3">
                <Icon className="w-5 h-5 text-[color-mix(in_oklab,var(--teal) 50%,#0B1220)]"/>
              </div>
              <div className="text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-ink/70">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
