"use client";
import { Tabs, Tab } from "./_tabs";
import Card from "@/components/ui/Card";
import Metric from "@/components/ui/Metric";
import { Check, PhoneCall, CalendarClock, MessageSquare } from "lucide-react";

export default function DashboardDemo(){
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-2 text-center text-3xl font-bold">What we handle automatically</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-ink/70">From first contact to confirmed booking and follow-ups — clean, consistent, and logged.</p>

        <Card blur className="p-0 overflow-hidden">
          <Tabs labels={["Calls","Intake","Booked"]}>
            {/* Calls */}
            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
              {[
                {name:"Jane Smith", note:"Consult request", ago:"2m"},
                {name:"Luis Ortega", note:"Billing question", ago:"6m"},
                {name:"Unknown", note:"Voicemail left", ago:"10m"}
              ].map((r,i)=>(
                <div key={i} className="surface p-4">
                  <div className="mb-2 flex items-center gap-2 text-ink/80"><PhoneCall className="h-4 w-4"/><span className="font-medium">{r.name}</span></div>
                  <div className="text-sm text-ink/70">{r.note}</div>
                  <div className="mt-2 text-xs text-ink/60">{r.ago} ago</div>
                </div>
              ))}
            </div>
            {/* Intake */}
            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
              {[
                ["Name","Jane Smith"],["Matter","New consultation"],["Urgency","Next 7 days"],["Notes","Prefers mornings"]
              ].map((r,i)=>(
                <div key={i} className="surface p-4">
                  <div className="text-xs text-ink/60">{r[0]}</div>
                  <div className="mt-1 font-medium">{r[1]}</div>
                </div>
              ))}
            </div>
            {/* Booked */}
            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
              <div className="surface p-4">
                <div className="mb-2 flex items-center gap-2 text-ink/80"><CalendarClock className="h-4 w-4"/><span className="font-medium">Consultation</span></div>
                <div className="text-sm text-ink/70">Tue 3:00 PM • Google Calendar</div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--accent-teal)]"><Check className="h-3 w-3"/> SMS sent: "See you Tue 3:00 PM."</div>
              </div>
              <div className="surface p-4">
                <div className="text-xs text-ink/60">Weekly hours saved</div>
                <Metric value={20} className="mt-1 text-3xl font-bold text-ink"/>
              </div>
              <div className="surface p-4">
                <div className="text-xs text-ink/60">Estimated monthly savings</div>
                <Metric value={2408} className="mt-1 text-3xl font-bold text-ink"/><span className="ml-1 text-ink">$</span>
              </div>
            </div>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
