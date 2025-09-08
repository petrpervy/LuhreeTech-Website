"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  industry: string;
  problem: string;
  metric?: string;      // e.g., "12 hrs saved per week"
  quote?: string;       // testimonial line
  href?: string;
  icon?: React.ReactNode;
};

export default function CaseCard({ title, industry, problem, metric, quote, href="#", icon }: Props) {
  return (
    <motion.a
      href={href}
      className="group relative block rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md p-5 shadow-glass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal-500"
      initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:.2}} transition={{duration:.4}}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0 h-8 w-8 rounded-xl bg-white/90 border border-white/60 grid place-items-center text-accent-teal-500">
          {icon}
        </div>
        <div>
          <div className="text-[15px] font-semibold text-brand-ink">{title}</div>
          <div className="text-[12px] text-gray-700">{industry}</div>
        </div>
      </div>

      <div className="mt-3 text-[15px] text-brand-ink/90">{problem}</div>

      {metric && (
        <div className="mt-3 inline-flex rounded-full border border-white/60 bg-white/90 px-2.5 py-1 text-[12px] text-accent-teal-500 shadow-[0_8px_24px_rgba(2,8,23,0.08)]">
          {metric}
        </div>
      )}

      {quote && (
        <blockquote className="mt-3 text-[14px] italic text-brand-ink/90">"{quote}"</blockquote>
      )}

      <div className="mt-4 h-px bg-white/60" />
      <div className="mt-2 text-[13px] font-medium text-brand-ink group-hover:translate-x-0.5 transition-transform">
        View full case study →
      </div>

      {/* glow on hover */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background: "radial-gradient(500px 180px at 20% 0%, rgba(49,193,184,.18), transparent 60%)",
      }} />
    </motion.a>
  );
}


