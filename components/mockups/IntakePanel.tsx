"use client";
import { motion } from "framer-motion";
import { Check, Phone, Calendar, User } from "lucide-react";

const col = "glass-tile p-4 md:p-5 hover-glow";
const tag = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium";
const header = "font-semibold text-sm flex items-center gap-2";

export default function IntakePanel() {
  const Row = ({ label, sub, ok = false }: { label: string; sub: string; ok?: boolean }) => (
    <div className="flex items-center justify-between py-2.5 border-b border-white/60 last:border-none">
      <div className="min-w-0">
        <div className="text-[13px] font-medium text-brand-ink truncate">{label}</div>
        <div className="text-[12px] text-gray-700 truncate">{sub}</div>
      </div>
      {ok && <Check className="h-4 w-4 text-accent-teal-500" aria-hidden />}
    </div>
  );

  return (
    <div className="relative rounded-3xl overflow-hidden">
      {/* aurora tint for colorfulness */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_-20%,#DCEBFF_0%,transparent_60%),radial-gradient(700px_380px_at_90%_-10%,#EDE5FF_0%,transparent_60%)]" />
      <div className="relative grid gap-4 md:grid-cols-3 p-4 md:p-5">
        {/* Calls */}
        <div className={col}>
          <div className="flex items-center justify-between mb-3">
            <span className={header}>
              <Phone className="h-4 w-4 text-accent-teal-500" />
              <span className="text-brand-ink">Calls</span>
            </span>
            <span className={`${tag} bg-accent-teal-500/15 text-accent-teal-500`}>Live</span>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
            <Row label="Jane Smith" sub="Consult request • 2m ago" ok />
            <Row label="Luis Ortega" sub="Billing question • 6m ago" />
            <Row label="Unknown" sub="Voicemail left • 10m ago" />
          </motion.div>
        </div>

        {/* Intake */}
        <div className={col}>
          <div className="flex items-center justify-between mb-3">
            <span className={header}>
              <User className="h-4 w-4 text-accent-teal-500" />
              <span className="text-brand-ink">Intake</span>
            </span>
            <span className={`${tag} bg-gray-300/30 text-gray-700`}>Form</span>
          </div>
          <Row label="Name" sub="Jane Smith" ok />
          <Row label="Matter" sub="New consultation" ok />
          <Row label="Urgency" sub="Next 7 days" ok />
          <Row label="Notes" sub="Prefers mornings" ok />
        </div>

        {/* Booked */}
        <div className={col}>
          <div className="flex items-center justify-between mb-3">
            <span className={header}>
              <Calendar className="h-4 w-4 text-accent-teal-500" />
              <span className="text-brand-ink">Booked</span>
            </span>
            <span className={`${tag} bg-accent-teal-500/15 text-accent-teal-500`}>Confirmed</span>
          </div>
          <div className="text-[13px]">
            <div className="font-medium text-brand-ink">Consultation</div>
            <div className="text-gray-700">Tue 3:00 PM • Google Calendar</div>
          </div>
          <div className="mt-3 text-[12px] text-accent-teal-500">SMS sent: "See you Tue 3:00 PM."</div>
        </div>
      </div>
    </div>
  );
}
