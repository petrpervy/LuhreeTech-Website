"use client";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Inputs = {
  teamSize: number;           // FTEs touched by automation
  hourlyCost: number;         // fully-loaded $/hour per FTE
  hoursPerEmployee: number;   // hours saved per employee per week
  adoption: number;           // 0–100 %
};

function calc(inputs: Inputs) {
  const weeklyHoursSaved = inputs.teamSize * inputs.hoursPerEmployee * (inputs.adoption/100);
  const weeklySavings = weeklyHoursSaved * inputs.hourlyCost;
  const monthlySavings = weeklySavings * 4.3; // avg weeks/month
  return { weeklyHoursSaved, weeklySavings, monthlySavings };
}

export default function MiniRoiCalculator() {
  const r = useReducedMotion();
  const [i, setI] = useState<Inputs>({
    teamSize: 10,
    hourlyCost: 28,
    hoursPerEmployee: 2.5,
    adoption: 80,
  });

  const rsl = useMemo(()=>calc(i), [i]);

  const card = "glass-panel p-5 hover-glow";

  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:r?0:0.4}} className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_-10%_-20%,#DCEBFF_0%,transparent_60%),radial-gradient(700px_320px_at_120%_120%,#FFE6CF_0%,transparent_60%)]" />
      <div className="relative grid gap-5 p-5 md:grid-cols-[1.2fr,1fr]">
        {/* Inputs */}
        <div className={card}>
          <div className="text-sm font-semibold text-gray-700">Quick estimate</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Team size">
              <input type="range" min={1} max={50} value={i.teamSize} onChange={(e)=>setI({...i, teamSize:+e.target.value})} className="w-full" />
              <div className="text-xs text-gray-700 mt-1">{i.teamSize} people</div>
            </Field>
            <Field label="Hourly cost ($)">
              <input type="number" min={10} max={150} value={i.hourlyCost} onChange={(e)=>setI({...i, hourlyCost:+e.target.value})} className="w-full rounded-md border border-white/60 bg-white/90 px-2 py-1.5" />
            </Field>
            <Field label="Hours saved/employee/wk">
              <input type="number" step="0.5" min={0} max={20} value={i.hoursPerEmployee} onChange={(e)=>setI({...i, hoursPerEmployee:+e.target.value})} className="w-full rounded-md border border-white/60 bg-white/90 px-2 py-1.5" />
            </Field>
            <Field label="Adoption">
              <input type="range" min={0} max={100} value={i.adoption} onChange={(e)=>setI({...i, adoption:+e.target.value})} className="w-full" />
              <div className="text-xs text-gray-700 mt-1">{i.adoption}% of team</div>
            </Field>
          </div>
          <div className="mt-4 text-xs text-gray-600">Assumes month = 4.3 weeks. Tweak values to match your workflow.</div>
        </div>

        {/* Results */}
        <div className="grid gap-3">
          <div className={card}>
            <div className="text-[12px] text-gray-700">Estimated monthly savings</div>
            <div className="text-3xl font-extrabold tracking-tight text-brand-ink">${Math.round(rsl.monthlySavings).toLocaleString()}</div>
            <div className="mt-2 text-[12px] text-gray-700">Weekly hours saved: <span className="font-semibold text-brand-ink">{Math.round(rsl.weeklyHoursSaved)}</span> hrs</div>
          </div>
          <div className={card}>
            <div className="text-[12px] text-gray-700">What this usually funds</div>
            <ul className="mt-2 text-[13px] text-brand-ink/90 list-disc pl-4">
              <li>1–3 digital employee roles (receptionist, scheduler, follow-ups)</li>
              <li>Priority monitoring & weekly improvements</li>
              <li>Integrations with your CRM/calendars/phone</li>
            </ul>
            <a href="/contact#book" className="mt-4 inline-flex rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[13px] font-medium text-brand-ink shadow-glass hover:-translate-y-0.5 transition">
              Start Free Audit
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Field({label, children}:{label:string; children:React.ReactNode}) {
  return (
    <label className="block">
      <div className="text-[12px] font-semibold text-gray-700 mb-1">{label}</div>
      {children}
    </label>
  );
}
