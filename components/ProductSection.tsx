import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Gauge, Target } from "lucide-react";
import { productBullets, productHighlights } from "../data/content";

export default function ProductSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Product</p>
          <h2 className="max-w-lg text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
            One workspace for planning, delivery, and decision-making.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-foreground)]">
            Nova gives leaders and teams the clarity they need to prioritize what matters, reduce busywork, and move with confidence.
          </p>

          <div className="mt-8 space-y-4">
            {productBullets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <span className="text-sm leading-7 text-[var(--foreground)]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_0_60px_rgba(79,70,229,0.14)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.25),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),transparent_26%)]" />
          <div className="relative rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">AI assistant</p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">Project health</h3>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-500">
                Stable
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">Workflow</span>
                  <BrainCircuit className="h-4 w-4 text-violet-500" />
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Prioritize", progress: "82%" },
                    { name: "Automations", progress: "64%" },
                    { name: "Delivery", progress: "91%" },
                  ].map((row) => (
                    <div key={row.name}>
                      <div className="mb-2 flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                        <span>{row.name}</span>
                        <span className="text-[var(--foreground)]">{row.progress}</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--background)]">
                        <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: row.progress }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    <Target className="h-3.5 w-3.5 text-violet-500" />
                    Focus split
                  </div>
                  <p className="text-3xl font-semibold text-[var(--foreground)]">78%</p>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">High-priority work completed</p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    <Gauge className="h-3.5 w-3.5 text-emerald-500" />
                    Team output
                  </div>
                  <p className="text-3xl font-semibold text-[var(--foreground)]">2.4x</p>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">Faster task handoff cycles</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {productHighlights.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted-foreground)]">
                  <Icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
