export default function KPIBar(){
  const items = [
    { label: "Faster first response", value: "3×" },
    { label: "Fewer no-shows", value: "–20–40%" },
    { label: "Front-desk workload ↓", value: "30–60%" },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="glass p-5 grid md:grid-cols-3 gap-4">
        {items.map(i=>(
          <div key={i.label} className="text-center">
            <div className="text-[28px] font-semibold text-ink">{i.value}</div>
            <div className="text-[14px] text-mute">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
