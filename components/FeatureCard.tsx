import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  glow: string;
};

export default function FeatureCard({ icon: Icon, title, description, stat, glow }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.04)]"
    >
      <div
        className={`absolute inset-x-6 top-0 h-24 bg-gradient-to-r ${glow} opacity-80 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)] text-[var(--accent)] shadow-lg shadow-violet-500/10">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-7 text-[var(--muted-foreground)]">{description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
          <span>{stat}</span>
          <span className="text-[var(--accent)]">→</span>
        </div>
      </div>
    </motion.article>
  );
}
