import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "../data/content";

type PricingProps = {
  billingMode: "monthly" | "annual";
  setBillingMode: (mode: "monthly" | "annual") => void;
};

export default function Pricing({ billingMode, setBillingMode }: PricingProps) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Pricing</p>
          <h2 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
            Simple pricing that scales with your team.
          </h2>
        </div>

        <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1">
          {(["monthly", "annual"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setBillingMode(mode)}
              aria-pressed={billingMode === mode}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium capitalize transition",
                billingMode === mode
                  ? "bg-[var(--primary)] text-white shadow-lg shadow-violet-500/20"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
              ].join(" ")}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => {
          const price = plan.monthlyPrice === null ? "Custom" : billingMode === "monthly" ? `\$${plan.monthlyPrice}` : `\$${plan.annualPrice}`;

          return (
            <article
              key={plan.name}
              className={[
                "relative rounded-[28px] border p-6",
                plan.highlight
                  ? "border-violet-400/40 bg-[linear-gradient(180deg,rgba(139,92,246,0.10),rgba(15,23,42,0.02))] shadow-[0_0_50px_rgba(139,92,246,0.16)]"
                  : "border-[var(--border)] bg-[var(--surface)]",
              ].join(" ")}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-violet-200">
                  Most Popular
                </span>
              ) : null}

              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">{plan.description}</p>
                </div>
                {plan.highlight ? <Sparkles className="h-5 w-5 text-violet-500" /> : null}
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-[-0.08em] text-[var(--foreground)]">{price}</span>
                {plan.monthlyPrice !== null ? (
                  <span className="mb-1 text-sm text-[var(--muted-foreground)]">/month</span>
                ) : null}
              </div>

              {plan.monthlyPrice !== null && billingMode === "annual" ? (
                <p className="mt-3 text-xs text-emerald-500">Save 20% with annual billing</p>
              ) : null}

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={[
                  "mt-8 w-full rounded-full px-4 py-3 text-sm font-medium transition",
                  plan.highlight
                    ? "bg-[var(--primary)] text-white shadow-lg shadow-violet-500/20 hover:bg-[var(--primary-strong)]"
                    : "border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-violet-400/40",
                ].join(" ")}
              >
                {plan.cta}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
