export default function StatPill({label, value, sub}:{label:string;value:string;sub?:string}){
  return (
    <div className="stat-pill rounded-[var(--r-card)] bg-white shadow-[var(--glass)] border border-white/50 px-5 py-4">
      <div className="text-2xl font-semibold tracking-tight text-neutral-900">{value}</div>
      <div className="mt-0.5 text-sm text-neutral-600">{label}</div>
      {sub && <div className="mt-1 text-xs text-neutral-500">{sub}</div>}
    </div>
  )
}
