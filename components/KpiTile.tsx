'use client'

interface KpiTileProps {
  value: string
  label: string
  note?: string
}

export function KpiTile({ value, label, note }: KpiTileProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-3xl font-bold text-theme-primary mb-2">{value}</div>
      <div className="text-theme-text font-medium mb-1">{label}</div>
      {note && (
        <div className="text-xs text-theme-muted">{note}</div>
      )}
    </div>
  )
}
