export default function Sparkline({points="0,18 8,14 16,15 24,11 32,13 40,8 48,10 56,7 64,9"}:{
  points?:string
}){
  return (
    <svg viewBox="0 0 72 24" className="w-full h-6">
      <polyline fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2"
        points={points} className="text-brand-teal" />
    </svg>
  )
}
