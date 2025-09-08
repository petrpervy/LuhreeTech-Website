"use client"
import { useMemo, useState } from "react"
import { Glass } from "../ui/Glass"
import { Button } from "../ui/Button"

export default function ROIWidget(){
  const [team, setTeam] = useState(8)
  const [hourly, setHourly] = useState(28)
  const [hrs, setHrs] = useState(2.5)
  const savings = useMemo(()=> Math.round(team * hourly * hrs * 4.3), [team,hourly,hrs])

  return (
    <div>
      <h2 className="text-center mb-6 md:mb-8">Quick ROI estimate</h2>
      <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <label className="block text-sm text-slate-600 mb-2">Team size</label>
          <input type="range" min={1} max={50} value={team} onChange={e=>setTeam(+e.target.value)} className="w-full accent-[rgb(var(--mint))]" />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Hourly cost ($)</label>
              <input className="w-full rounded-lg border border-black/10 bg-white/70 px-3 py-2 backdrop-blur-18" value={hourly} onChange={e=>setHourly(+e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Hours saved / employee / week</label>
              <input className="w-full rounded-lg border border-black/10 bg-white/70 px-3 py-2 backdrop-blur-18" value={hrs} onChange={e=>setHrs(+e.target.value)} />
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">Assumes month ≈ 4.3 weeks. Adoption 80%.</p>
        </div>
        <div>
          <div className="text-sm text-slate-600 mb-1">Estimated monthly savings</div>
          <div className="text-4xl font-display mb-2">${savings.toLocaleString()}</div>
          <p className="text-xs text-slate-500 mb-4">Typically funds 1–3 digital employee roles and weekly improvements.</p>
          <Button className="w-full">Book a Demo</Button>
        </div>
      </div>
    </div>
  )
}