import { motion } from "framer-motion";
import { solutionCards } from "../data/content";

export default function Solutions() {
  return (
    <section id="solutions" data-section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Solutions</p>
        <h2 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
          Built for teams at every stage of growth.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {solutionCards.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="group rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.08))] p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.05)] transition hover:-translate-y-1 hover:border-violet-400/30"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-500">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">{title}</h3>
            <p className="text-sm leading-7 text-[var(--muted-foreground)]">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
