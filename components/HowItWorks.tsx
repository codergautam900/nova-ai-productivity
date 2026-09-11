import { ArrowRight } from "lucide-react";
import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">How it works</p>
        <h2 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
          From scattered work to a smarter operating rhythm.
        </h2>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-3">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent lg:block" />

        {steps.map((step, index) => (
          <div key={step.number} className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--muted)] text-lg font-semibold text-[var(--foreground)]">
                {step.number}
              </span>
              {index < steps.length - 1 ? (
                <span className="hidden items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-violet-500 lg:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
              ) : null}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
            <p className="text-sm leading-7 text-[var(--muted-foreground)]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
