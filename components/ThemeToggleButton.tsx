import { Moon, Sun } from "lucide-react";

type ThemeToggleButtonProps = {
  theme: "light" | "dark";
  onToggle: () => void;
  className?: string;
};

export default function ThemeToggleButton({ theme, onToggle, className = "" }: ThemeToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle light or dark theme"
      className={[
        "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-violet-700 dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-slate-200 dark:hover:text-violet-200",
        className,
      ].join(" ")}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
