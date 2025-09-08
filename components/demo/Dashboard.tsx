"use client"
import { Phone, ClipboardList, CalendarCheck, Check } from "lucide-react"
import { Card } from "./Card"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"
import BookingsChart from "./BookingsChart"

export default function Dashboard(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Today's flow */}
      <FloatingGlassCard className="p-5" depth={2} shimmer={true} delay={0.2}>
        <div className="flex items-center justify-between">
          <div className="card-title">Today's flow</div>
          <div className="badge glass-shimmer">Demo data for preview • no PII</div>
        </div>
        <div className="tiny-divider my-4" />
        <div className="grid grid-cols-3 gap-4">
          <Stage icon={<Phone className="w-4 h-4" />} label="Calls" />
          <Stage icon={<ClipboardList className="w-4 h-4" />} label="Intake" />
          <Stage icon={<CalendarCheck className="w-4 h-4" />} label="Booked" />
        </div>
      </FloatingGlassCard>

      {/* Bookings last 14 days */}
      <FloatingGlassCard className="p-5 md:col-span-2" depth={3} shimmer={true} delay={0.4}>
        <div className="flex items-center justify-between">
          <div className="card-title">Bookings (last 14 days)</div>
        </div>
        <div className="mt-3">
          <BookingsChart />
        </div>
      </FloatingGlassCard>

      {/* Lower tiles */}
      <FloatingGlassCard className="p-5" depth={1} delay={0.6}>
        <div className="card-title mb-2">Next scheduled</div>
        <div className="text-[15px] text-ink font-semibold">Tue 3:00 PM</div>
        <p className="metric mt-1">Confirmation & reminder automated</p>
      </FloatingGlassCard>

      <FloatingGlassCard className="p-5" depth={1} delay={0.8}>
        <div className="card-title mb-2">Avg. response time</div>
        <div className="text-[15px] text-ink font-semibold">Instant</div>
        <p className="metric mt-1">Voicemail → SMS follow-up</p>
      </FloatingGlassCard>

      <FloatingGlassCard className="p-5" depth={2} shimmer={true} delay={1.0}>
        <div className="card-title mb-2">On autopilot</div>
        <div className="text-[15px] text-ink font-semibold">Most intake & scheduling</div>
        <p className="metric mt-1">Escalate to staff as needed</p>
      </FloatingGlassCard>
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
