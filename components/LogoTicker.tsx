"use client";
import { useMemo } from "react";

const logos = ["Acme","Northwind","Globex","Umbrella","Initech","Stark"];

export default function LogoTicker() {
  const doubled = useMemo(()=>[...logos, ...logos],[]);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
      <div className="flex gap-6 animate-[marquee_24s_linear_infinite] px-6 py-3">
        {doubled.map((l, i)=>(
          <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-xl shadow-sm bg-white border border-black/5 text-slate-600">
            <span className="size-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_2px_rgba(16,185,129,.45)]" />
            {l}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
