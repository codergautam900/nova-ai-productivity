import { motion } from "framer-motion";
import { ArrowRight, Check, Play, ShieldCheck } from "lucide-react";
import { dashboardMetrics, heroBadges, quickSignals, snapshotBars, visualStats } from "../data/content";

type HeroProps = {
  onDemoOpen: () => void;
};

export default function Hero({ onDemoOpen }: HeroProps) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-[640px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300">
              AI PRODUCTIVITY PLATFORM
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl font-semibold tracking-[-0.08em] text-[var(--foreground)] sm:text-5xl lg:text-7xl"
          >
            Build Better. Work Smarter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="mt-6 max-w-xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg"
          >
            Turn complex workflows into intelligent systems. NOVA brings projects, automation, insights, and collaboration together in one powerful workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={onDemoOpen}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-[var(--primary-strong)]"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onDemoOpen}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:border-violet-400/50 hover:text-violet-500"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.45 }}
            className="mt-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex -space-x-2">
                {["AC", "SL", "JP", "MK"].map((initials, index) => (
                  <div
                    key={initials}
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-full border border-[var(--background)] text-[10px] font-bold text-white",
                      index === 0 ? "bg-violet-500" : index === 1 ? "bg-sky-500" : index === 2 ? "bg-emerald-500" : "bg-amber-500",
                    ].join(" ")}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>
                <span className="font-semibold text-[var(--foreground)]">10,000+ teams</span> already working smarter
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroBadges.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted-foreground)]">
                  <Icon className="h-3.5 w-3.5 text-emerald-500" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[620px] rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-3 shadow-[0_0_80px_rgba(99,102,241,0.18)]">
            <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="absolute bottom-8 right-6 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span>nova workspace</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
                <aside className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-3">
                  <div className="mb-4 flex items-center gap-2 rounded-xl bg-[var(--surface)] px-2 py-2 text-xs font-medium text-[var(--muted-foreground)]">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    Team hub
                  </div>
                  <div className="space-y-2">
                    {[
                      "Overview",
                      "Planning",
                      "Automations",
                      "Insights",
                    ].map((label, index) => (
                      <div
                        key={label}
                        className={[
                          "rounded-xl px-3 py-2 text-sm transition",
                          index === 0
                            ? "bg-[var(--surface)] text-[var(--foreground)]"
                            : "text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]",
                        ].join(" ")}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </aside>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">Project overview</p>
                        <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)]">Q4 Launch Sprint</h2>
                      </div>
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-500">
                        86% complete
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {dashboardMetrics.map(({ label, value, tone }) => (
                        <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-3">
                          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">{label}</p>
                          <p className={[
                            "mt-3 text-xl font-semibold",
                            tone === "violet" ? "text-violet-500" : tone === "cyan" ? "text-cyan-500" : "text-emerald-500",
                          ].join(" ")}>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">AI insights</p>
                        <span className="text-sm text-violet-500">+12.4%</span>
                      </div>
                      <div className="flex h-20 items-end gap-2">
                        {snapshotBars.map((height, index) => (
                          <div key={`${height}-${index}`} className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-500 via-violet-400 to-sky-300" style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">Focus</p>
                      <div className="mt-3 flex items-end gap-2">
                        <span className="text-3xl font-semibold text-[var(--foreground)]">9.4</span>
                        <span className="mb-1 text-sm text-[var(--muted-foreground)]">/10</span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-[var(--muted)]">
                        <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">Priority queue</p>
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Design sync", value: "9:30 AM" },
                        { label: "API review", value: "11:00 AM" },
                        { label: "Launch planning", value: "2:15 PM" },
                      ].map((task) => (
                        <div key={task.label} className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-sm">
                          <span className="text-[var(--foreground)]">{task.label}</span>
                          <span className="text-[var(--muted-foreground)]">{task.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-4 -left-4 flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-3 shadow-xl backdrop-blur-md">
            {quickSignals.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4 text-xs">
                <span className="text-[var(--muted-foreground)]">{label}</span>
                <span className="font-semibold text-[var(--foreground)]">{value}</span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute -right-3 top-12 flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-3 shadow-xl backdrop-blur-md">
            {visualStats.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">{label}</span>
                <span className="text-sm font-semibold text-[var(--foreground)]">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
