import { Glass } from "../ui/Glass"
import { Activity, Wrench, ShieldCheck } from "lucide-react"

const steps = [
  {icon:Activity, title:"Discovery", body:"We map your workflows."},
  {icon:Wrench, title:"Build", body:"We design and deploy your digital employees."},
  {icon:ShieldCheck, title:"Monitor", body:"We maintain, improve, and report."},
]

export default function HowItWorks(){
  return (
    <>
      {steps.map(s=>(
        <div key={s.title} className="card text-center">
          <s.icon className="mx-auto mb-3 h-6 w-6 text-[rgb(var(--muted))]" />
          <h3 className="text-[17px] font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">{s.body}</p>
        </div>
      ))}
    </>
  )
}