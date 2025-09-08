export function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="stat-pill">
      <span className="text-lg font-semibold text-brand-ink/90">{kpi}</span>
      <span className="text-brand-ink/70">{label}</span>
    </div>
  )
}

