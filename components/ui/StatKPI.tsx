export default function StatKPI({label,value,delta}:{label:string;value:string;delta?:string}){
  return (
    <div className="rounded-card bg-white/70 border border-white/60 shadow-[var(--glass)] px-5 py-4">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-sm text-slate-600">{label}</div>
      {delta && <div className="mt-1 text-xs text-emerald-600">{delta}</div>}
    </div>
  )
}
