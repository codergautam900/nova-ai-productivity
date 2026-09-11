"use client";

import { useEffect, useState } from "react";
import { stats } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function AnimatedValue({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1400;

    const tick = (time: number) => {
      if (start === null) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {value < 10 && value % 1 !== 0 ? displayValue.toFixed(1) : Math.round(displayValue)}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="border-y border-[var(--border)] bg-[var(--surface)]/60 py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Impact</p>
          <h2 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
            Teams move faster when work is visible, automated, and aligned.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6">
              <div className="text-4xl font-semibold tracking-[-0.08em] text-[var(--foreground)] sm:text-5xl">
                {isVisible ? <AnimatedValue value={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div className="mt-3 text-sm text-[var(--muted-foreground)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
