"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function ReceptionistPanel() {
  return (
    <div className="relative rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_60%_-20%,#DCEBFF_0%,transparent_60%)]" />
      <div className="relative grid md:grid-cols-[1fr_1.2fr] gap-4 p-4 md:p-5">
        <div className="bg-white/85 rounded-2xl border border-white/40 p-4 shadow-[0_16px_50px_rgba(2,8,23,0.08)]">
          <div className="text-sm font-semibold flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent-teal-500" /> Incoming call
          </div>
          <div className="mt-2 text-[13px] text-brand-ink">John D. — consultation</div>
          <div className="mt-3 flex gap-2">
            <button className="rounded-full px-3 py-1 bg-accent-teal-500/15 text-[12px] focus-ring">Accept</button>
            <button className="rounded-full px-3 py-1 bg-gray-300/40 text-[12px] focus-ring">Voicemail</button>
          </div>
        </div>
        <div className="bg-white/85 rounded-2xl border border-white/40 p-4 shadow-[0_16px_50px_rgba(2,8,23,0.08)]">
          <div className="text-[12px] text-gray-700">Agent</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-1 rounded-xl bg-gray-300/30 p-2 text-[13px]"
          >
            Hi John! What's the reason for your visit?
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-2 rounded-xl bg-white p-2 border border-white/60 text-[13px]"
          >
            New matter—consultation next week.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 rounded-xl bg-gray-300/30 p-2 text-[13px]"
          >
            Booked: Wed 10:30 AM • confirmation sent ✅
          </motion.div>
        </div>
      </div>
    </div>
  );
}


