"use client";
type ChipProps = { label:string; active?:boolean };
const Pill = ({label, active=false}:ChipProps)=>(
  <button
    className={`rounded-full border px-3 py-1 text-[12px] transition-colors ${active
      ? "border-accent-teal-500/50 bg-accent-teal-500/10 text-brand-ink"
      : "border-white/60 bg-white/85 text-gray-800 hover:bg-white"}`}
  >
    {label}
  </button>
);
export default function FilterBar(){
  return (
    <div className="sticky top-[72px] z-10">
      <div className="mt-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md p-3 shadow-glass">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[12px] font-semibold text-gray-700 mr-1">Industry:</span>
          <Pill label="All" active />
          <Pill label="Healthcare" />
          <Pill label="Agency" />
          <Pill label="Logistics" />
          <Pill label="Retail" />
          <Pill label="Legal" />
          <span className="mx-2 h-4 w-px bg-white/60" />
          <span className="text-[12px] font-semibold text-gray-700 mr-1">Impact:</span>
          <Pill label="All" active />
          <Pill label="Time Saved" />
          <Pill label="Error Reduction" />
          <Pill label="Lead Gen" />
          <Pill label="Cost Savings" />
        </div>
      </div>
    </div>
  );
}


