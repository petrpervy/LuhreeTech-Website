export function Sparkline({ points='0,45 18,42 36,39 54,35 72,31 90,28 108,26 126,24 144,22 162,20 180,18 198,16' }:{points?:string}) {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-16">
      <defs>
        <linearGradient id="roiGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(45,212,191,.7)"/>
          <stop offset="100%" stopColor="rgba(45,212,191,0)"/>
        </linearGradient>
      </defs>
      <polyline points={points}
        fill="url(#roiGrad)" stroke="rgba(13,148,136,.9)" strokeWidth="2" />
    </svg>
  );
}


