import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"

export default function KPIBar(){
  const items = [
    { label: "Faster first response", value: "3×" },
    { label: "Fewer no-shows", value: "–20–40%" },
    { label: "Front-desk workload ↓", value: "30–60%" },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4">
      <FloatingGlassCard className="p-5 grid md:grid-cols-3 gap-4" depth={2} shimmer={true} delay={1.2}>
        {items.map((i, index)=>(
          <div key={i.label} className="text-center group">
            <div className="text-[28px] font-semibold text-ink glass-pulse" style={{ animationDelay: `${index * 0.5}s` }}>
              {i.value}
            </div>
            <div className="text-[14px] text-mute group-hover:text-brand transition-colors duration-300">
              {i.label}
            </div>
          </div>
        ))}
      </FloatingGlassCard>
    </section>
  )
}
