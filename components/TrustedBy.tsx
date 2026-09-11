import { brandMarks } from "../data/content";

export default function TrustedBy() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]/60 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
          Trusted by high-growth teams
        </p>
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6">
          {brandMarks.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3 py-4 text-sm font-semibold tracking-[-0.04em] text-[var(--muted-foreground)]">
              <Icon className="h-4 w-4 text-[var(--accent)]" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
