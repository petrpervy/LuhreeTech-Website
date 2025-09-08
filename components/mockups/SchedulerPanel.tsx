"use client";
import { motion } from "framer-motion";

export function SchedulerPanel() {
  const colBase = "flex-1 glass-tile p-3 relative overflow-hidden hover-glow";
  const dayHeader = "absolute top-2 left-3 text-[12px] font-medium text-gray-700/90";
  const gridLine = "absolute left-2 right-2 h-px bg-gray-300/40";
  const event = "absolute left-3 right-3 rounded-xl bg-accent-teal-500/16 text-brand-ink text-[12px] px-2 py-1 shadow-glass-sm whitespace-nowrap overflow-hidden text-ellipsis";

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="relative rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_30%_-20%,#EDE5FF_0%,transparent_60%),radial-gradient(700px_380px_at_90%_-10%,#DCEBFF_0%,transparent_60%)]" />
      <div className="relative grid grid-cols-7 gap-2 p-4 md:p-5 min-h-[300px]">
        {days.map((d, i) => (
          <div key={d} className={colBase} aria-label={`day ${d}`}>
            <div className={dayHeader}>{d}</div>
            {[25, 50, 75].map((t) => (
              <div key={t} className={gridLine} style={{ top: `${t}%` }} />
            ))}

            {i === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className={event}
                style={{ top: "32%" }}
                title="Initial Consult — Dr. Lewis (Reminder sent • Confirmed)"
              >
                Initial Consult — Dr. Lewis
                <div className="mt-1 text-[11px] text-accent-teal-500">Reminder sent • Confirmed ✓</div>
              </motion.div>
            )}

            {i === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className={event}
                style={{ top: "64%" }}
                title="Follow-up — Smith"
              >
                Follow-up — Smith
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* SMS bubble — stay inside, readable */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-4 right-4 max-w-[72%] md:max-w-[420px] rounded-2xl bg-white/95 border border-white/60 px-3 py-2 shadow-glass text-[12px] leading-5 text-brand-ink"
        role="status"
        aria-live="polite"
      >
        SMS: "Your appointment is confirmed for Tue 3:00 PM."
      </motion.div>
    </div>
  );
}
