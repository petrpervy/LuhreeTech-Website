export default function Badge({ children }:{ children: React.ReactNode }){
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur-18 text-[rgb(var(--subtle))]">
      {children}
    </span>
  )
}
