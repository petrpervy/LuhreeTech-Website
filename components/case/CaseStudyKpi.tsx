'use client';
import { useEffect, useState } from 'react';

export default function CaseStudyKpi({
  label, value, subcopy, srHint
}: { 
  label: string; 
  value: string; 
  subcopy: string;
  srHint?: string; 
}) {
  const [shown, setShown] = useState(value.match(/\d/) ? '0' : value);
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced || !/\d/.test(value)) { setShown(value); return; }
    let t: any; let i = 0; const steps = 18;
    t = setInterval(() => {
      i++;
      if (i >= steps) { clearInterval(t); setShown(value); }
      else {
        setShown(
          value.replace(/\d+(\.\d+)?/g, (m) =>
            Math.round((parseFloat(m) / steps) * i).toString()
          )
        );
      }
    }, 28);
    return () => clearInterval(t);
  }, [value, prefersReduced]);

  return (
    <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur px-4 py-3 shadow-[0_8px_24px_rgba(10,21,40,0.08)]">
      <div className="text-2xl font-semibold tracking-tight text-ink">{shown}</div>
      <div className="text-ink/60 text-sm font-medium">{label}</div>
      <div className="text-ink/50 text-xs mt-1">{subcopy}</div>
      {srHint && <span className="sr-only">{srHint}</span>}
    </div>
  );
}


