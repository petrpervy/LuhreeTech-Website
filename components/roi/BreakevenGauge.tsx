export function BreakevenGauge({ months }:{ months:number }) {
  const clamped = Math.max(0, Math.min(6, months));
  const pct = (clamped/6)*100; // 0-6 mo scale
  const hue = 160 - (pct * 0.9); // teal->amber
  return (
    <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-4 shadow-[0_8px_24px_rgba(10,21,40,0.08)]">
      <div className="flex items-center justify-between text-sm text-ink/60">
        <span>Breakeven</span><span>~{months.toFixed(1)} mo</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/60 relative overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: `hsl(${hue} 70% 45%)` }}
        />
      </div>
      <div className="mt-1 text-[12px] text-ink/50">0–6 months estimate</div>
    </div>
  );
}


