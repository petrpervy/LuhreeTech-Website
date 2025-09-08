import { Button } from "../ui/Button"
import { Sparkles } from "lucide-react"

export default function Hero(){
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-600 mb-6">
        <Sparkles className="w-4 h-4"/> Luhreetech
      </div>
      <h1 className="text-5xl md:text-7xl leading-tight font-bold text-gray-900 mb-6">
        <span className="text-gray-900">AI automations done</span>{' '}
        <span className="text-gradient">for you.</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
        Digital employees that handle calls, scheduling, intake, and follow-ups — so your team scales without headcount.
      </p>
      <div className="flex items-center justify-center gap-4 mb-12">
        <Button className="btn-primary hover-glow">Book a Demo</Button>
        <Button variant="ghost" className="btn-ghost">View Case Studies</Button>
      </div>

      {/* KPI glass bar */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="glass card hover-lift p-6">
          <div className="text-xs text-gray-500 mb-3">Recent calls</div>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between text-gray-700"><span>Jane Smith</span><span>2m</span></li>
            <li className="flex justify-between text-gray-700"><span>Luis Ortega</span><span>6m</span></li>
            <li className="flex justify-between text-gray-700"><span>Unknown</span><span>10m</span></li>
          </ul>
        </div>
        <div className="glass card hover-lift p-6 text-center">
          <div className="text-xs text-gray-500 mb-3">Today</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">7 bookings</div>
          <div className="text-xs text-gray-500">+18% vs last week</div>
        </div>
        <div className="glass card hover-lift p-6">
          <div className="text-xs text-gray-500 mb-3">Next scheduled</div>
          <div className="text-lg font-semibold text-gray-900 mb-1">Tue 3:00 PM</div>
          <div className="text-xs text-gray-500">SMS sent: "See you Tue 3:00 PM."</div>
        </div>
      </div>
    </div>
  )
}