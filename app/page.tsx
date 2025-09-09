"use client"
import { BadgeCheck, Sparkles } from "lucide-react"
import NavBar from "@/components/layout/NavBar"
import { Button } from "@/components/ui/Button"
import Dashboard from "@/components/demo/Dashboard"
import FeaturesIntro from "@/components/sections/FeaturesIntro"
import KPIBar from "@/components/sections/KPIBar"

export default function Home(){
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-4">
        <section className="pt-20 pb-12 text-center">
          <div className="badge mx-auto mb-6"><Sparkles className="w-4 h-4 text-brand" /> Luhreetech</div>
          <h1 className="h1">AI automations done <span className="text-cta">for you.</span></h1>
          <p className="mt-4 text-[18px] text-mute">Digital employees that handle calls, intake, scheduling, and follow-ups—so your team scales without extra headcount.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button variant="cta">Book a Demo</Button>
            <Button>View Case Studies</Button>
          </div>
        </section>

        <section className="pb-24">
          <Dashboard />
        </section>

        <FeaturesIntro />
        <section className="py-6" />
        <KPIBar />
      </main>
    </>
  )
}
