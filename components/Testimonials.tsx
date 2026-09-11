import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Testimonials</p>
        <h2 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
          Teams love the clarity, speed, and focus NOVA creates.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map(({ name, role, company, quote }, index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="group rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-violet-400/30"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-sm font-semibold text-white">
                  {name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">{name}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">
                    {role}, {company}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={`${name}-${starIndex}`} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-base leading-8 text-[var(--foreground)]">“{quote}”</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
