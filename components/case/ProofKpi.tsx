'use client';
import { useEffect, useState } from 'react';

export default function ProofKpi({ label, value }: {label: string; value: string}) {
  const [shown, setShown] = useState('0');
  
  useEffect(() => {
    let t: any; 
    let i = 0; 
    const steps = 18;
    
    t = setInterval(() => {
      i++; 
      if (i >= steps) { 
        clearInterval(t); 
        setShown(value); 
      } else {
        setShown(value.replace(/\d+/g, (m) => Math.round((+m / steps) * i).toString()));
      }
    }, 28);
    
    return () => clearInterval(t);
  }, [value]);

  return (
    <div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur px-4 py-3 shadow-glass-sm">
      <div className="text-2xl font-semibold tracking-tight text-ink">{shown}</div>
      <div className="text-ink/60 text-sm">{label}</div>
    </div>
  );
}


