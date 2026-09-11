"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fadeDelay = prefersReducedMotion ? 200 : 1200;
    const exitDelay = prefersReducedMotion ? 100 : 420;

    const timer = window.setTimeout(() => {
      setIsLeaving(true);
      window.setTimeout(() => setIsVisible(false), exitDelay);
    }, fadeDelay);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1, scale: isLeaving ? 0.98 : 1 }}
      transition={{ duration: isLeaving ? 0.35 : 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_32%),linear-gradient(145deg,_rgba(6,10,18,0.98),rgba(10,14,25,0.96))] text-[var(--foreground)]"
      aria-live="polite"
      aria-label="Loading NOVA"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-36 w-36 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative flex w-[min(92vw,28rem)] flex-col items-center rounded-[28px] border border-white/10 bg-white/5 px-7 py-8 shadow-[0_0_40px_rgba(124,58,237,0.18)] backdrop-blur-xl">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_35px_rgba(124,58,237,0.55)]">
          <span className="text-xl font-bold tracking-[-0.08em] text-white">N</span>
        </div>

        <div className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.34em] text-violet-200/90">
          NOVA
        </div>
        <div className="text-center text-3xl font-semibold tracking-[-0.08em] text-white sm:text-4xl">
          NOVA
        </div>

        <p className="mt-4 text-center text-sm text-slate-300/85">Intelligence for your workflow</p>

        <div className="mt-7 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 [animation:loadingPulse_1.4s_ease_in_out_infinite]" />
        </div>
      </div>
    </motion.div>
  );
}
