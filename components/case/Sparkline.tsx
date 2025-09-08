export function Sparkline() {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-16">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(14,165,233,.7)"/>
          <stop offset="100%" stopColor="rgba(14,165,233,0)"/>
        </linearGradient>
      </defs>
      <polyline 
        points="0,45 20,40 40,42 60,35 80,30 100,34 120,22 140,18 160,12 180,16 200,10"
        fill="url(#g)" 
        stroke="rgba(14,165,233,.8)" 
        strokeWidth="2" 
      />
    </svg>
  );
}


