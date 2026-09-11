import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-violet-900/20"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="NOVA product demo"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close demo modal"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:bg-[var(--muted)]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[24rem] w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.28),transparent_52%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(17,24,39,0.82))]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
              <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

              <div className="relative flex h-full items-center justify-center">
                <div className="absolute inset-x-8 top-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-200 backdrop-blur-md">
                  <span>Flow overview</span>
                  <span className="flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/15 px-2 py-1 text-[10px] text-violet-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                <div className="relative mt-10 w-[85%] rounded-[24px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-200">
                      NOVA AI
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.6fr_0.9fr]">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                      <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        <span>Productivity overview</span>
                        <span>Q3</span>
                      </div>
                      <div className="flex items-end gap-2">
                        {[32, 45, 38, 62, 52, 74, 81].map((height, index) => (
                          <div key={height + index} className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-500 via-violet-400 to-sky-300" style={{ height: `${height}px`, opacity: 0.8 }} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">AI route</p>
                        <p className="text-2xl font-semibold text-white">24</p>
                        <p className="text-sm text-slate-300">automations active</p>
                      </div>
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-200">Autopilot</p>
                        <p className="mt-2 text-lg font-semibold">Weekly sync completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Product preview</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">See NOVA in action</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-[var(--primary-strong)]"
              >
                <Play className="h-4 w-4 fill-current" />
                Close preview
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
