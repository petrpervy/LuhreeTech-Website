export default function RibbonBadge({children}:{children:React.ReactNode}){
  return (
    <span className="inline-flex items-center gap-1 rounded-[var(--r-pill)] border border-white/60 bg-white/70 px-3 py-1 shadow-[var(--glass)] backdrop-blur-md text-[13px] text-slate-700">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </span>
  )
}
