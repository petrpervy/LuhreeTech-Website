"use client"
import { Phone, ClipboardList, CalendarCheck, Check } from "lucide-react"
import { Card } from "./Card"
import BookingsChart from "./BookingsChart"

export default function Dashboard(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Today's flow */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div className="card-title">Today's flow</div>
          <div className="badge">Demo data for preview • no PII</div>
        </div>
        <div className="tiny-divider my-4" />
        <div className="grid grid-cols-3 gap-4">
          <Stage icon={<Phone className="w-4 h-4" />} label="Calls" />
          <Stage icon={<ClipboardList className="w-4 h-4" />} label="Intake" />
          <Stage icon={<CalendarCheck className="w-4 h-4" />} label="Booked" />
        </div>
      </Card>

      {/* Bookings last 14 days */}
      <Card className="p-5 md:col-span-2">
        <div className="flex items-center justify-between">
          <div className="card-title">Bookings (last 14 days)</div>
        </div>
        <div className="mt-3">
          <BookingsChart />
        </div>
      </Card>

      {/* Lower tiles */}
      <Card className="p-5">
        <div className="card-title mb-2">Next scheduled</div>
        <div className="text-[15px] text-ink font-semibold">Tue 3:00 PM</div>
        <p className="metric mt-1">Confirmation & reminder automated</p>
      </Card>

      <Card className="p-5">
        <div className="card-title mb-2">Avg. response time</div>
        <div className="text-[15px] text-ink font-semibold">Instant</div>
        <p className="metric mt-1">Voicemail → SMS follow-up</p>
      </Card>

      <Card className="p-5">
        <div className="card-title mb-2">On autopilot</div>
        <div className="text-[15px] text-ink font-semibold">Most intake & scheduling</div>
        <p className="metric mt-1">Escalate to staff as needed</p>
      </Card>
    </div>
  )
}

function Stage({icon,label}:{icon:React.ReactNode,label:string}){
  return (
    <div className="glass-deep p-3 rounded-xl2">
      <div className="flex items-center gap-2 text-ink">
        {icon}<span className="text-[14px] font-medium">{label}</span>
        <Check className="w-4 h-4 ml-auto text-brand" />
      </div>
    </div>
  )
}
