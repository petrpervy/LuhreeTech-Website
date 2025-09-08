"use client";
import { ShieldCheck, Server, Cloud } from "lucide-react";

export default function SecurityDiagram() {
  const card = "bg-white/85 border border-white/40 rounded-2xl p-4 md:p-5 shadow-[0_16px_50px_rgba(2,8,23,0.08)]";
  const label = "mt-2 text-sm font-semibold text-brand-ink";
  const sub = "text-[12px] text-gray-700";
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
      <div className={card}>
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4 text-accent-teal-500" />
          <span className="text-sm font-medium">Cloud (Managed)</span>
        </div>
        <div className={label}>Fastest go-live</div>
        <div className={sub}>Encrypted in transit & at rest • Least-privilege access • Audit logs</div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <ShieldCheck className="h-6 w-6 text-accent-teal-500" />
      </div>

      <div className={card}>
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-accent-teal-500" />
          <span className="text-sm font-medium">On-Prem (Private)</span>
        </div>
        <div className={label}>Compliance-friendly</div>
        <div className={sub}>Private LLM option • Data residency by request • Custom SLAs</div>
      </div>
    </div>
  );
}


