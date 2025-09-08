'use client';
import RoiKpi from './RoiKpi';
import { Sparkline } from './Sparkline';
import { BreakevenGauge } from './BreakevenGauge';

type Props = {
  teamSize: number;
  hourlyCost: number;
  weeklyHoursSaved: number;   // from sliders if available; otherwise sensible default
  adoptionPct: number;        // 0–1
};

export default function RoiHero({
  teamSize, hourlyCost, weeklyHoursSaved, adoptionPct
}: Props) {
  const effHours = Math.round(weeklyHoursSaved * adoptionPct);
  const monthlySavings = Math.round(effHours * hourlyCost * 4.3);
  const breakevenMonths = Math.max(0.5, Math.min(6,  (15000 /*avg setup*/)/Math.max(1, monthlySavings)));

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_420px_at_-10%_-10%,#DCEBFF_0%,transparent_60%),radial-gradient(900px_420px_at_110%_120%,#FFE6CF_0%,transparent_60%)]" />
      <div className="mx-auto max-w-[1100px] px-6 py-12 md:py-14">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink">ROI Calculator</h1>
        <p className="mt-2 max-w-2xl text-ink/70">
          Estimate time and money saved with digital employees. Tweak sliders below—your KPIs and breakeven update instantly.
        </p>

        {/* Glass dashboard */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <RoiKpi label="Team size" value={`${teamSize}`} />
          <RoiKpi label="Weekly hours saved" value={`${effHours}`} />
          <RoiKpi label="Est. monthly savings" value={`$${monthlySavings.toLocaleString()}`} />
          <RoiKpi label="Adoption" value={`${Math.round(adoptionPct*100)}%`} />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 rounded-3xl border border-white/50 bg-white/70 backdrop-blur p-5 shadow-[0_8px_24px_rgba(10,21,40,0.08)]">
            <div className="flex items-center justify-between text-sm text-ink/60">
              <span>Projected savings (12 mo)</span>
              <span>~${(monthlySavings*12).toLocaleString()}</span>
            </div>
            <Sparkline />
          </div>
          <BreakevenGauge months={breakevenMonths} />
        </div>

        <div className="mt-6 flex gap-3">
          <a href="/contact#book" className="rounded-full border border-white/60 bg-white/90 px-5 py-2.5 text-ink font-medium shadow-[0_8px_24px_rgba(10,21,40,0.08)] hover:shadow-[0_14px_40px_rgba(10,21,40,0.12)]">
            Start Free Audit
          </a>
          <a href="#calculator" className="rounded-full border border-white/50 bg-white/50 px-5 py-2.5 text-ink/80 hover:bg-white/70">
            Jump to sliders
          </a>
        </div>
      </div>
    </section>
  );
}


