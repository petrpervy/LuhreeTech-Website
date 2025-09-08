'use client';

const INDUSTRIES = ['All','Healthcare','Logistics','Retail','Agency','Legal','Services'] as const;
const IMPACTS = ['All','Time Saved','Error Reduction','Lead Generation','Cost Savings'] as const;

export type FilterState = { 
  industry: typeof INDUSTRIES[number]; 
  impact: typeof IMPACTS[number] 
};

export function Filters({ 
  value, 
  onChange 
}: { 
  value: FilterState; 
  onChange: (f: FilterState) => void 
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {INDUSTRIES.map(v => (
          <button 
            key={v}
            onClick={() => onChange({...value, industry: v})}
            className={`rounded-full px-3 py-1.5 text-sm border backdrop-blur ${
              value.industry === v 
                ? 'bg-white/80 border-white/60 text-ink shadow-glass-sm' 
                : 'bg-white/40 border-white/40 text-ink/70'
            }`}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {IMPACTS.map(v => (
          <button 
            key={v}
            onClick={() => onChange({...value, impact: v})}
            className={`rounded-full px-3 py-1.5 text-sm border backdrop-blur ${
              value.impact === v 
                ? 'bg-white/80 border-white/60 text-ink shadow-glass-sm' 
                : 'bg-white/40 border-white/40 text-ink/70'
            }`}
          >
            {v}
          </button>
        ))}
        {(value.industry !== 'All' || value.impact !== 'All') && (
          <button 
            onClick={() => onChange({industry: 'All', impact: 'All'})}
            className="rounded-full px-3 py-1.5 text-sm border border-white/40 bg-white/40 text-ink/70"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}


